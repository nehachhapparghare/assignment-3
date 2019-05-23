import { serviceCall } from "../../service.js";

export const feedsModule = {
  state: {
    feeds: [],
    dropDownItem: []
  },
  getters: {
    getFeeds(state) {
      return state.feeds;
    }
  },
  actions: {
    loadData({ commit }, url) {
      serviceCall(url).then(data1 => {
        commit('getFeedsData', data1.feeds)
      });
    }
  },
  mutations: {
    getFeedsData(state, posts) {
      state.feeds = posts;
    }
  }
}






