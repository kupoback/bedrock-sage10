<template>
  <div :class="containerClass">
    <div :class="paragraphClass"
         v-html="noResultsText" />
  </div>
</template>

<script type="application/javascript">
export default {
  props: {
    containerClass: String,
    noResultsText: String,
    paragraphClass: String,
  },
  name: "NoResults"
};
</script>

<style scoped>

</style>
