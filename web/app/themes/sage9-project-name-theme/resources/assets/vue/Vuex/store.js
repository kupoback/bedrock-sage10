import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        desktopNav: [],
        mobileNav: [],
    },
    mutations: {
        BUILD_NAVIGATION(currentState, {data, viewport}) {
            if (viewport === "desktop") {
                currentState.desktopNav = data;
            }
            if (viewport === "mobile") {
                currentState.mobileNav = data;
            }
        },
    },
    actions: {
        getNavigation(store, opts) {
            axios
                .get(
                    NAV.api,
                    {
                        params: {
                            viewport: opts.viewport,
                            navLocation: opts.navLocation,
                        }
                    }
                )
                .then(({data, status}) => {
                    if (status === 200 && data.status !== 404) {
                        store.commit("BUILD_NAVIGATION", {
                            viewport: opts.viewport,
                            data: data || null,
                        });
                    }
                })
                .catch(err => console.error(err));
            return true;
        },
    },
    getters: {},
});
