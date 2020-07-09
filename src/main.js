import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCvkrNZ0COZD8RoYwOtgq3JKE1hNPVmn7I",
  authDomain: "vue-calendar-dae70.firebaseapp.com",
  databaseURL: "https://vue-calendar-dae70.firebaseio.com",
  projectId: "vue-calendar-dae70",
  storageBucket: "vue-calendar-dae70.appspot.com",
  messagingSenderId: "570000845833",
  appId: "1:570000845833:web:53a989d86d0a3801715cd8"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
