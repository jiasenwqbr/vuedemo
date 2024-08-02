<template>
  <div class="example">
    <p>This is a scoped style example.</p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.example {
  color: red;
}
p {
  font-size: 20px;
}
</style>
