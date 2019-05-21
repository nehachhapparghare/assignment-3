import { serviceCall } from "../../service.js";

export const headerModule = {
    state: {
        headers: [],
    },
    getters: {
        getHeaders(state) {
            console.log(state.headers);
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
            console.log(headers, "headers in mutations");
            state.headers = headers;
        }
    }
}






