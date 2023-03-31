import {createStore} from "vuex";

// Store Values
import state from "./state.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";
import modules from "./modules.js";

export const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules,
});
