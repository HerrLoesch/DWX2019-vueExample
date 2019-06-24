import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      drawings: []
    },
    getters: {
        getDrawings: state => {
            return state.drawings
        },
        getDrawing: state => id => {
            return _.find(state.drawings, x => x.dateTime === id)
        }
    },
    mutations: {
      setDrawings (state, drawings) {
        state.drawings = drawings
      }
    },
    actions: {
      initialize (context) {

        context.commit('setDrawings', [{
          date: '24.06.2019',
          numbers: [1,2,3,4,5,6],
          additionalNumber: 6
        },
        {
          date: '17.06.2019',
          numbers: [7,8,9,10,11,12],
          additionalNumber: 13
        }])

        /*
        axios.get('https://lottoarchive.azurewebsites.net/values')
        .then(function (response) {            
            context.commit('setDrawings', response.data.values)
           })
           .catch(function (error) {
               console.log(error);
           })                  */
      }
    }
  })

export default store

