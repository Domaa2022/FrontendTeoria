<template>
    <v-app id="Container">
        <v-app-bar app color="#023436">
            <v-app-bar-title id="TitleNav">
                Crecimiento económico de Solow
            </v-app-bar-title>
        </v-app-bar>

        <v-main class="pt-16">
            <v-container>
                <v-row id="rows2">
                    <v-col cols="12">
                        <h1>Proyectos</h1>
                    </v-col>
                </v-row>`

                <v-row id="contendorProyectos">
                    <v-col cols="12">
                        <h3>Seleccione un proyecto</h3>
                    </v-col>

                    <v-col cols="12">
                        <v-select v-model="seleccionado" label="Select"
                            :items="proyectos">
                        </v-select>
                    </v-col>
                    
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col cols="4" id="Buttons">
                            <v-btn height="70" width="300" color="#80A1C1" dark @click="proyectoVisualizar()">VER
                            </v-btn>
                    </v-col>
                    <v-col cols="4" id="Buttons">
                        <router-link to="/compareprojects">
                            <v-btn height="70" width="300" color="#80A1C1" dark >
                                COMPARAR PROYECTOS
                            </v-btn>
                        </router-link>
                    </v-col>
                    <v-col cols="4" id="Buttons">
                        <router-link to="/">
                            <v-btn height="70" width="300" color="#80A1C1" dark>Salir
                            </v-btn></router-link>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const proyectos = ref([])
const seleccionado = ref('')
const seleccionado2 = ref('')
const proyectos2 = ref([])
const router = useRouter()





onMounted(async () => {
    try {
        const res = await fetch(
            'http://localhost:3000/Simulador/getsimulaciones',
            {
                method: 'GET',
            }
        )
        const data = await res.json()
        let { conetnido } = data
        let contenido = Array.from(conetnido)
        contenido.forEach((element) => {
            proyectos.value.push(element[0])
        })

    } catch (error) {
        console.log(error)
    }
})

watch(seleccionado, () => {
    proyectos2.value = proyectos.value.filter(proyecto => proyecto !== seleccionado.value)
})


const proyectoVisualizar = () => {
    // tiene que selecionar un proyecto antes de guardar si no no lo deja redirigir
    if (seleccionado.value === '') {
        alert('Seleccione un proyecto')
    } else {
        window.localStorage.setItem('proyecto', seleccionado.value)
        router.push('/simulator2')
    }

}



</script>

<style scoped>
#Container {
    background-color: #cdc392;
}

#TitleNav {
    text-align: center;
}

#Image {
    display: flex;
    justify-content: center;
    align-items: center;
}

#Buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-image {
    width: 70%;
    height: auto;
    border-radius: 40px;
}
</style>