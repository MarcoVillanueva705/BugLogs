<template>

<div class="content">
  <div class="login">

    <form v-if="loginForm" @submit.prevent="loginUser">
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-envelope prefix float-left"></i>
      <input type="email" v-model="creds.email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Email" />
      <label for="defaultLoginFormEmail" data-error="wrong" data-success="right">Enter Email Address</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-lock prefix float-left"></i>
      <input type="password" v-model="creds.password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />
      <label for="defaultLoginFormPassword" data-error="wrong" data-success="right">Enter Your Password</label>

      <button class="btn btn-success my-4 d-flex justify-content-center" type="submit">Login</button>
        </div>
      </div>
 </form>

    <form v-else @submit.prevent="register">
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-user prefix float-left"></i>
      <input type="text" v-model="newUser.name" placeholder="name" />
      <label>Enter Your Name</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-envelope prefix float-left"></i>
            <input type="email" v-model="newUser.email" placeholder="email" />
            <label>Enter Email Address</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="md-form">
          <i class="fas fa-lock prefix float-left"></i>
            <input type="password" v-model="newUser.password" placeholder="password" />
            <label>Enter Your Password</label>

      <button class="btn btn-success my-4 d-flex justify-content-center" type="submit">Create Account</button>
        </div>
      </div>
    </form>
   

    <div class="action" @click="loginForm = !loginForm">

      <p v-if="loginForm">No account? Click here to Register</p>

      <p v-else>Already have an account? Click here to Login</p>

    </div>

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

.content {
  position: fixed;
  top: 250px;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  min-width: 100%;
  padding: 20px;
}

</style>