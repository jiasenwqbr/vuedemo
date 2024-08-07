<template>
  <div class="vote-box">
    <div class="header">
      <h2 class="title">Vue真好学</h2>
      <span class="num">{{ x + y }}人</span>
    </div>
    <vote-main></vote-main>
    <vote-footer></vote-footer>
  </div>
</template>
<script>
import VoteMain from "./VoteMain.vue";
import VoteFooter from "./VoteFooter.vue";
import { mapState } from "vuex/dist/vuex.common.js";

export default {
  components: {
    VoteFooter,
    VoteMain,
  },
  computed: {
    /*  第一种写法
    supNum() {
      return this.$store.state.supNum;
    },
    oppNum() {
      return this.$store.state.oppNum;
    },
    */
    // 第二种写法
    // ...mapState(["supNum", "oppNum"]),

    // 第三种写法
    ...mapState({
      x: "supNum",
      y(state) {
        return state.oppNum;
      },
    }),
  },
};
</script>
<style scoped></style>
