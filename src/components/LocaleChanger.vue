<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" v-on:change="localeChanged()">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['ja', 'en', 'fa'] }
  },
  methods: {
    localeChanged(){
      this.$cookies.set('locale',this.$root.$i18n.locale);
      let locale = this.$root.$i18n.locale;
      if (locale === 'ar' || locale === 'fa') {
        document.querySelector('html').setAttribute('dir','rtl');
      } else {
        document.querySelector('html').setAttribute('dir','ltr');
      }
    } 
  }
}
</script>