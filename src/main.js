import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import Accounting from 'accounting-js'
import './assets/main.scss'


Vue.config.productionTip = false

// Global filters
Vue.filter('currency', val => {
  return Accounting.formatMoney(val, {symbol: "$", precision: 4, thousand: ",", decimal: "."})
})

Vue.filter('format_number', val => {
  return Accounting.formatNumber(val)
})




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
