import Vue from 'vue'
import App from './App.vue'
import 'perfect-scrollbar/dist/perfect-scrollbar'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
