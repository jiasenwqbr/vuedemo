<!-- ChildA.vue -->
<template>
  <button @click="sendData">Send Data</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["updateSharedData"]),
    sendData() {
      this.updateSharedData("some data from Child A");
    },
  },
};
</script>
