import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {apiRequest} from "@reactUtil/api"
import {initialState} from "./state";

const state = (set, get) => (
    {
        ...initialState,
        /**
         * Fetches posts from the API
         *
         * @param {Boolean} updateSearch Whether to fetch categories and the search text
         * @returns {Promise<void>}
         */
        fetch: async (updateSearch = false) => {
            set({fetchErr: false, loading: true})
            const {api} = SEARCH;
            const config = {params: {}}
            const {page} = get();

            if (updateSearch) {
                const {searchText} = get();
                searchText && (config.params.s = searchText);
            }

            const {fetchErr, maxPages, posts, total} = await apiRequest(`${api}/${page}`, config)

            if (fetchErr) set({fetchErr: true})
            else set(() => ({maxPages, posts, total}))

            set({loading: false})
        },
        /**
         * Resets the entire state back to the default
         */
        reset: () => set(initialState),
    }
)

const searchStore = create(devtools(state))

export default searchStore;
