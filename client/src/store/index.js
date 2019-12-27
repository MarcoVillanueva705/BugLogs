import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000
});


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {}
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    }    

  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async addBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      // dispatch("getAllBugs"); //works but is a second call to the server
      commit("addBug", res.data);

    },

    // async editBug({commit, dispatch}, update) {
    //   let bug = 
    //   let res =  await _api.put("bugs", update);
    //   commit("addBug", res.data);
    // }
  },
  modules: {
  }
})
