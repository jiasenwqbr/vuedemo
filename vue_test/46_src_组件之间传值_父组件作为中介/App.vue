<template>
  <div>
    <child-a @send-data="handleData"></child-a>
    <child-b :data="dataFromChildA" />
  </div>
</template>

<script>
import ChildA from "./views/ChildA.vue";
import ChildB from "./views/ChildB.vue";
export default {
  name: "App",
  components: { ChildA, ChildB },
  data() {
    return {
      dataFromChildA: "",
    };
  },
  methods: {
    handleData(data) {
      this.dataFromChildA = data;
    },
  },
  created() {},
};
</script>
