/**
 * React Plugins
 */
import {create} from 'zustand'
import {devtools} from "zustand/middleware";

/**
 * Sage Constants
 */
import {apiGetRequest} from "@reactUtil/api"
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
            const {page, searchText} = get();

            config.params.s = searchText;
            config.params.page = page;

            if (updateSearch) {
                // Setup Query Params and push them to the state
                const query = generateQueryParams(get().query)
                set({query});

                // Update the browsers history to include the new search term
                updateBrowserHistory(query, true)
            }

            set({fetchErr: false, loading: true})

            try {
                const response = await apiGetRequest(`${api}/${page}`, config)
                set({...response})
            } catch (err) {
                console.error(err);
                set({fetchErr: true})
            }

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
