<template>
    <v-app id="Container">

        <v-app-bar app color="#023436">
            <v-app-bar-title id='TitleNav'>
                Crecimiento económico de Solow
            </v-app-bar-title>
        </v-app-bar>

        <v-main class="pt-16">
            <v-container>
                <v-row>
                    <v-col cols="12" id='Image'>
                        <img class="my-image"
                            src="https://imagenes.diario16plus.com/wp-content/uploads/2022/02/crecimiento-economico.jpg"
                            alt="">
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col cols="3" id='Buttons'>
                        <router-link to="/simulator">
                            <v-btn height="70" width="300" color="#80A1C1" dark>Iniciar
                            </v-btn></router-link>

                    </v-col>
                    <v-col cols="3" id='Buttons'>
                        <router-link to="/help">
                            <v-btn height="70" width="300" color="#80A1C1" dark> Ayuda
                            </v-btn></router-link>
                    </v-col>
                    <v-col cols="3" id='Buttons'>
                        <router-link to="/seeprojects">
                            <v-btn height="70" width="300" color="#80A1C1" dark>Ver Proyectos
                            </v-btn></router-link>
                    </v-col>
                    <v-col cols="3" id='Buttons'>
                        <router-link to="/deleteproyects">
                            <v-btn height="70" width="300" color="#80A1C1" dark>Eliminar Proyectos
                            </v-btn></router-link>
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-app>

</template>
<script></script>

<style scoped>
#Container {
    background-color: #CDC392;
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
