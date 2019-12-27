<template>
  <div class="row">
      <div class="col-4">
        <h2>Current Bugs</h2>
      </div>
      <div class="col-8">
      </div>
      <div class="row bug">
        <div class="col-3">
        <h4>Title</h4>
        <p>{{ bugData.title }}</p>
        </div>
      </div>
        <div class="row bug">
          <div class="col-3">
          <h4>Reported By</h4>
          <p>{{ bugData.reportedBy }}</p>
          </div>
        </div>
        <div class="row bug">
          <div class="col-3">
          <h4>Status</h4>
          <p>{{ bugData.status }}</p>
          </div>
        </div>
        <div class="row bug">
          <div class="col-3">
          <h4>Last Modified</h4>
          <p>{{ bugData.lastModified }}</p>
          </div>
        </div>
  </div>
  
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"], //NOTE props come from parents
  computed: {
    // bugMakeUpperCase() {
    //   return this.bugData.status.toUpperCase();
    // } | 
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