import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {addRemoveTerm} from "../../../Util/mixins";

const initialState = {
    fetchErr: false,
    loading: false,
    maxPages: 0,
    page: 1,
    posts: [],
    searchText: '',
    taxonomySelected: [],
    total: 0,
}

/**
 * Fetches the posts based on the page, and whether the action came from a button or onload
 */
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (
        {
           page = 1,
           updateSearch = false,
       },
        {getState}
    ) => {
    const {api} = BLOG;
    const config = {params: {}}

    if (updateSearch) {
        const {searchText, taxonomySelected} = getState();
        searchText && (config.params.s = searchText);
        taxonomySelected.length && (config.params.categories = taxonomySelected)
    }

    const response = await axios
        .get(`${api}/${page}`, config);
    return response.data
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // Actions
    reducers: {
        /**
         * Updates the current page selected
         * @param {object} state    The state object
         * @param {Number} payload  The page number
         */
        setCurrentPage: (state, {payload}) => {
            state.page = payload;
            // state.maxPages = Math.floor((Math.random() * 15)) + 1;
        },
        /**
         * Updates the searched for text
         * @param {object} state    The state object
         * @param {String} payload  The search text
         */
        updateSearchText(state, {payload}) {
            state.searchText = payload;
        },
        /**
         * Updates the taxonomies selected
         * @param {object} state    The state object
         * @param {String} payload  The taxonomy slug
         */
        updateTaxonomySelected(state, {payload}) {
            state.taxonomySelected = addRemoveTerm(state.taxonomySelected, payload);
        },
        /**
         * Resets the state to default
         */
        resetPosts(state) {
            state = initialState;
        }
    },
    /**
     * Our API Promise to fetch posts
     * @param builder
     */
    extraReducers: builder => {
            builder
                // Fetching
                .addCase(fetchPosts.pending, (state, action) => {
                    state.loading = true;
                    state.fetchErr = false;
                })
                // Response Received
                .addCase(fetchPosts.fulfilled, (state, {payload}) => {
                    const {maxPages, posts, total} = payload;
                    state.fetchErr = false;
                    state.loading = false;
                    state.maxPages = maxPages;
                    state.posts = posts;
                    state.total = total;
                })
                // Response Failed
                .addCase(fetchPosts.rejected, (state, action) => {
                    state.fetchErr = true;
                    state.loading = false;
                    state.maxPages = 0;
                    state.posts = [];
                    state.total = 0;
                })
        }
})

export const {setCurrentPage, resetPosts, updateSearchText, updateTaxonomySelected} = postsSlice.actions;

export default postsSlice.reducer;
