<template>
  <v-card>
    <v-toolbar color="teal lighten-3" fixed app>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <h1 class="ml-4">Welcome</h1>

      <v-spacer></v-spacer>
      <v-avatar size="50" color="grey lighten-4" class="mousePointer">
        <v-img :src="showLoggedInUser.dp"></v-img>
      </v-avatar>
      <h2 class="mousePointer">{{showLoggedInUser.name}} {{showLoggedInUser.lastName}}</h2>
      <v-btn color="teal darken-1" round:true dark @click="showLoggOut">Logout</v-btn>
    </v-toolbar>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Do You Want To Loggout ?</v-card-title>
        <v-card-actions>
          <v-btn color="red darken-1" flat="flat" @click="loggOut">Yes</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <app-navigation :drawer="drawer"></app-navigation>
  </v-card>
</template>

<script>
  import Navigation from "./Navigation.vue";

  export default {
    components: {
      "app-navigation": Navigation
    },
    data: () => ({
      name: "",
      dialog: false,
      drawer: false
    }),
    computed: {
      showLoggedInUser() {
        return this.$store.getters.getspecificUserID;
      }
    },
    methods: {
      showLoggOut() {
        this.dialog = true;
        console.log("called logout");
      },
      loggOut() {
        localStorage.removeItem("name");
        this.$router.push("./");
      }
    }
  };
</script>

<style scoped>
  h2 {
    padding: 20px;
  }
  .mousePointer {
    cursor: pointer;
  }
</style>
