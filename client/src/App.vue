<template>
  <div id="app">
    <div id="nav"></div>
    <div class="row logout">

      <div class="col-6">

        <i class="fas fa-bug float-left"><b>Bug Logger</b></i>

      </div>

      <div class="col-6"><button @click="logOff()" class="float-right btn btn-warning btn-sm">Logout</button>

      </div>

    </div>
    <router-view />
  </div>
</template>

<script>

export default {

  name: "App",



  methods: {

    logOff() {

      this.$store.dispatch("logout");

    }

  }

};

</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
