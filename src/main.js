import { createApp } from "vue";
// import Vue from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import { createI18n } from "vue-i18n";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faLanguage)




import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// https://www.npmjs.com/package/vue3-cookies
import VueCookies from 'vue3-cookies'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const messages = {
    'English': {
      message: {
        hello: 'hello world',
        RECITER_PARHIZGAR: 'Shahriar Parhizgar',
        RECITER_SHATRI: 'Abu Bakr Al Shatri',
        RECITER_AFASY: 'Mishary Rashid Alafasy',
        RECITER_GHAMDI: 'Saad El Ghamidi',
        menu: {
          home: 'Home',
          about: 'About',
          recitation: 'Recitation',
        },
        recitation: {
          reciter : 'Reciter',
          chapter: 'Chapter',
          aya: "Aya #"
        },
        chapters: {
          c1:"1: Al-Faatiha",
          c2:"2: Al-Baqara",
          c3:"3: Aal-i-Imraan",
          c4:"4: An-Nisaa",
          c5:"5: Al-Maaida",
          c6:"6: Al-An'aam",
          c7:"7: Al-A'raaf",
          c8:"8: Al-Anfaal",
          c9:"9: At-Tawba",
          c10:"10: Yunus",
          c11:"11: Hud",
          c12:"12: Yusuf",
          c13:"13: Ar-Ra'd",
          c14:"14: Ibrahim",
          c15:"15: Al-Hijr",
          c16:"16: An-Nahl",
          c17:"17: Al-Israa",
          c18:"18: Al-Kahf",
          c19:"19: Maryam",
          c20:"20: Taa-Haa",
          c21:"21: Al-Anbiyaa",
          c22:"22: Al-Hajj",
          c23:"23: Al-Muminoon",
          c24:"24: An-Noor",
          c25:"25: Al-Furqaan",
          c26:"26: Ash-Shu'araa",
          c27:"27: An-Naml",
          c28:"28: Al-Qasas",
          c29:"29: Al-Ankaboot",
          c30:"30: Ar-Room",
          c31:"31: Luqman",
          c32:"32: As-Sajda",
          c33:"33: Al-Ahzaab",
          c34:"34: Saba",
          c35:"35: Faatir",
          c36:"36: Yaseen",
          c37:"37: As-Saaffaat",
          c38:"38: Saad",
          c39:"39: Az-Zumar",
          c40:"40: Al-Ghaafir",
          c41:"41: Fussilat",
          c42:"42: Ash-Shura",
          c43:"43: Az-Zukhruf",
          c44:"44: Ad-Dukhaan",
          c45:"45: Al-Jaathiya",
          c46:"46: Al-Ahqaf",
          c47:"47: Muhammad",
          c48:"48: Al-Fath",
          c49:"49: Al-Hujuraat",
          c50:"50: Qaaf",
          c51:"51: Adh-Dhaariyat",
          c52:"52: At-Tur",
          c53:"53: An-Najm",
          c54:"54: Al-Qamar",
          c55:"55: Ar-Rahmaan",
          c56:"56: Al-Waaqia",
          c57:"57: Al-Hadid",
          c58:"58: Al-Mujaadila",
          c59:"59: Al-Hashr",
          c60:"60: Al-Mumtahana",
          c61:"61: As-Saff",
          c62:"62: Al-Jumu'a",
          c63:"63: Al-Munaafiqoon",
          c64:"64: At-Taghaabun",
          c65:"65: At-Talaaq",
          c66:"66: At-Tahrim",
          c67:"67: Al-Mulk",
          c68:"68: Al-Qalam",
          c69:"69: Al-Haaqqa",
          c70:"70: Al-Ma'aarij",
          c71:"71: Nooh",
          c72:"72: Al-Jinn",
          c73:"73: Al-Muzzammil",
          c74:"74: Al-Muddaththir",
          c75:"75: Al-Qiyaama",
          c76:"76: Al-Insaan",
          c77:"77: Al-Mursalaat",
          c78:"78: An-Naba",
          c79:"79: An-Naazi'aat",
          c80:"80: Abasa",
          c81:"81: At-Takwir",
          c82:"82: Al-Infitaar",
          c83:"83: Al-Mutaffifin",
          c84:"84: Al-Inshiqaaq",
          c85:"85: Al-Burooj",
          c86:"86: At-Taariq",
          c87:"87: Al-A'laa",
          c88:"88: Al-Ghaashiya",
          c89:"89: Al-Fajr",
          c90:"90: Al-Balad",
          c91:"91: Ash-Shams",
          c92:"92: Al-Lail",
          c93:"93: Ad-Dhuhaa",
          c94:"94: Ash-Sharh",
          c95:"95: At-Tin",
          c96:"96: Al-Alaq",
          c97:"97: Al-Qadr",
          c98:"98: Al-Bayyina",
          c99:"99: Az-Zalzala",
          c100:"100: Al-Aadiyaat",
          c101:"101: Al-Qaari'a",
          c102:"102: At-Takaathur",
          c103:"103: Al-Asr",
          c104:"104: Al-Humaza",
          c105:"105: Al-Fil",
          c106:"106: Quraish",
          c107:"107: Al-Maa'un",
          c108:"108: Al-Kawthar",
          c109:"109: Al-Kaafiroon",
          c110:"110: An-Nasr",
          c111:"111: Al-Masad",
          c112:"112: Al-Ikhlaas",
          c113:"113: Al-Falaq",
          c114:"114: An-Naas",
        }
      }
    },
    'Japanise': {
      
    },
    'Persian': {
        message: {
          hello: 'سلام',
          RECITER_PARHIZGAR: 'شهریار پرهیزگار',
          RECITER_SHATRI: 'ابوبکر الشاطری',
          RECITER_AFASY: 'میشاری رشید العفاسی',
          RECITER_GHAMDI: 'سعد الغامدی',
          menu: {
            home: 'خانه',
            about: 'درباره',
            recitation: 'حفظ',
          },
          recitation: {
            reciter : 'قاری',
            chapter: 'سوره',
          },
          chapters: {
            c1:"۱: فاتحه",
            c2:"2: Al-Baqara",
            c3:"3: Aal-i-Imraan",
            c4:"4: An-Nisaa",
            c5:"5: Al-Maaida",
            c6:"6: Al-An'aam",
            c7:"7: Al-A'raaf",
            c8:"8: Al-Anfaal",
            c9:"9: At-Tawba",
            c10:"10: Yunus",
            c11:"11: Hud",
            c12:"12: Yusuf",
            c13:"13: Ar-Ra'd",
            c14:"14: Ibrahim",
            c15:"15: Al-Hijr",
            c16:"16: An-Nahl",
            c17:"17: Al-Israa",
            c18:"18: Al-Kahf",
            c19:"19: Maryam",
            c20:"20: Taa-Haa",
            c21:"21: Al-Anbiyaa",
            c22:"22: Al-Hajj",
            c23:"23: Al-Muminoon",
            c24:"24: An-Noor",
            c25:"25: Al-Furqaan",
            c26:"26: Ash-Shu'araa",
            c27:"27: An-Naml",
            c28:"28: Al-Qasas",
            c29:"29: Al-Ankaboot",
            c30:"30: Ar-Room",
            c31:"31: Luqman",
            c32:"32: As-Sajda",
            c33:"33: Al-Ahzaab",
            c34:"34: Saba",
            c35:"35: Faatir",
            c36:"36: Yaseen",
            c37:"37: As-Saaffaat",
            c38:"38: Saad",
            c39:"39: Az-Zumar",
            c40:"40: Al-Ghaafir",
            c41:"41: Fussilat",
            c42:"42: Ash-Shura",
            c43:"43: Az-Zukhruf",
            c44:"44: Ad-Dukhaan",
            c45:"45: Al-Jaathiya",
            c46:"46: Al-Ahqaf",
            c47:"47: Muhammad",
            c48:"48: Al-Fath",
            c49:"49: Al-Hujuraat",
            c50:"50: Qaaf",
            c51:"51: Adh-Dhaariyat",
            c52:"52: At-Tur",
            c53:"53: An-Najm",
            c54:"54: Al-Qamar",
            c55:"55: Ar-Rahmaan",
            c56:"56: Al-Waaqia",
            c57:"57: Al-Hadid",
            c58:"58: Al-Mujaadila",
            c59:"59: Al-Hashr",
            c60:"60: Al-Mumtahana",
            c61:"61: As-Saff",
            c62:"62: Al-Jumu'a",
            c63:"63: Al-Munaafiqoon",
            c64:"64: At-Taghaabun",
            c65:"65: At-Talaaq",
            c66:"66: At-Tahrim",
            c67:"67: Al-Mulk",
            c68:"68: Al-Qalam",
            c69:"69: Al-Haaqqa",
            c70:"70: Al-Ma'aarij",
            c71:"71: Nooh",
            c72:"72: Al-Jinn",
            c73:"73: Al-Muzzammil",
            c74:"74: Al-Muddaththir",
            c75:"75: Al-Qiyaama",
            c76:"76: Al-Insaan",
            c77:"77: Al-Mursalaat",
            c78:"78: An-Naba",
            c79:"79: An-Naazi'aat",
            c80:"80: Abasa",
            c81:"81: At-Takwir",
            c82:"82: Al-Infitaar",
            c83:"83: Al-Mutaffifin",
            c84:"84: Al-Inshiqaaq",
            c85:"85: Al-Burooj",
            c86:"86: At-Taariq",
            c87:"87: Al-A'laa",
            c88:"88: Al-Ghaashiya",
            c89:"89: Al-Fajr",
            c90:"90: Al-Balad",
            c91:"91: Ash-Shams",
            c92:"92: Al-Lail",
            c93:"93: Ad-Dhuhaa",
            c94:"94: Ash-Sharh",
            c95:"95: At-Tin",
            c96:"96: Al-Alaq",
            c97:"97: Al-Qadr",
            c98:"98: Al-Bayyina",
            c99:"99: Az-Zalzala",
            c100:"100: Al-Aadiyaat",
            c101:"101: Al-Qaari'a",
            c102:"102: At-Takaathur",
            c103:"103: Al-Asr",
            c104:"104: Al-Humaza",
            c105:"105: Al-Fil",
            c106:"106: Quraish",
            c107:"107: Al-Maa'un",
            c108:"108: Al-Kawthar",
            c109:"109: Al-Kaafiroon",
            c110:"110: An-Nasr",
            c111:"111: Al-Masad",
            c112:"112: Al-Ikhlaas",
            c113:"113: Al-Falaq",
            c114:"114: An-Naas",
          }
        }
      }
  }
  
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