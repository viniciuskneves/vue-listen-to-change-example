<template>
  <h1 v-if="status === 'success'">Success</h1>
  <h1 v-else-if="status === 'error'">Error</h1>
  <h1 v-else>Loading</h1>
</template>

<script>
import api from '@/api';

export default {
  name: 'simple',
  data() {
    return {
      status: 'pending',
    };
  },
  created() {
    console.log(`CREATED called, status: ${this.status}`);

    this.handleCreated();
  },
  methods: {
    async handleCreated() {
      try {
        await api.get();

        this.status = 'success';
      } catch (e) {
        console.error(e);

        this.status = 'error';
      }
    },
  },
};
</script>
