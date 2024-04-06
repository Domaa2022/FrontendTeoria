<template>
    <v-app id="Container">

        <v-app-bar app color="#023436">
            <v-app-bar-title id='TitleNav'>
                Crecimiento económico de Solow
            </v-app-bar-title>
        </v-app-bar>

        <v-main class="pt-16">


            <v-container class="Information">

                <p><strong>Entradas esperadas: </strong></p>
                <br>

                <p><strong>Tasa de ahorro:</strong>
                    Representa la proporción del ingreso o la producción total que se ahorra e invierte
                    en nuevo capital. Es un factor crucial que determina la acumulación de capital y, por tanto, el
                    crecimiento económico a largo plazo.
                </p>

                <br>

                <p><strong>Tasa de crecimiento de la población:</strong>
                    Indica cómo cambia la población (y, por extensión, la fuerza
                    laboral) con el tiempo. Un crecimiento más rápido de la población puede diluir el capital per
                    cápita, afectando el crecimiento económico.
                </p>

                <br>

                <p><strong>Tasa de depreciación del capital:</strong>
                    Muestra la tasa a la cual el capital físico (como maquinarias,
                    edificios) pierde valor o se degrada con el tiempo. Un capital más alto de depreciación
                    significa
                    que se necesita más inversión solo para mantener el nivel actual de capital per cápita.
                </p>

                <br>

                <p><strong>Elasticidad de la producción respecto al capital: </strong>
                    Este parámetro refleja cómo la cantidad de
                    producción cambia en respuesta a un cambio en la cantidad de capital, manteniendo constantes
                    otros
                    factores. En el modelo de Solow, esta elasticidad captura los rendimientos decrecientes del
                    capital,
                    es decir, cada unidad adicional de capital tiene un impacto menor en la producción que la unidad
                    anterior.
                </p>


            </v-container>

            <v-container style="display: flex; justify-content: right; align-items: center;">
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
    font-size: 30px;
    font-family: 'Roboto';
    color: #023436;
}
</style>
