<template>
  <div class="bugs container-fluid">
    <header class="row"></header>
    <main class="row">
      <div class="col-12">
        <form @submit.prevent="addBug">
          <input required type="text" v-model="newBug.title" placeholder="title" />
          <input required type="text" v-model="newBug.reportedBy" placeholder="reported by" />
          <input required type="text" v-model="newBug.status" placeholder="status" />
          <input required type="text" v-model="newBug.lastModified" placeholder="last modified" />
          <button class="btn btn-success" type="submit">Add Bug</button>
        </form>
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

  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
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
        status: "",
        lastModified: 0
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
    // unsoldCars() {
    //   this.cars.filter(c => !car.sold);
    // }
  },
  components: {
    BugComponent,
    HelloWorld
  }
};
</script>
