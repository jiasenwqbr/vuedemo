<!-- ChildA.vue -->
<template>
  <button @click="sendData">Send Data</button>
</template>

<script>
import { EventBus } from "../eventBus";

export default {
  methods: {
    sendData() {
      EventBus.$emit("data-sent", "some data from Child A");
    },
  },
};
</script>
