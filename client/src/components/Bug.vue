<template>

      <div class="row">
        <div class="col-2">
        <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
        <p>{{ bugData.title }}</p>
        </router-link>
        </div>
          <div class="col-2">
          <p>{{ bugData.reportedBy }}</p>
          </div>
          <div class="col-2">
          <p>{{ bugData.comment }}</p>
          </div>
          <div class="col-2">
          <p>{{ bugData.status }}</p>
          </div>
          <div class="col-2">
          <p>{{ bugData.lastModified }}</p>
          </div>
          <div class="col-2">
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
