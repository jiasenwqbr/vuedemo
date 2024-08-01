<template>
  <div class="event-box">
    <button @click="handle">我是子组件按钮1</button>
  </div>
</template>
<script>
export default {
  name: "child component",
  methods: {
    handle() {
      // 通知自定义事件池中，名字是AAA的自定义事件执行
      // this.$emit("AAA", 100, 200);
      let { AAA } = this.$listeners;
      console.log(this.$listeners);
      AAA(100, 200);
    },
  },
  created() {
    //console.log(this);
  },
};
</script>
