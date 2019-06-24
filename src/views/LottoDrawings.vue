<template>
    <v-container id="LottoDrawings">
        <v-layout row>
            <v-flex xs6>
                <v-text-field label="Number" v-model.number="searchText"></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-btn v-on:click="search">Search</v-btn>        
            </v-flex>
        </v-layout>
        <transition name="fade" v-for="(drawing, index) in visibleDrawings" :key="index">
            <v-layout row>
                <router-link :to="{ name: 'details', params: { drawing: drawing }}">
                    <LottoDrawing v-bind:drawing='drawing'></LottoDrawing>
                </router-link>
            </v-layout>
        </transition>
    </v-container>
</template>

<script>
import LottoDrawing from '../components/LottoDrawing'
import _ from 'lodash'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'LottoDrawings',
    components:{
        LottoDrawing
    },
    data: () => ({
        visibleDrawings: [],
        searchText: ''
    }),
    computed: mapState(['drawings']),
    watch: {
        searchText: function () {            
            this.search()
        },
        drawings: function() {
            this.search()
        }
    },
    methods: {
        filter(drawing) {          
            var numberIncludeSearchText = _.includes(drawing.numbers, this.searchText)

            return drawing.superNumber == this.searchText || numberIncludeSearchText
        },
        search() {           

            if (this.searchText == null || '' == _.trim(this.searchText)) {
                this.visibleDrawings = this.drawings
                return
            }

            this.visibleDrawings = _.filter(this.drawings, this.filter)            
        }
    },
    created : function() {
        this.$store.dispatch('initialize')
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>