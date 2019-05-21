import { serviceCall } from "../../service.js";

export const feedsModule = {
  state: {
    feeds: [],
    selectedFeed: null,
    activeFeeds: [],
    headers: [],
    dropDownItem: []
  },
  getters: {
    getFeeds(state) {
      console.log(state.feeds, "feeds in getters");
      return state.feeds;
    },
    getHeaders(state) {
      console.log(state.headers);
      return state.headers;
    },
    getItems(state) {
      console.log(state.dropDownItem, "items in getters");
      return state.dropDownItem;
    }
  },
  actions: {
    loadData({ commit }, url) {
      serviceCall(url).then(data1 => {
        commit('getFeedsData', data1.feeds)
      });
    },
    loadHeaderData({ commit }, url) {
      serviceCall(url).then(data1 => {
        commit('getHeadersData', data1.headers)
      });
    },
    loadDropDown({ commit }, url) {
      serviceCall(url).then(data1 => {
        commit('getDropDown', data1.items)
      });
    },

  },
  mutations: {
    getFeedsData(state, posts) {
      console.log(posts, "feeds in mutations");
      state.feeds = posts;
    },
    getHeadersData(state, headers) {
      console.log(headers, "headers in mutations");
      state.headers = headers;
    },
    getDropDown(state, items) {
      state.dropDownItem = items.filter(a => a.item).map(q => q.item);
      console.log(state.dropDownItem, "items in mutations");
    }
  }
}






