<template>
  <div class="vote-main">
    <p>支持人数：{{ supNum }}人</p>
    <p>发对人数：{{ oppNum }}人</p>
    <p>支持比率：{{ ratio }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["supNum", "oppNum"]),
    // ratio() {
    //   return this.$store.getters.ratio;
    // },
    ...mapGetters(["ratio"]),
  },
};
</script>
