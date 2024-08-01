<template>
  <div>{{ data }}</div>
</template>
<script>
export default {
  props: {
    data: {
      type: String,
      default: "Child B",
      required: true,
    },
  },
};
</script>
