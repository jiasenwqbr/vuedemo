<template>
  <div>
    <child-a></child-a>
    <child-b />
  </div>
</template>

<script>
import ChildA from "./views/ChildA.vue";
import ChildB from "./views/ChildB.vue";
export default {
  name: "App",
  components: { ChildA, ChildB },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
