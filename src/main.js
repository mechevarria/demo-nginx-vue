import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'perfect-scrollbar/dist/perfect-scrollbar'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'c-sidebar-nav-link-primary'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
