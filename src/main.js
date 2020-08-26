import Vue from 'vue'
import App from './App.vue'
import DropdownPlugin from 'bootstrap-vue'
import ToastPlugin from 'bootstrap-vue'
import TablePlugin from 'bootstrap-vue'
import VueMobileDetection from 'vue-mobile-detection'
import 'perfect-scrollbar/dist/perfect-scrollbar'
import '@popperjs/core/dist/esm/popper'
import router from './app-router'
import store from './app-store'

Vue.config.productionTip = false

Vue.use(DropdownPlugin)
Vue.use(ToastPlugin)
Vue.use(TablePlugin)
Vue.use(VueMobileDetection)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
