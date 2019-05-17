<template>
 <v-app>
       <app-header v-if="showHeader"></app-header>

   <router-view></router-view>
 </v-app>
</template>

<script>

import Header from "./components/Header.vue";

export default {

  components: {
      "app-header": Header,

  },
  data: () => ({

  }),
  created() {
    console.log(this.$route);
    this.$store.dispatch("loginData", "./static/user.json").then(() => {
      let id = localStorage.getItem("id");
      console.log(id , "logged in user");
      if(id == undefined) {
        console.log("nothing in localstorage");
        this.$route.push("./");
      }
      else{
        console.log("in localstorage");
        this.$store.dispatch("specificUser", id);
      }
    });
  }
};
</script>

<style>

</style>
