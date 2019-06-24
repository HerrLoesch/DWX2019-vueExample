<template>
    <v-container id="DrawingDetails">
        <h1>
            Details
        </h1>
        
        <LottoDrawing :drawing="drawing"></LottoDrawing>

        <v-btn v-on:click="goBack">Back</v-btn>
    </v-container>
</template>

<script>
import LottoDrawing from '../components/LottoDrawing'
import store from '../store'

export default {
    name: 'DrawingDetails',
    components:{
        LottoDrawing
    },
    data: () => ({
        drawing: {
            date: '25.06.2018',
            numbers: [1,2,3,4,5,6],
            additionalNumber: 5
        }
    }),
    mounted: function() {        
        this.drawing = store.getters.getDrawing(this.$route.params.drawing)
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        }
    }
}
</script>

