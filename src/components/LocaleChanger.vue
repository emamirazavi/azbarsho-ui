<template>
  <div class="locale-changer" style="float:right">
 <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none" no-caret v-model="$i18n.locale" v-on:change="localeChanged()">
    <template #button-content>
      <font-awesome-icon icon="language" size="2x" viewBox="150 100 350 350" onclick="document.getElementById('shastepa').triggerEvent('click')"/>
    </template>
    <b-dropdown-item href="#" :key="`locale-${locale}`" v-for="locale in $i18n.availableLocales" v-on:click="localeChanged(locale)">{{ locale }}</b-dropdown-item>
  </b-dropdown>

  </div>
</template>

<style>
/* .dropdown-toggle { */
.locale-changer button{
  padding: 0 !important;
}
</style>

<script>
export default {
  name: 'locale-changer',
  // data () {
  //   return { langs: ['ja', 'en', 'fa'] }
  // },
  methods: {
    localeChanged(localeSTR){
    this.$cookies.set('locale',localeSTR);
      this.$root.$i18n.locale = localeSTR;

      let locale = this.$root.$i18n.locale;
      if (locale === 'Persian') {
        document.querySelector('html').setAttribute('dir','rtl');
      } else {
        document.querySelector('html').setAttribute('dir','ltr');
      }
    } 
  }
}
</script>