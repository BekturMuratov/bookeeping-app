import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import dateFilter from '@/filters/date.filter.js'
import MessagePlugin from '@/utils/message.plugin.js'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



Vue.use(Vuelidate)
Vue.use(MessagePlugin)
Vue.config.productionTip = false
Vue.filter('date',dateFilter)



firebase.initializeApp({
    apiKey: "AIzaSyBd-fDvjL4eZTHwIwDVFsgMiWBJ3qxraVk",
    authDomain: "bookeeping-app-130ed.firebaseapp.com",
    databaseURL: "https://bookeeping-app-130ed.firebaseio.com",
    projectId: "bookeeping-app-130ed",
    storageBucket: "bookeeping-app-130ed.appspot.com",
    messagingSenderId: "634292015090",
    appId: "1:634292015090:web:cd0ce673d810ccb8c3e56b",
    measurementId: "G-S5RQVQC642"
  });

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
