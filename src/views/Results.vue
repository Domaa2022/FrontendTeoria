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
                    <v-text-field bg-color="#ffffff" label="TASA DE AHORRO"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE CRECIMIENTO POBLACIONAL"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE DEPRECIACIÓN DE CAPITAL"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form">
                    <v-text-field bg-color="#ffffff" label="TASA DE POGRESO TECNOLOGICO"></v-text-field>
                    <p class="Symbol">%</p>
                </v-container>

                <v-container class="Form" style="padding-bottom: 0px;">
                    <v-text-field bg-color="#ffffff" label="COEFICIENTE DE ELASTICIDAD"></v-text-field>
                    <p class="Symbol" style="color: #CDC392;">%</p>
                </v-container>

                <v-container style="padding-top: 0px;">
                    <p>ESTE VALOR TIENE QUE ESTAR EN EL RANGO DE 0 A 1</p>
                </v-container>

                <v-container>
                    <v-row>
                        <v-col cols="6" id='Buttons'>
                            <router-link to="/">
                                <v-btn height="70" width="500" color="#80A1C1" dark>GUARDAR
                                </v-btn></router-link>

                        </v-col>
                        <v-col cols="6" id='Buttons'>
                            <router-link to="/">
                                <v-btn height="70" width="500" color="#80A1C1" dark> CANCELAR</v-btn></router-link>
                        </v-col>
                    </v-row>
                </v-container>


            </v-container>

            <v-container class="flex-center" style="display: flex;justify-content: center; align-items: center;">
                <img class="my-image"
                    src="https://imagenes.diario16plus.com/wp-content/uploads/2022/02/crecimiento-economico.jpg" alt="">
            </v-container>

        </v-main>
    </v-app>

</template>
<script setup>




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
