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
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'updateStatus':
          const status = state.status;

          console.log(`Updating to ${status}`);

          // Do whatever makes sense now
          if (status === 'success') {
            this.complex = {
              deep: 'some deep object',
            };
          }
          break;
      }
    });
  },
};
</script>
