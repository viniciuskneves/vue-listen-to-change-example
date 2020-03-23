<template>
  <h1 v-if="status === 'success'">Success {{ complex.deep }}</h1>
  <h1 v-else-if="status === 'error'">Error</h1>
  <h1 v-else>Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex4',
  data() {
    return {
      complex: null,
    };
  },
  computed: mapState(['status']),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'updateStatus') {
        console.log(`Updating to ${state.status}`);

        // Do whatever makes sense now
        if (state.status === 'success') {
          this.complex = {
            deep: 'some deep object',
          };
        }
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>
