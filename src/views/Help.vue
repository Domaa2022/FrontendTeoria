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
                            src="https://img.freepik.com/foto-gratis/mano-que-sostiene-flecha-crecimiento-monedas_23-2148780591.jpg"
                            alt="">
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="Information">
                <p>
                <p>Descripción del modelo :</p>
                El Modelo de Solow, también conocido como el Modelo de Crecimiento de Solow o la Teoría del
                Crecimiento de Solow, es un modelo económico que se utiliza para explicar cómo diferentes factores
                como el ahorro, la población y la tecnología afectan el crecimiento económico a largo plazo de un
                país
                </p>

            </v-container>

            <v-container style="display: flex; justify-content: right; align-items: center;">
                <router-link to="/expectedEntries" style="margin-right: 100px;">
                    <v-btn height="70" width="300" color="#80A1C1" dark>Entradas Esperadas
                    </v-btn></router-link>

                <a href="https://www.youtube.com/watch?v=NrX-NFk-at4" target="_blank" style="margin-right: 100px;">
                    <v-btn height="70" width="300" color="#80A1C1" dark> Video Explicativo

                    </v-btn>
                </a>

                <a href="https://nulan.mdp.edu.ar/id/eprint/1854/1/01466.pdf" target="_blank" style="margin-right: 100px;">
                    <v-btn height="70" width="300" color="#80A1C1" dark> Documento Explicativo

                    </v-btn>
                </a>

                <router-link to="/">
                    <v-btn height="70" width="300" color="#80A1C1" dark> Cancelar
                </v-btn></router-link>

                

            </v-container>


        </v-main>
    </v-app>

</template>
<script></script>

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
</style>
