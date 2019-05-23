import { serviceCall } from "../../service.js";

export const itemsModule = {
    state: {
        dropDownItem: [],

    },
    getters: {
        getItems(state) {
            return state.dropDownItem;
        },

    },
    actions: {
        loadDropDown({ commit }, url) {
            serviceCall(url).then(data1 => {
                commit('getDropDown', data1.items)
            });
        },

    },
    mutations: {
        getDropDown(state, items) {
            state.dropDownItem = items.filter(a => a.item).map(q => q.item);
        },
    }
}






