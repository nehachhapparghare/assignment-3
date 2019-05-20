import { serviceCall } from "../../service.js";

export const userModule = {
  state: {
    userDetails: {},
    userLogged: '',
    practice:[]
  },
  getters: {
    userLogin(state) {
      console.log(state.userDetails, "users in getters");
      return state.userDetails;
    },
    getspecificUserID(state) {
      console.log(state.userLogged)
      return state.userLogged;
    },
   
  },
  actions: {
    checkData({ commit }, url) {
      return new Promise((resolve) => {
        serviceCall(url).then(credentials => {
          resolve(credentials);
          commit('getUserData', credentials)
        });
      })
    },
    specificUser({ commit }, loggInUser) {
      commit('getspecificUser', loggInUser)
    },
   
  },
  mutations: {
    getUserData(state, credentials) {
      state.userDetails = credentials;
      console.log(state.userDetails, 'user in mutations');
    },
    getspecificUser(state, loggInUser) {
      console.log(state.userDetails);
      state.userDetails.users.filter(el => {
        if (el.name == loggInUser) {
          state.userLogged = el;
        }
      });
    },
    
  },

}
