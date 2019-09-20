<template>
  <h1 v-if="status === 'success'">Success {{ complex && complex.deep }}</h1>
  <h1 v-else-if="status === 'error'">Error</h1>
  <h1 v-else>Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex3',
  data() {
    return {
      complex: null,
    };
  },
  computed: mapState(['status']),
  created() {
    this.$store.watch(
      (state, getters) => getters.status,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);

        // Do whatever makes sense now
        if (newValue === 'success') {
          this.complex = {
            deep: 'some deep object',
          };
        }
      },
    );
  },
};
</script>
