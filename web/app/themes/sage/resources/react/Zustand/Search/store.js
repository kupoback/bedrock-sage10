import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {apiRequest} from "@reactUtil/api"
import {generateQueryParams, updateBrowserHistory} from "@reactUtil/browser-history";

const state = (set, get) => (
    {
        fetchErr: false,
        loading: false,
        maxPages: 0,
        page: 1,
        posts: [],
        query: {},
        searchText: '',
        total: 0,
        updateSearch: false,
        /**
         * Fetches posts from the API
         *
         * @param {Boolean} updateSearch Whether to fetch categories and the search text
         * @returns {Promise<void>}
         */
        fetch: async (updateSearch = false) => {
            const {api} = SEARCH;
            const config = {params: {}}
            const {page} = get();

            const {searchText} = get();
            searchText && (config.params.s = searchText);

            if (updateSearch) {
                // Setup Query Params and push them to the state
                set({query: {...config.params, page}});
                const query = generateQueryParams(get().query)
                // Update the browsers history to include the new search term
                updateBrowserHistory(query)
            }

            set({fetchErr: false, loading: true})

            const response = await apiRequest(`${api}/${page}`, config)
            set({...response})

            set({loading: false})
        },
        /**
         * Resets the entire state back to the default
         */
        reset: () => set({
            fetchErr: false,
            loading: false,
            maxPages: 0,
            page: 1,
            posts: [],
            query: {},
            searchText: '',
            total: 0,
            updateSearch: false,
        }),
    }
)

const searchStore = create(devtools(state, {trace: true}))

export default searchStore;
