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
        <b-form-select v-model="selected" :options="[
          { value: '0', text: this.$t('message.RECITER_PARHIZGAR') },
          { value: '1', text: this.$t('message.RECITER_SHATRI') },
          { value: '2', text: this.$t('message.RECITER_AFASY') },
          { value: '3', text: this.$t('message.RECITER_GHAMDI') }
        ]">

        </b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        v-bind:label="this.$t('message.recitation.chapter')"
        label-for="input-2"
        description=""
      >
        <b-form-select :value="1">
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
        aya: 1,
        show: true,
      }
    },
  methods: {
    
  }
};
</script>
