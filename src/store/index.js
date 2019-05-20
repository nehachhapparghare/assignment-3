import Vue from 'vue'
import Vuex from "vuex"
import { userModule } from "./modules/userModule.js"
import { feedsModule } from "./modules/feedsModule.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userModule,
        feedsModule
    },
  });

  export default store;
