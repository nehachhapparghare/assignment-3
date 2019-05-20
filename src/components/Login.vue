<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center v-if="!flag">
        <v-flex xs12 sm6 md4>
          <v-card class="elevation-12">
            <v-toolbar class="teal lighten-3">
              <v-toolbar-title justify-center class="font-weight-medium">Login Form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    class="inputs"
                    v-model="userId"
                    :rules="emailRules()"
                    label="E-mail :"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    class="inputs"
                    type="password"
                    v-model="password"
                    :rules="passwordRules()"
                    label="Password :"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark class="teal darken-3 elevation-6" v-on:click="getCredentials">Login</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center v-if="flag">
        <v-flex xs12 sm4 md2>
          <v-card class="elevation-3">
            <v-toolbar class="teal lighten-3">
              <v-toolbar-title>
                <h3>Login Status</h3>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text align-center>
              <h2>Login Sucessfull !!</h2>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-3" flat="flat" v-on:click="loginSucess('./home')">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar" :top="y === 'top'">
        {{ text }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      errors: [],
      data: "",
      userId: "",
      password: "",
      flag: false,
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "Fill all the credentials",
      type: "",
      name: "",
      details: [],
      logged: ""
    }),

    methods: {
      emailRules() {
        return [
          v => !!v || "E-mail is required",
          v => /[a-zA-Z]+\.[a-zA-Z]+/.test(v) || "E-mail must be valid"
        ];
      },
      passwordRules() {
        return [v => !!v || "Password is required"];
      },
      getCredentials() {
        console.log(this.$store.getters.userLogin.users, "users in login");
        this.$store.getters.userLogin.users.filter(el => {
          if (el.userId == this.userId && el.password == this.password) {
            this.flag = true;
            localStorage.setItem("name", el.name);
          }
          if (this.userId.length == 0 && this.password.length == 0) {
            this.snackbar = true;
          }
        });
      },
      loginSucess(name) {
        this.logged = localStorage.getItem("name");
        this.$store.dispatch("specificUser", this.logged);
        this.$router.push(name);
      }
    }
  };
</script>


<style>
</style>
