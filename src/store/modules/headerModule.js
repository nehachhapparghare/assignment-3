import { serviceCall } from "../../service.js";

export const headerModule = {
    state: {
        headers: [],
    },
    getters: {
        getHeaders(state) {
            return state.headers;
        }
    },
    actions: {
        loadHeaderData({ commit }, url) {
            serviceCall(url).then(data1 => {
                commit('getHeadersData', data1.headers)
            });
        }
    },
    mutations: {
        getHeadersData(state, headers) {
            state.headers = headers;
        }
    }
}






