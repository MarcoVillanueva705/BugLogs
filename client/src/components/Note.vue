<template>

      <div class="row">
          <div class="col-4">
          </div>
          <div class="col-4">
          <p>{{ notes.reportedBy }}</p>
          </div>
          <div class="col-4">
          <!-- <p>{{ noteData.flagged }}</p> -->
          <p>{{ notes.content}}</p>
          <!-- FIXME Add a delete button or icon tied to your delete method FIXED!-->
          <button type="button" class="btn btn-danger" @click="deleteNote">Delete</button>
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
    notes() {
      return this.$store.state.activeNote;
    }
  },
   methods: {
    deleteNote() {
      let noteRemove = confirm("Delete This Note?");
       if (noteRemove == true) {
      //noteData.id is an argument, over in state noteId is a parameter that will accept this argument,
      //regardless of syntax
      this.$store.dispatch("deleteNote", this.noteData.id);
      this.$store.dispatch("getNotesByBugId", this.$route.params.id);

      } else {
      this.$store.dispatch("getNotesByBugId", this.$route.params.id);
    }
    }
    // FIXME add a delete method to dispatch to the store with the note id FIXED!
    //FIXME add a prompt asking if the user really wants to delete(refer to taskmaster if true dispatch store) FIXED!
  //   sold() {
  //     this.$store.dispatch("sold", this.carData.id);
  //   }
   }
};
</script>