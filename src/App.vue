<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/recitation">Recitation</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// import { defineComponent } from '@vue/composition-api'
// import VueCookie from 'vue-cookie';
export default ({
  data(){
    
  },
  beforeMount() {
    // this.$root.$i18n.locale
    // this.$root.$i18n.global.locale = this.$cookies.get('locale') || 'fa';
    this.$i18n.locale = this.$cookies.get('locale') || 'fa';
    let locale = this.$root.$i18n.locale;
    if (locale === 'ar' || locale === 'fa') {
      document.querySelector('html').setAttribute('dir','rtl');
    }
  },
  setup() {
    
    // alert('salam');
    // let locale = this.$cookies.get('locale') || 'fa';
    // if (locale === 'ar' || locale === 'fa') {
    //   document.querySelector('html').setAttribute('dir','rtl');
    // }
  },
})
</script>
