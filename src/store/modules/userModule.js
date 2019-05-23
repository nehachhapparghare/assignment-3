import { serviceCall } from "../../service.js";

export const userModule = {
  state: {
    userDetails: [],
    userLogged: ''
  },
  getters: {
    userLogin(state) {
      return state.userDetails;
    },
    getspecificUserID(state) {
      return state.userLogged;
    },

  },
  actions: {
    checkData({ commit }, url) {
      return new Promise((resolve) => {
        serviceCall(url).then(credentials => {
          resolve(credentials);
          commit('getUserData', credentials.users)
        });
      })
    },
    specificUser({ commit }, loggInUser) {
      commit('getspecificUser', loggInUser)
    },

  },
  mutations: {
    getUserData(state, credential) {
      state.userDetails = credential;
    },
    getspecificUser(state, loggInUser) {
      state.userDetails.find(el => {
        if (el.id == loggInUser) {
          state.userLogged = el;
        }
      });
    },

  },

}
