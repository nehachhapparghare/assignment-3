import { serviceCall } from "../../service.js";

export const loginModule = {
    state: {
        userDetails: {},
        userLogged: '',

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
        loginData({ commit }, url) {
            return new Promise((resolve) => {
                serviceCall(url).then(credentials => {
                    resolve(credentials);
                    commit('getUserData', credentials)
                });
            })
        },
        specificUser({ commit }, loggInUserId) {
            commit('getspecificUser', loggInUserId)
          },

    },
    mutations: {
        getUserData(state, credentials) {
            state.userDetails = credentials;
            console.log(state.userDetails, 'user in mutations');
        },
        getspecificUser(state, loggInUserId) {
            console.log(state.userDetails);
            state.userDetails.users.filter(el => {
              if (el.id == loggInUserId) {
                state.userLogged = el;
              }
            });
          },
    },

}
