<template>
  <div>
    <simple />
    <vuex1 />
    <vuex2 />
    <vuex3 />
    <vuex4 />
  </div>
</template>

<script>
import Simple from '@/components/Simple.vue';
import Vuex1 from '@/components/Vuex1.vue';
import Vuex2 from '@/components/Vuex2.vue';
import Vuex3 from '@/components/Vuex3.vue';
import Vuex4 from '@/components/Vuex4.vue';

export default {
  name: 'app',
  components: {
    Simple,
    Vuex1,
    Vuex2,
    Vuex3,
    Vuex4,
  },
  created() {
    this.$store.dispatch('fetchApi');
  },
};
</script>
