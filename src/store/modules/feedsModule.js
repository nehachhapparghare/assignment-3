import { serviceCall } from "../../service.js";

export const feedsModule = {
  state: {
    feeds: [],
    dropDownItem: []
  },
  getters: {
    getFeeds(state) {
      console.log(state.feeds, "feeds in getters");
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
      console.log(posts, "feeds in mutations");
      state.feeds = posts;
    }
  }
}






