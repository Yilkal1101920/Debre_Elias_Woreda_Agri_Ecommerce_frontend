import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import firebase from "firebase/compat/app"
import './assets/main.css'

import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'

const pinia = createPinia()
// const config = {
//   apiKey: "AIzaSyD1SwNEPuWJRym2gnGbh0bjK0CAjzb-DIU",
//   authDomain: "yilkal-vue-auth.firebaseapp.com",
//   projectId: "yilkal-vue-auth",
//   storageBucket: "yilkal-vue-auth.appspot.com",
//   messagingSenderId: "5638434984",
//   appId: "1:5638434984:web:109fa51a0a245d5554929d"
// }
// firebase.initializeApp(config)
const app = createApp(App)
app.use(dialogPlugin)
app.component('GDialog', GDialog)
app.use(router)
app.use(pinia)

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
     console.log("SW Registered!");
     console.log(registration);
    }).catch(error => {
     console.log("SW Registration Failed!");
     console.log(error);
    })
 }

app.mount('#app')
