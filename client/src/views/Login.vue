<template>

  <div class="login">

    <form v-if="loginForm" @submit.prevent="loginUser">
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-envelope prefix"></i>
      <input type="email" v-model="creds.email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Email" />
      <label for="defaultLoginFormEmail" data-error="wrong" data-success="right">Enter Email Address</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-lock prefix"></i>
      <input type="password" v-model="creds.password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />
      <label for="defaultLoginFormPassword" data-error="wrong" data-success="right">Enter Your Password</label>

      <button class="btn btn-success my-4 d-flex justify-content-center" type="submit">Login</button>
        </div>
      </div>
 </form>

    <form v-else @submit.prevent="register">

      <input type="text" v-model="newUser.name" placeholder="name" />

      <input type="email" v-model="newUser.email" placeholder="email" />

      <input type="password" v-model="newUser.password" placeholder="password" />

      <button class="btn btn-warning" type="submit">Create Account</button>

    </form>

    <div class="action" @click="loginForm = !loginForm">

      <p v-if="loginForm">No account? Click here to Register</p>

      <p v-else>Already have an account? Click here to Login</p>

    </div>

  </div>

</template>



<script>

import router from "@/router/index.js";

export default {

  name: "login",

  data() {

    return {

      loginForm: true,

      creds: {

        email: "",

        password: ""

      },

      newUser: {

        email: "",

        password: "",

        name: ""

      }

    };

  },

  beforeCreate() {

    if (this.$store.state.user._id) {

      this.$router.push({ name: "home" });

    }

  },

  methods: {

    register() {

      this.$store.dispatch("register", this.newUser);

    },

    loginUser() {

      this.$store.dispatch("login", this.creds);

    }

  }

};

</script>



<style>

.action {

  cursor: pointer;

}

* {
  box-sizing: border-box;
}
.md-form {
  min-width: 45%;
}

</style>