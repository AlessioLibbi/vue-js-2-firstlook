
import mutation from "./mutation.js";
import action from './action.js'
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
    mutations:mutation,
    actions: action,
    getters: getters,
};
