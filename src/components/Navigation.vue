<template>
  <v-navigation-drawer class="teal lighten-3" v-model="drawer" app :clipped="clip">
    <v-list>
      <v-list-tile class="cursorPoiner">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <p v-on:click="navigate('./home')">Home</p>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile class="cursorPoiner">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <p v-on:click="navigate('/somePage')">Some Page</p>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      drawer: {
        type: Boolean
      }
    },
    data() {
      return {
        clip: true
      };
    },

    methods: {
      navigate(name) {
        this.$router.push(name);
      }
    }
  };
</script>

<style scoped>
  .cursorPoiner {
    cursor: pointer !important;
  }
</style>


