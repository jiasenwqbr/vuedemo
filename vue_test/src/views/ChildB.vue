<!-- ChildB.vue -->
<template>
  <div>{{ data }}</div>
</template>

<script>
import { EventBus } from "../eventBus";

export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    EventBus.$on("data-sent", (data) => {
      this.data = data;
    });
  },
  beforeDestroy() {
    EventBus.$off("data-sent"); // 清除监听器
  },
};
</script>
