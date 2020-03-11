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
         <form @submit.prevent="createNote">
          <input type="text" placeholder="message" v-model="newNote.content" required>
          <input type="text" placeholder="name" v-model="newNote.reportedBy" required>
          <button type="submit">Submit</button>
         </form>
      </div>
    </header>
    
    <main class="text-left">
    <h2>Title</h2>
    <!--<router-link :to="{ name: 'editBug', params: { id: bugData.id } }">-->
    <h1>{{ bug.title }}</h1>
    <!--</router-link>-->
    <h3>Reported By:{{ bug.reportedBy }}</h3>
    <h4>{{ bug.comment}} </h4>
    <button type ="button" @click="check">Close Comment</button>
    </main>
    
    <footer>
      <div class="row note-group">
        <div class="col-4">
        <h2 class="text-left">Notes</h2>
        </div>
        <div class="col-4">
        <h4 class="float-left">Name</h4>
        </div>
        <div class="col-4">
        <h4 class="text-center">Message</h4>
        </div>
        <!-- <div class="col-3">
        <h4 class="float-right">Delete</h4>
        </div> -->
      </div>
      
    <div class="row-notes">

        <note-component v-for="note in notes" :key="note.id" :noteData="note" /><!--this is from Note component props[noteData]-->
         <!-- <h3>{{notes.reportedBy}}</h3>  -->
          <!-- <h3>{{notes.content}}</h3> -->
          <!-- Props are data passed from parent to child with :propName="DATA" -->
          <!-- <note-component :noteData="notes" /> -->
        <!-- </div> -->
    </div>
    </footer>
  </div>
</template>

<script>
import NoteComponent from "@/components/Note.vue";

export default {
  name: "bugDetails",
  name: "notes",
  //props: ["bugData"],

  data() {
    return {
      newNote:{
        content: "",
        bug: this.$route.params.id,
        reportedBy:"",
        flagged: ["pending", "completed", "rejected"].toString
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
    //used to be notes
    // activeNote() {
    //   return this.$store.state.activeNote;
    // },

    notes() {
      return this.$store.state.activeNote;
    }

    
  },

  components: {
    NoteComponent
  },

  methods: {
    //FIXME add close method to dispatch to store FIXED!
    //FIXME add prompt to user for closing bug(refer to taskmaster) FIXED!
    createNote() {
      let note =  {...this.newNote};
      this.$store.dispatch("createNote", note);
      // this.$store.state.dispatch("getNotesByBugId");
      this.newNote = {
        content: "",
        bug: this.$route.params.id,
        reportedBy:"",
        flagged: ["pending", "completed", "rejected"].toString
      };

    },

    check() {
      let bugRemove = confirm("Close This Bug?");
       if (bugRemove == true) {
      //bugData.id is an argument, over in state bugId is a parameter that will accept this argument,
      //regardless of syntax
      this.$store.dispatch("check", this.bug.id);
      } else {
      this.$store.dispatch("getBugById", this.$route.params.id);
    }
  }
  }
  
};
</script>



<style></style>