import {createStore} from "vuex";

// Store Values
import state from "./default/state.js";
import mutations from "./default/mutations.js";
import getters from "./default/getters.js";
import actions from "./default/actions.js";
import modules from "./default/modules.js";

export const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules,
});
