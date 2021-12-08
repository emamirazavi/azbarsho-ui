import { createApp } from "vue";
// import Vue from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import { createI18n } from "vue-i18n";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faLanguage)

import messages from './lang/messages.js'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// https://www.npmjs.com/package/vue3-cookies
import VueCookies from 'vue3-cookies'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

 
  // 2. Create i18n instance with options
  const i18n = createI18n({
    locale: 'English', // set locale
    fallbackLocale: 'English', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

let app = createApp(App);
app.use(store).use(router).use(BootstrapVue3).use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
// Or to set default config:
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});

app.mount("#app");

// $cookies.set('theme','default');