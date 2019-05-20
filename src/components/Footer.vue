<template>
  <v-footer height="auto" color="teal lighten-3" class="elevation-12" fixed app>
    <v-layout justify-center row wrap>
      <v-flex color="cyan lighten-3" dark py-3 text-xs-center black--text xs12>
        &copy;2018 —
        <strong>{{ text }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      text: "For more details-contact us 0712-20145876"
    };
  }
};
</script>

<style>
</style>
