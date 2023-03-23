import {createSlice} from "@reduxjs/toolkit"

import {posts, maxPages} from "../../../Util/posts.json"

const initialState = {
	posts,
	maxPages: 0,
	currentPage: 1,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	// Actions
	reducers: {
		getPosts: (state) => {
			// Set the state here
			state.posts = posts;
		}
	}
})

export const {getPosts} = postsSlice.actions;

export default postsSlice.reducer;
