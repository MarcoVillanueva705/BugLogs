import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import AuthService from '../AuthService'

let _api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 8000
});


Vue.use(Vuex)

//Allows axios to work locally or live

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/login'

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: {},
    activeNote: {},
    user: {},
  },
  mutations: {

    setUser(state, user) {
      state.user = user
      console.log(user)
    },
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    createNote(state, note) {
      // debugger
      state.activeNote.push(note);//was previously pushing to notes as an []
      // Vue.set(state.notes, note.bug, note)
    },    
    setActiveNote(state, note) {
      state.activeNote = note;
    },
    deleteActiveNote(state, note) {
      state.activeNote.shift(note);
    },
    resetState(state, data) {
      state.user = {};
    }
  },
  actions: {
    //#region -- AUTH STUFF --

    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },

    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },

    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async addBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug );
      router.push({ path: `/bugs/${res.data.id}` });
      //FIXME use the router.push method to move to the desired route IE: push takes in a route option object { name: "routename('cars'), params: { id: car.id}"} res.data is your bug from the API FIXED!
      // dispatch("getAllBugs"); //works but is a second call to the server
      commit("addBug", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("createNote", res.data)
      // dispatch("getNotesByBugId"); //works but is a second call to the server
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/"+ id + "/notes");
      commit("setActiveNote", res.data);
    },

    //read method over in Note.vue
    async deleteNote({ commit, dispatch }, noteId) {
      let res = await _api.delete("notes/"+ noteId);
      // commit("deleteActiveNote", res.data);
      dispatch("getBugById")
    },
//close action for bug
    async check({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");

    }
  
    // FIXME add delete note action to call the API and delete note FIXED!
    //FIXME add close action for bug FIXED!
    // async editBug({commit, dispatch}, update) {
    //   let bug =  ""
    //   let res =  await _api.put("bugs", update);
    //   commit("addBug", res.data);
    // }
  },
  modules: {
  }
})
