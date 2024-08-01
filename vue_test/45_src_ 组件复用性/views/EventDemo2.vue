<template>
  <div class="event-box">
    <button @click="handle">
      我是子组件按钮
      <span>{{ value }}</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "EventDemo2",
  // 子组件可以注册接收value这个属性
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handle() {
      // 通知事件池中的input事件执行
      this.$emit("input", 100);
    },
  },
  created: {},
};
</script>
