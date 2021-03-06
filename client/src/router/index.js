import Vue from "vue";
import Router from "vue-router";
//@ts-ignore
import Home from "../views/Home";
//@ts-ignore
import BugDetails from "../views/BugDetails";
import Login from '../views/Login.vue';


Vue.use(Router)

export default new Router({

 routes : [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about"
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  // {
  //   path: "/bugs",
  //   name: "bugs",
  //   component: Bugs
  // },
   {

    path: "/bugs/:id",
    name: "bugDetails",
    component: BugDetails

  },

  {

    path: "/notes",
    name: "bugDetails",
    component: BugDetails

  },

  {

    path: '/login',
    name: 'login',
    component: Login

  },

  // {

  //   path: "/bugs/:id/notes",
  //   name: "bugDetails",
  //   component: BugDetails

  // },
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
]
})


