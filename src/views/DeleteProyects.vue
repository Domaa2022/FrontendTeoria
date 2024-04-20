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
                    <v-col cols="6" id="Buttons">
                        <v-btn height="70" width="300" color="#80A1C1" dark @click="eliminarProyecto()">ELIMINAR PROYECTO
                            </v-btn>
                    </v-col>
                    <v-col cols="6" id="Buttons">
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

const eliminarProyecto = async () => {

    //Enviar una alerta para confirmar la eliminación
    if (confirm("¿Está seguro de que desea eliminar el proyecto?")) {
        const params = {
            nombre: seleccionado.value
        }
        const queryString = new URLSearchParams(params).toString()
        const url = `http://localhost:3000/Simulador/deletesimulacion?${queryString}`;

        try {
            const res = await fetch(url, {
                method: 'POST',
            })
            const data = await res.json()
            if( res.status === 200){
                alert("Proyecto eliminado correctamente")
            }
            router.push('/')
        } catch (error) {
            console.log(error)
        }
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