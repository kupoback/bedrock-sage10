/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import {createRoot} from "react-dom";

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
            .render(<PostsListing/>);
    }

    if (postsFiltersElm) {
        createRoot(postsFiltersElm)
            .render(<PostsFilter/>);
    }

    if (postsPaginationElm) {
        createRoot(postsPaginationElm)
            .render(<PaginationContainer />);
    }
}
