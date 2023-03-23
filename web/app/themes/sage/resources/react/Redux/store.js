import {configureStore} from "@reduxjs/toolkit";

import postsReducer from "./features/blog/postsSlice"

export const store = configureStore({
	reducer: {
		posts: postsReducer,
	}
})
