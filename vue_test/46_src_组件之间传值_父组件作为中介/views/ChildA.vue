<template>
  <div>
    <button @click="sendData">Send Data</button>
  </div>
</template>
<script>
export default {
  methods: {
    sendData() {
      this.$emit("send-data", "Some data from ChildA");
    },
  },
};
</script>
