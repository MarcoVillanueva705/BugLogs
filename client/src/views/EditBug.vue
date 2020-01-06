<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-3">
        <h1>Edit This Bug</h1>
      </div>
      <div class="col-9">
        <form @submit.prevent="editBug">
          <input required type="text" v-model="newBug.title" placeholder="title" />
          <input required type="text" v-model="newBug.reportedBy" placeholder="reported by" />
          <input required type="text" v-model="newBug.comment" placeholder="comment" />
          <input required type="text" v-model="newBug.status" placeholder="status" />
          <input required type="text" v-model="newBug.lastModified" placeholder="last modified" />
          <button class="btn btn-success" type="submit">Add Bug</button>
        </form>
      </div>   
    </div>
  </div>
</template>

<script>
import BugComponent from "@/components/Bug.vue";

export default {
  name: "editBug",

  data(){
    return{
      
    }
  }
}
</script>