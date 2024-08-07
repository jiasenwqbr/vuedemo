<template>
  <div>
    <div class="example">
      <p>this is a scoped style example.</p>
    </div>
    <scoped-example />
  </div>
</template>

<script>
import ScopedExample from "./views/ScopedExample.vue";
export default {
  name: "App",
  components: { ScopedExample },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
