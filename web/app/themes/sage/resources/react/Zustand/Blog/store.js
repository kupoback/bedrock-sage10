import {create} from 'zustand'
import axios from "axios";
import {devtools} from "zustand/middleware";
import {addRemoveTerm} from "../../Util/mixins";

const state = (set, get) => (
    {
        fetchErr: false,
        loading: false,
        maxPages: 0,
        page: 1,
        posts: [],
        searchText: '',
        taxonomySelected: [],
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
            const {page, searchText, taxonomySelected} = get();

            if (updateSearch) {
                const {searchText, taxonomySelected} = get();
                searchText && (config.params.s = searchText);
                taxonomySelected.length && (config.params.categories = taxonomySelected)
            }

            try {
                const response = await axios
                    .get(`${api}/${page}`, config);

                const {maxPages, posts, total} = await response.data;
                set(() => ({maxPages, posts, total}))
            } catch (err) {
                console.error(err);
                set({fetchErr: true})
            }
            set({loading: false})
        },
        /**
         * Updates the page selected from Pagination
         *
         * @param {Number} page The page selected
         */
        setPage: page => set(() => ({page})),
        /**
         * Sets the input field's search text
         *
         * @param {String} searchText Updates the search text
         */
        setSearchText: searchText => set(() => ({searchText})),
        /**
         * Updates the taxonomy selected array with adding
         * or removing the term from the array
         *
         * @param {String} term The term slug
         */
        updateTaxonomySelected: (term) => set(() => ({taxonomySelected: addRemoveTerm(get().taxonomySelected, term)})),
        /**
         * Checks if the term is in the array or not
         *
         * @param {String} term The term slug
         * @returns {*}
         */
        taxInArray: term => get().taxonomySelected.includes(term),
        /**
         * Resets the entire state back to the default
         */
        resetState: () => set({
            fetchErr: false,
            loading: false,
            maxPages: 0,
            page: 1,
            posts: [],
            searchText: '',
            taxonomySelected: [],
            total: 0,
            updateSearch: false,
        }),
    }
)

const blogStore = create(devtools(state))

export default blogStore;
