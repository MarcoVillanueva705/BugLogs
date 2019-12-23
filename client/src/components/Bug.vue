<template>
  <div class="row bug">
      <p>{{ bugMakeUpperCase }} | {{ bugData.title }}</p>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"], //NOTE props come from parents
  computed: {
    bugMakeUpperCase() {
      return this.bugData.status.toUpperCase();
    }
  },
  // methods: {
  //   sold() {
  //     this.$store.dispatch("sold", this.carData.id);
  //   }
  // }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>