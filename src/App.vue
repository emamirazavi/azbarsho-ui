<template>
  <div id="nav">
    <router-link to="/">{{ this.$t("message.menu.home") }}</router-link> |
    <router-link to="/about">{{ this.$t("message.menu.about") }}</router-link> |
    <router-link to="/recitation">{{
      this.$t("message.menu.recitation")
    }}</router-link>
    <LocaleChanger ref="localeChanger"/>
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
// import MenuIcon from 'vue-material-design-icons/Menu.vue';
// Vue.component('menu-icon', MenuIcon);
import LocaleChanger from "@/components/LocaleChanger.vue";
// import { defineComponent } from '@vue/composition-api'
// import VueCookie from 'vue-cookie';
export default {
  data() {},
  components: {
    LocaleChanger,
  },
  beforeMount() {
    this.$i18n.locale = this.$cookies.get("locale") || "Persian";
  },
  mounted() {
    this.$refs.localeChanger.localeChanged(this.$root.$i18n.locale);
  },
  setup() {
    
  },
};
</script>
