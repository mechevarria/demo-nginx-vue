import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DropdownPlugin from 'bootstrap-vue'
import ToastPlugin from 'bootstrap-vue'
import VueMobileDetection from 'vue-mobile-detection'
import 'perfect-scrollbar/dist/perfect-scrollbar'
import '@popperjs/core/dist/esm/popper'
import routes from './routes'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.use(VueRouter)
Vue.use(DropdownPlugin)
Vue.use(ToastPlugin)
Vue.use(VueMobileDetection)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'c-sidebar-nav-link-primary'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
