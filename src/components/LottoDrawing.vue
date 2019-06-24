<template>
    <v-card div id="LottoDrawing">
        <v-card-title><h2>{{drawing.date}}</h2></v-card-title>
        <v-card-text>
            <v-chip v-for="(number,index) in drawing.numbers" :key="index">
                {{number}} </v-chip> <br>
            Super Number: <v-chip>{{drawing.additionalNumber}}</v-chip>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'LottoDrawing',  
  props: ['drawing']
}
</script>

<style>

</style>
