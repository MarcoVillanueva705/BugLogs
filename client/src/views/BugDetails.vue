<template>

  <div class="bug-details container-fluid">
    <div class="row">
      <div class="col-6">
        <h1>Bug Tracker</h1>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@Report">
        Report
      </button>
      </div>
    </div>
    
    <header class="row">
      <div class="col">
        <router-link :to="{ name: 'home' }">
          <h1>All B<img alt="Vue logo" src="../assets/logo.png" />gs</h1>
        </router-link>
         <form @submit.prevent="addNote">
          <input type="text" placeholder="message" v-model="newNote.content" required>
          <input type="text" placeholder="name" v-model="newNote.reportedBy" required>
          <button type="submit">Submit</button>
         </form>
      </div>
    </header>
    
    <main class="text-left">
    <h2>Title</h2>
    <h1>{{ bug.title }}</h1>
    <h3>Reported By:{{ bug.reportedBy }}</h3>
    <h4>{{ bug.comment}} </h4>
    </main>
    
    <footer>
      <div class="row note-group">
        <div class="col-3">
        <h2 class="text-left">Notes</h2>
        </div>
        <div class="col-3">
        <h4 class="float-left">Name</h4>
        </div>
        <div class="col-3">
        <h4 class="text-center">Message</h4>
        </div>
        <div class="col-3">
        <h4 class="float-right">Delete</h4>
        </div>
      </div>
    <main class="row-notes">
        <div class="col-12" v-for="note in notes" :key="note.id">
          <!-- Props are data passed from parent to child with :propName="DATA" -->
          <note-component :noteData="note" />
        </div>
    </main>
    </footer>
  </div>
</template>

<script>
//import NoteComponent from "@components/Note";
export default {
  name: "bugDetails",

  data() {
    return {
      newNote:{
        content: "",
        reportedBy:"",
        flagged: ""
      },
       
    }
  },
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },

  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.activeNote;
    }
  },
  // components: {
  //   NoteComponent
  // },
  methods: {
    addNote() {
      let note =  {...this.newNote};
      this.$store.dispatch("addNote", note);
      this.newNote = {
        content: "",
        reportedBy:"",
        flagged: ""
      };
    }
  }
};
</script>



<style></style>