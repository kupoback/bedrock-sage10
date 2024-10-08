/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";

/**
 * React Components
 */
import PostsListing from "./PostsListing";
import PostsFilter from "./PostsFilter";
import PaginationContainer from "./PaginationContainer";

if (typeof POSTS !== 'undefined') {
    const postsListingElm = document.getElementById('posts-listing');
    const postsPaginationElm = document.getElementById('posts-pagination');
    const postsFiltersElm = document.getElementById('posts-filters');

    if (postsListingElm) {
        createRoot(postsListingElm)
            .render(<StrictMode><PostsListing/></StrictMode>);
    }

    if (postsFiltersElm) {
        createRoot(postsFiltersElm)
            .render(<StrictMode><PostsFilter/></StrictMode>);
    }

    if (postsPaginationElm) {
        createRoot(postsPaginationElm)
            .render(<StrictMode><PaginationContainer /></StrictMode>);
    }
}
