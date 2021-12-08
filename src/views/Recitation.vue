<!-- https://bootstrap-vue.org/docs/components/form-select -->
<template>
  <div class="recitation">
    <!-- {{$root.$i18n.locale}} -->
    
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" :key="$root.$i18n.locale">
    
      <b-form-group
        id="input-group-1"
        v-bind:label="this.$t('message.recitation.reciter')"
        label-for="input-1"
        description=""
      >
        <!-- <b-form-select v-model="selected" :options="[ -->
        <b-form-select v-model="reciter" :options="[
          { value: 'PARHIZGAR', text: this.$t('message.RECITER_PARHIZGAR') },
          { value: 'SHATRI', text: this.$t('message.RECITER_SHATRI') },
          { value: 'AFASY', text: this.$t('message.RECITER_AFASY') },
          { value: 'GHAMDI', text: this.$t('message.RECITER_GHAMDI') }
        ]">

        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        v-bind:label="this.$t('message.recitation.chapter')"
        label-for="input-2"
        description=""
      >
        <b-form-select v-model="chapter">
            <option v-bind:value="i" v-for="i of [...Array(115).keys()].slice(1)" :key="i">{{this.$t('message.chapters.c'+i)}}</option>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        v-bind:label="this.$t('message.recitation.aya')"
        label-for="input-3"
        description=""
      >
      <b-form-input v-model="aya" min=1 type="number"></b-form-input>
      </b-form-group>

    </b-form>
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
    
  },
  computed: {
    
  },
  data() {
      return {
        reciter: 'PARHIZGAR',
        chapter: 1,
        aya: 1,
        show: true,
      }
    },
  methods: {
    
  }
};
</script>
