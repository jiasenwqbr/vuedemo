<template>
  <div class="vote-footer">
    <el-button type="primary" @click="change({ type: 'sup', step: 10 })"
      >同步支持</el-button
    >
    <el-button type="danger" @click="changeAsync({ type: 'opp' })"
      >异步反对</el-button
    >
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex/dist/vuex.common.js";
export default {
  methods: {
    ...mapMutations(["change"]),
    ...mapActions(["changeAsync"]),
    handle(type) {
      if (type === "sup") {
        this.$store.commit("change", { type, step: 10 });
        return;
      }
      // 反对
      let res = this.$store.dispatch("changeAsync", { type });
      console.log(res);
    },
  },
};
</script>
<style scoped></style>
