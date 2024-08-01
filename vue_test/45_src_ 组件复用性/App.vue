<template>
  <div>
    <div>父组件x:{{ x }} y:{{ y }}</div>
    <div>
      <!-- <event-demo2 :value="y" @input="y = $event"></event-demo2> -->
      <!-- v-modal 的原理  -->
      <event-demo2 v-model="y"></event-demo2>
    </div>
    <div>
      <input type="text" :value="y" @input="y = $event.target.value" />

      {{ y }}
    </div>
    <div><input type="radio" :value="30" v-model="y" /> haha</div>
  </div>
</template>

<script>
import EventDemo2 from "./views/EventDemo2.vue";
export default {
  name: "App",
  components: { EventDemo2 },
  data() {
    return {
      x: 33,
      y: 88,
    };
  },
  methods: {
    fn1(val1, val2) {
      this.x = val1;
      this.y = val2;
    },
    fn2() {
      console.log(222);
    },
  },
  created() {
    // console.log(this);
  },
};
</script>
