import Vue from "vue";
import VueRouter from "vue-router";
//@ts-ignore
import Home from "../views/Home";
//@ts-ignore
import Bugs from "../views/Bugs";

//@ts-ignore
import BugDetails from "../views/BugDetails";


Vue.use(VueRouter);

const routes = [
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
  // {

  //   path: "/bugs/:id/notes",
  //   name: "bugDetails",
  //   component: BugDetails

  // },
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
