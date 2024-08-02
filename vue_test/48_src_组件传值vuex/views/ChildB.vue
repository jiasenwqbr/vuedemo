<!-- ChildB.vue -->
<template>
  <div>{{ sharedData }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sharedData"]),
  },
};
</script>
