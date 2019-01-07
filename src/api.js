export default {
  // 1s delay to fake an API call
  get() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  },
};
