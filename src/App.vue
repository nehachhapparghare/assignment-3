<template>
  <v-app>
    <app-header v-if="showHeader"></app-header>

    <router-view></router-view>

    <app-footer v-if="showHeader"></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data: () => ({
    isAuthenticated: false,
    name: ""
  }),
  updated() {
    if (this.$route.name == "feeds") {
      this.isAuthenticated = true;
    }
  },
  computed: {
    showHeader() {
      return this.$route.name !== "login" ? true : false;
    }
  },
  created() {
    console.log(this.$route);
    this.$store.dispatch("checkData", "./static/user.json").then(() => {
      this.name = localStorage.getItem("name");
      console.log(this.name, "name of loggin user");
      if (this.name == undefined) {
        console.log("nothing in localStorage");
        this.$router.push("./");
      } else {
        console.log(" in localStorage");
        this.$store.dispatch("specificUser", this.name);
      }
    });
  }
};
</script>

<style>
</style>
