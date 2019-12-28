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
      
      <div class="row bug">
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
      </div>
      

    <main class="col-12">
      <div class="row bugs">
        <div class="col" v-for="bug in bugs" :key="bug.id">
          <!-- Props are data passed from parent to child with :propName="DATA" -->
          <bug-component :bugData="bug" />
        </div>
      </div>
    </main>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BugComponent from "@/components/Bug";
export default {
  name: "home",
  name: "bugs",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
        comment: "",
        status: "",
        lastModified: ""
      }
    };
  },
  methods: {
    addBug() {
      let bug = { ...this.newBug }; //NOTE makes a copy of the bug data object
      this.$store.dispatch("addBug", bug);
      this.newBug = {
        title: "",
        reportedBy: "",
        comment: "",
        status: "",
        lastModified: ""
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    BugComponent,
    HelloWorld
  }
};
</script>
