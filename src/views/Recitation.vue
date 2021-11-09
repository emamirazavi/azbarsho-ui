<!-- https://bootstrap-vue.org/docs/components/form-select -->
<template>
  <div class="recitation">
    <!-- {{$root.$i18n.locale}} -->
    
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" :key="$root.$i18n.locale">
    
      <b-form-group
        id="input-group-1"
        label="Reciter:"
        label-for="input-1"
        description=""
      >
        <b-form-select v-model="selected" :options="[
          { value: '0', text: this.$t('message.RECITER_PARHIZGAR') },
          { value: '1', text: this.$t('message.RECITER_SHATRI') },
          { value: '2', text: this.$t('message.RECITER_AFASY') },
          { value: '3', text: this.$t('message.RECITER_GHAMDI') }
        ]">

        </b-form-select>
      </b-form-group>

    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// import Vue from "vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    // LocaleChanger,
  },
  setup() {
    // let locale = this.$cookies.get('locale') || 'fa';
// alert(locale);
// if (locale === 'ar' || locale === 'fa') {
//     document.querySelector('html').setAttribute('dir','rtl');
// }


    // alert('salam');
    // let locale = this.$cookies.get('locale') || 'fa';
    // if (locale === 'ar' || locale === 'fa') {
    //   document.querySelector('html').setAttribute('dir','rtl');
    // }
  },
  computed: {
    // salamBarEbrahim: function(){
    //   // return this.$t("message.RECITER_PARHIZGAR");
    //   return 'akbar';
    // }
  },
  data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        selected: 0
      }
    },
};
</script>
