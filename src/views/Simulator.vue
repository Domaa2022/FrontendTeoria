<template>
    <v-app id="Container">

        <v-app-bar app color="#023436">
            <v-app-bar-title id='TitleNav'>
                Crecimiento económico de Solow
            </v-app-bar-title>
        </v-app-bar>

        <v-main class="pt-16" style="display: flex;">
            <v-container class="flex-center">
                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE AHORRO" v-model="tasaAhorro"
                        :rules="[value => value <= 100 || 'El valor no puede ser mayor que 100']">
                    </v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE CRECIMIENTO POBLACIONAL"
                        v-model="tasaCrecimientoPoblacional"
                        :rules="[value => value <= 100 || 'El valor no puede ser mayor que 100']"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE DEPRECIACIÓN DE CAPITAL"
                        v-model="tasaDepreciacionCapital"
                        :rules="[value => value <= 100 || 'El valor no puede ser mayor que 100']"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE POGRESO TECNOLOGICO"
                        v-model="tasaProgresoTecnologico"
                        :rules="[value => value <= 100 || 'El valor no puede ser mayor que 100']"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form" style="padding-bottom: 0px;">
                    <v-text-field bg-color="#ffffff" label="COEFICIENTE DE ELASTICIDAD" v-model="coeficienteElasticidad"
                        :rules="[value => (value >= 0 && value <= 1) || 'El valor debe estar en el rango de 0 a 1']"></v-text-field>
                    <p class="Symbol" style="color: #CDC392;">%</p>
                </v-container>

                <v-container style="padding-top: 0px;">
                    <p>ESTE VALOR TIENE QUE ESTAR EN EL RANGO DE 0 A 1</p>
                </v-container>

                <v-container>
                    <v-row>
                        <v-col cols="6" id='Buttons'>
                            <v-btn height="70" width="500" color="#80A1C1" dark @click="iniciarSimulacion()">INICIAR
                            </v-btn>

                        </v-col>
                        <v-col cols="6" id='Buttons'>
                            <router-link to="/">
                                <v-btn height="70" width="500" color="#80A1C1" dark>
                                    CANCELAR</v-btn></router-link>
                        </v-col>
                    </v-row>
                </v-container>


            </v-container>

            <v-container class="flex-center" style="display: flex;justify-content: center; align-items: center;">
                <canvas style="display: block;" height="400" width="400" id="myChart"></canvas>
                <canvas style="display: none;" height="400" width="400" id="myChart2"></canvas>
            </v-container>

        </v-main>
    </v-app>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);
let chart;

//Datos de prueba
const s = 0.1; // tasa de ahorro
const d = 0.1; // tasa de depreciación
const n = 0.2; // crecimiento de la población
const g = 0.05; // progreso tecnológico
const alpha = 0.5; // elasticidad de la producción respecto al capital

// Variables reactivas
let tasaAhorro = ref(null);
let tasaCrecimientoPoblacional = ref(null);
let tasaDepreciacionCapital = ref(null);
let tasaProgresoTecnologico = ref(null);
let coeficienteElasticidad = ref(null);

// Grafico inicial 
onMounted(() => {
    const y = (k) => Math.pow(k, alpha); // Output por trabajador
    const i = (k) => s * y(k); // Inversión por trabajador
    const dep = (k) => (n + g + d) * k; // Depreciación efectiva por trabajador
    // Generar datos para el gráfico
    let kValues = Array.from({ length: 100 }, (_, i) => i);
    let yValues = kValues.map((k) => y(k));
    let iValues = kValues.map((k) => i(k));
    let depValues = kValues.map((k) => dep(k));
    let ctx = document.getElementById("myChart").getContext("2d");
    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: kValues,
            datasets: [
                {
                    label: "Output por trabajador ($y = k^α$)",
                    data: yValues,
                    borderColor: "blue",
                    fill: false,
                },
                {
                    label: "Inversión por trabajador ($s cdot y$)",
                    data: iValues,
                    borderColor: "green",
                    fill: false,
                },
                {
                    label: "Depreciación efectiva por trabajador ($[n + g + d] cdot k$)",
                    data: depValues,
                    borderColor: "red",
                    borderDash: [5, 5],
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Capital por trabajador ($k$)",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Output, Inversión y Depreciación por trabajador",
                    },
                },
            },
        },
    });
});

// Función para iniciar la simulación
const iniciarSimulacion = async () => {
    const params = {
        tasaAhorro: (tasaAhorro.value) / 100,
        tasaDepreciacionCapital: (tasaDepreciacionCapital.value) / 100,
        tasaCrecimientoPoblacional: (tasaCrecimientoPoblacional.value) / 100,
        tasaProgresoTecnologico: (tasaProgresoTecnologico.value) / 100,
        coeficienteElasticidad: coeficienteElasticidad.value
    };
    const queryString = new URLSearchParams(params).toString();
    const url = `http://localhost:3000/Simulador/calc?${queryString}`;

    try {
        const res = await fetch(url, {
            method: 'POST', // Aunque se está usando POST, los datos se envían en la URL.
        });
        const data = await res.json();
        const { respuesta } = data;
        const { depValues, iValues, kValues, yValues } = respuesta;
        if (chart) {
            chart.destroy();
        }
        //Ocultar el primer gráfico
        document.getElementById("myChart").style.display = "none";
        document.getElementById("myChart2").style.display = "block";
        let ctx = document.getElementById("myChart2").getContext("2d"); 7
        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: kValues,
                datasets: [
                    {
                        label: "Output por trabajador ($y = k^α$)",
                        data: yValues,
                        borderColor: "orange",
                        fill: false,
                    },
                    {
                        label: "Inversión por trabajador ($s cdot y$)",
                        data: iValues,
                        borderColor: "purple",
                        fill: false,
                    },
                    {
                        label: "Depreciación efectiva por trabajador ($[n + g + d] cdot k$)",
                        data: depValues,
                        borderColor: "yellow",
                        borderDash: [5, 5],
                        fill: false,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Capital por trabajador ($k$)",
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Output, Inversión y Depreciación por trabajador",
                        },
                    },
                },
            },
        });



    } catch (error) {
        console.error(error);
    }
}


</script>

<style scoped>
#Image {
    display: flex;
    justify-content: center;
    align-items: center;
}

#Container {
    background-color: #CDC392;
}

#TitleNav {
    text-align: center;
}

.Information {
    justify-content: center;
    align-items: center;
    background-color: #CDC392;
    font-size: 40px;
    font-family: 'Roboto';
    color: #023436;
}

.Symbol {
    margin-left: 10px;
    font-size: xx-large;
    font-weight: bolder;
    margin-bottom: 20px;
}

.Form {
    display: flex;
    justify-content: center;
    align-items: center;


}

.my-image {
    width: 70%;
    height: auto;
    border-radius: 40px;
}

.flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
