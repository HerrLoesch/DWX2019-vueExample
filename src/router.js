import VueRouter from 'vue-router'
import Vue from 'vue'
import LottoDrawings from './views/LottoDrawings'
import LottoDrawingDetails from './views/LottoDrawingDetails'

Vue.use(VueRouter)

let routes = [
  { path: '/drawings', component: LottoDrawings, name: 'list' },
  { path: '/details/:drawing', component: LottoDrawingDetails, name: 'details' },
  { path: '*', redirect: '/drawings' }
]

let router = new VueRouter({
  routes
})

export default router
