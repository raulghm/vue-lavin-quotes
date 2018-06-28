import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { apolloProvider } from './apollo'

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
