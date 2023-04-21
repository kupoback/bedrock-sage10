/**
 * React Plugins
 */
import {create} from 'zustand'
import {devtools} from "zustand/middleware";

/**
 * Sage Constants
 */
import {apiGetRequest} from "@reactUtil/api"
import {addRemoveTerm} from "@reactUtil/mixins";
import {generateQueryParams} from "@reactUtil/browser-history";

const state = (set, get) => (
    {
        fetchErr: false,
        loading: false,
        maxPages: 0,
        page: 1,
        posts: [],
        query: {},
        searchText: '',
        taxonomies: [],
        total: 0,
        updateSearch: false,
        /**
         * Fetches posts from the API
         *
         * @param {Boolean} updateSearch Whether to fetch categories and the search text
         * @returns {Promise<void>}
         */
        fetch: async (updateSearch = false) => {
            const {api} = POSTS;
            const config = {params: {}}
            const {page, searchText} = get();

            config.params.s = searchText;
            config.params.page = page;

            if (updateSearch) {
                // Setup Query Params and push them to the state
                // const query = generateQueryParams(get().query)
                // set({query});

                const {taxonomies} = get();
                taxonomies.length && (config.params.categories = taxonomies)
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
         * Updates the taxonomy selected array with adding
         * or removing the term from the array
         *
         * @param {String} term The term slug
         */
        updateTaxonomySelected: (term) => set(() => ({taxonomies: addRemoveTerm(get().taxonomies, term)})),
        /**
         * Checks if the term is in the array or not
         *
         * @param {String} term The term slug
         * @returns {*}
         */
        taxInArray: term => get().taxonomies.includes(term),
        reset: () => set({
            fetchErr: false,
            loading: false,
            maxPages: 0,
            page: 1,
            posts: [],
            query: {},
            searchText: '',
            taxonomies: [],
            total: 0,
            updateSearch: false,
        })
    }
)

const postsStore = create(devtools(state, {trace: true}))

export default postsStore;
