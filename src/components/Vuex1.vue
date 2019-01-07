<template>
  <h1 v-if="status === 'success'">Success</h1>
  <h1 v-else-if="status === 'error'">Error</h1>
  <h1 v-else>Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex1',
  computed: mapState(['status']),
};
</script>
