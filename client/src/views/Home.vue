<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <h1>Bug Tracker</h1>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@Report">
        Report
      </button>
      </div>
      <div class="col-4">
        <h2>Current Bugs</h2>
      </div>
      <div class="col-8">
      </div>
    </div>
   
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addBug">
          <input required type="text" v-model="newBug.title" placeholder="title" />
          <input required type="text" v-model="newBug.reportedBy" placeholder="reported by" />
          <input required type="text" v-model="newBug.comment" placeholder="comment" />
          <input required type="text" v-model="newBug.status" placeholder="status" />
          <input required type="text" v-model="newBug.lastModified" placeholder="last modified" />
          <button class="btn btn-success" type="submit">Add Bug</button>
        </form>
      </div>   
    </div>
      
     <div class="row">
          <div class="col-2">
          <h4>Title</h4>
          </div>
          <div class="col-2">
          <h4>Reported By</h4>
          </div>
          <div class="col-2">
          <h4>Comment</h4>
          </div>
          <div class="col-2">
          <h4>Status</h4>
          </div>
          <div class="col-2">
          <h4>Last Modified</h4>
          </div>
          <div class="col-2">
          </div>
      </div>
      

    <main class="row-bugs">
        <div class="col-12" :class="{ switch: bug.closed == true}" v-for="bug in bugs" :key="bug.id"> <!--should this be for bug in newBug?-->
          <!-- Props are data passed from parent to child with :propName="DATA" -->
          <!-- FIXME add :class binding to add a class based on the bug status FIXED!-->
          <!-- IE :class="{ classname: something.property == true}" -->
          <bug-component :bugData="bug" />
        </div>
    </main>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BugComponent from "@/components/Bug.vue";

export default {
  name: "home",
  name: "bugs",
  
    data() {
      return {
        newBug: {
          title: "",
          closed: true,
          reportedBy: "",
          comment: "",
          status: "",
          lastModified: ""
        }
      };
    },
  
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getBugs");
  },

    computed: {
      bugs() {
        return this.$store.state.bugs;
      }
    },

    components: {
      BugComponent,
      HelloWorld
    },

  methods: {
    addBug() {
      let bug = { ...this.newBug }; //NOTE makes a copy of the bug data object
      this.$store.dispatch("addBug", bug);
      this.newBug = {
        title: "",
        closed: true,
        reportedBy: "",
        comment: "",
        status: "",
        lastModified: ""
      };
    }
  }
};
</script>

<style scoped>

.switch {
color: red;
}

</style>
