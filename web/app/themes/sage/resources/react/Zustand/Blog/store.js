/**
 * React Plugins
 */
import {create} from 'zustand'
import {devtools} from "zustand/middleware";

/**
 * Sage Constants
 */
import {apiRequest} from "@reactUtil/api"
import {addRemoveTerm} from "@reactUtil/mixins";

const state = (set, get) => (
    {
        fetchErr: false,
        loading: false,
        maxPages: 0,
        page: 1,
        posts: [],
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
            set({fetchErr: false, loading: true})
            const {api} = BLOG;
            const config = {params: {}}
            const {page} = get();

            if (updateSearch) {
                const {searchText, taxonomies} = get();
                searchText && (config.params.s = searchText);
                taxonomies.length && (config.params.categories = taxonomies)
            }

            const {fetchErr, maxPages, posts, total} = await apiRequest(`${api}/${page}`, config)

            if (fetchErr) set({fetchErr: true})
            else set(() => ({maxPages, posts, total}))

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
            searchText: '',
            taxonomies: [],
            total: 0,
            updateSearch: false,
        })
    }
)

const blogStore = create(devtools(state, {trace: true}))

export default blogStore;
