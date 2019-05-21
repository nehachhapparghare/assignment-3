import Vue from 'vue'
import Vuex from "vuex"
import { userModule } from "./modules/userModule.js"
import { feedsModule } from "./modules/feedsModule.js"
import { headerModule } from "./modules/headerModule.js"
import { itemsModule } from "./modules/itemsModule.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userModule,
        feedsModule,
        headerModule,
        itemsModule
    },
});

export default store;
