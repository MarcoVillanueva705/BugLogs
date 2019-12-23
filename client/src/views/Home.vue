<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <h1>Bug Tracker</h1>
      </div>
      <div class="col-6">
        <button class="btn btn-success" type="submit">Report</button>
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
  // data() {
  //   return {
  //     newBug: {
  //       title: "",
  //       reportedBy: "",
  //       status: "",
  //       lastModified: ""
  //     }
  //   };
  // },
  // methods: {
  //   addBug() {
  //     let bug = { ...this.newBug }; //NOTE makes a copy of the car data object
  //     this.$store.dispatch("addBug", bug);
  //     this.newBug = {
  //       title: "",
  //       reportedBy: "",
  //       status: "",
  //       lastModified: 0
  //     };
  //   }
  // },
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
