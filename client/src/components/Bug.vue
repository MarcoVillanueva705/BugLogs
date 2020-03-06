<template>

      <div class="row">
        <div class="col-3">
        <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
        <p>{{ bugData.title }}</p>
        </router-link>
        </div>
          <div class="col-3">
          <p>{{ bugData.reportedBy }}</p>
          </div>
          <!-- <div class="col-2">
          <p>{{ bugData.comment }}</p>
          </div> -->
          <!-- <div class="col-2">
          <p>{{ bugData.status }}</p>
          </div> -->
          <div class="col-3">
            <p v-if="bugData.closed == false" class="text-success">Open</p>
            <p v-else>Closed</p>
          </div>

          <div class="col-3">
            <!-- FIXME instead of lastmodified use the updatedAt property FIXED-->
          <p>{{ bugData.updatedAt }}</p>
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
  
};
</script>

