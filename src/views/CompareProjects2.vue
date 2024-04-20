<template>
    <v-app id="Container">

        <v-app-bar app color="#023436">
            <v-app-bar-title id='TitleNav'>
                Crecimiento económico de Solow
            </v-app-bar-title>
        </v-app-bar>

        <v-main class="pt-16">

            <v-container style="display: flex;">
                <!-- Primer Grafico -->
                <v-container>
                    <v-container style="display: flex ; justify-content: space-evenly;">
                        <span id="label1" class="label success">Output por trabajador</span>
                        <span id="label2" class="label info">Inversión por trabajador</span>
                        <span id="label3" class="label warning">Depreciación efectiva por trabajador</span>
                    </v-container>

                    <v-container class="flex-center"
                        style="display: flex;justify-content: center; align-items: center;">
                        <canvas style="display: block;" height="200" width="200" id="myChart"></canvas>
                    </v-container>

                </v-container>

                <!-- Segundo Grafico -->

                <v-container>
                    <v-container style="display: flex ; justify-content: space-evenly;">
                        <span id="label1" class="label success2">Output por trabajador</span>
                        <span id="label2" class="label info2">Inversión por trabajador</span>
                        <span id="label3" class="label warning2">Depreciación efectiva por trabajador</span>
                    </v-container>

                    <v-container class="flex-center"
                        style="display: flex;justify-content: center; align-items: center;">
                        <canvas style="display: block;" height="200" width="200" id="myChart2"></canvas>
                    </v-container>

                </v-container>
            </v-container <!-- Tablas -->

            <v-container style="display: flex;">

                <v-container>
                    <v-table style="background-color:beige;">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Variable
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ 'Tasa de Ahorro' }}</td>
                                <td>{{ tasaAhorro }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Crecimiento Poblacional' }}</td>
                                <td>{{ tasaCrecimientoPoblacional }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Depreciación de Capital' }}</td>
                                <td>{{ tasaDepreciacionCapital }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Progreso Tecnológico' }}</td>
                                <td>{{ tasaProgresoTecnologico }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Coeficiente de Elasticidad' }}</td>
                                <td>{{ coeficienteElasticidad }}</td>
                            </tr>

                        </tbody>
                    </v-table>

                </v-container>

                <v-container>

                    <v-table style="background-color:beige;">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Variable
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ 'Tasa de Ahorro' }}</td>
                                <td>{{ tasaAhorro2 }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Crecimiento Poblacional' }}</td>
                                <td>{{ tasaCrecimientoPoblacional2 }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Depreciación de Capital' }}</td>
                                <td>{{ tasaDepreciacionCapital2 }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Tasa de Progreso Tecnológico' }}</td>
                                <td>{{ tasaProgresoTecnologico2 }}</td>
                            </tr>

                            <tr>
                                <td>{{ 'Coeficiente de Elasticidad' }}</td>
                                <td>{{ coeficienteElasticidad2 }}</td>
                            </tr>

                        </tbody>
                    </v-table>


                </v-container>


            </v-container>




            <!-- Botones -->
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <router-link to="/CompareProjects" style="text-decoration: none;">
                            <v-btn color="#023436" dark block>Regresar</v-btn>
                        </router-link>
                    </v-col>
                </v-row>

            </v-container>

        </v-main>
    </v-app>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);
let chart;
let chart2;

// Proyecto 1
let tasaAhorro = ref(null);
let tasaCrecimientoPoblacional = ref(null);
let tasaDepreciacionCapital = ref(null);
let tasaProgresoTecnologico = ref(null);
let coeficienteElasticidad = ref(null);

// Proyecto 2
let tasaAhorro2 = ref(null);
let tasaCrecimientoPoblacional2 = ref(null);
let tasaDepreciacionCapital2 = ref(null);
let tasaProgresoTecnologico2 = ref(null);
let coeficienteElasticidad2 = ref(null);

// Tablas
let informacion = []
let informacion2 = []



// Grafico inicial 
onMounted(async () => {
    const proyecto = window.localStorage.getItem('proyecto1');
    const segundoProyecto = window.localStorage.getItem('proyecto2');

    const params = {
        proyecto: proyecto,
    };
    const queryString = new URLSearchParams(params).toString();
    const url = `http://localhost:3000/Simulador/getsimulacion?${queryString}`;


    // Proyecto 1 
    try {
        const res = await fetch(url, {
            method: 'GET',
        });
        const data = await res.json();
        const { Simulacion } = data;
        const { depValues, iValues, kValues, yValues } = Simulacion[0];

        tasaAhorro.value = Simulacion[0].tasaAhorro;
        tasaCrecimientoPoblacional.value = Simulacion[0].tasaCrecimientoPoblacional;
        tasaDepreciacionCapital.value = Simulacion[0].tasaDepreciacion;
        tasaProgresoTecnologico.value = Simulacion[0].tasaProgresoTecnologico;
        coeficienteElasticidad.value = Simulacion[0].coeficienteElasticidad;

        informacion.push({
            tasaAhorro: tasaAhorro.value,
            tasaCrecimientoPoblacional: tasaCrecimientoPoblacional.value,
            tasaDepreciacionCapital: tasaDepreciacionCapital.value,
            tasaProgresoTecnologico: tasaProgresoTecnologico.value,
            coeficienteElasticidad: coeficienteElasticidad.value
        })

        console.log(informacion);


        const depValuesTranformed = depValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;

        })

        const iValuesTranformed = iValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        const kValuesTranformed = kValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        const yValuesTranformed = yValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        let ctx = document.getElementById("myChart").getContext("2d");
        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: kValuesTranformed,
                datasets: [
                    {
                        label: "Output por trabajador ($y = k^α$)",
                        data: yValuesTranformed,
                        borderColor: "blue",
                        fill: false,
                    },
                    {
                        label: "Inversión por trabajador ($s cdot y$)",
                        data: iValuesTranformed,
                        borderColor: "green",
                        fill: false,
                    },
                    {
                        label: "Depreciación efectiva por trabajador ($[n + g + d] cdot k$)",
                        data: depValuesTranformed,
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






    } catch (error) {
        console.log(error);

    }


    // Proyecto 2

    const params2 = {
        proyecto: segundoProyecto,
    };
    const queryString2 = new URLSearchParams(params2).toString();
    const url2 = `http://localhost:3000/Simulador/getsimulacion?${queryString2}`;

    try {
        const res = await fetch(url2, {
            method: 'GET',
        });
        const data = await res.json();
        const { Simulacion } = data;
        const { depValues, iValues, kValues, yValues } = Simulacion[0];

        tasaAhorro2.value = Simulacion[0].tasaAhorro;
        tasaCrecimientoPoblacional2.value = Simulacion[0].tasaCrecimientoPoblacional;
        tasaDepreciacionCapital2.value = Simulacion[0].tasaDepreciacion;
        tasaProgresoTecnologico2.value = Simulacion[0].tasaProgresoTecnologico;
        coeficienteElasticidad2.value = Simulacion[0].coeficienteElasticidad;


        const depValuesTranformed = depValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;

        })

        const iValuesTranformed = iValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        const kValuesTranformed = kValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        const yValuesTranformed = yValues.map((value) => {
            let number = parseFloat(value.$numberDecimal);

            return number;
        })

        let ctx = document.getElementById("myChart2").getContext("2d");
        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: kValuesTranformed,
                datasets: [
                    {
                        label: "Output por trabajador ($y = k^α$)",
                        data: yValuesTranformed,
                        borderColor: "orange    ",
                        fill: false,
                    },
                    {
                        label: "Inversión por trabajador ($s cdot y$)",
                        data: iValuesTranformed,
                        borderColor: "purple",
                        fill: false,
                    },
                    {
                        label: "Depreciación efectiva por trabajador ($[n + g + d] cdot k$)",
                        data: depValuesTranformed,
                        borderColor: "brown",
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
        console.log(error);
    }






});


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

.label {
    color: white;
    padding: 8px;
}

.success {
    background-color: blue
}

/* Green */
.info {
    background-color: green
}

/* Blue */
.warning {
    background-color: red
}

/* Orange */

.success2 {
    background-color: orange
}

/* Green */
.info2 {
    background-color: purple
}

/* Blue */
.warning2 {
    background-color: brown
}

/* Orange */
</style>
