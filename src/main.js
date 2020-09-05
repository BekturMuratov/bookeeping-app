import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import dateFilter from '@/filters/date.filter.js'
import MessagePlugin from '@/utils/message.plugin.js'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

Vue.use(Vuelidate)
Vue.use(MessagePlugin)


Vue.config.productionTip = false
Vue.filter('date',dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
