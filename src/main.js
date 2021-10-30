import { createApp } from "vue";
import BootstrapVue3 from 'bootstrap-vue-3';
import { createI18n } from "vue-i18n";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// https://www.npmjs.com/package/vue3-cookies
import VueCookies from 'vue3-cookies'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const messages = {
    en: {
      message: {
        hello: 'hello world',
        RECITER_PARHIZGAR: 'Parhizgar',
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界', 
        RECITER_PARHIZGAR: 'پرهیزگار',
      }
    },
    fa: {
        message: {
          hello: 'سلام', 
          RECITER_PARHIZGAR: 'پرهیزگار',
        }
      }
  }
  
  // 2. Create i18n instance with options
  const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

let app = createApp(App);
app.use(store).use(router).use(BootstrapVue3).use(i18n);

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