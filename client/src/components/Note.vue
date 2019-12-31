<template>

      <div class="row">
          <div class="col-4">
          <p>{{ noteData.content}}</p>
          </div>
          <div class="col-4">
          <p>{{ noteData.reportedBy }}</p>
          </div>
          <div class="col-4">
          <p>{{ noteData.flagged }}</p>
          </div>
        </div>

  
</template>

<script>
export default {
  name: "Note",
  props: ["noteData"], //NOTE props come from parents
  computed: {
    // bugMakeUpperCase() {
    //   return this.noteData.status.toUpperCase();
    // } | 
  },
  // methods: {
  //   sold() {
  //     this.$store.dispatch("sold", this.carData.id);
  //   }
  // }
};
</script>