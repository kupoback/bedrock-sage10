/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import {createRoot} from "react-dom";

/**
 * React Components
 */
import BlogListing from "./BlogListing";
import BlogFilter from "./BlogFilter";
import PaginationContainer from "./PaginationContainer";

if (typeof BLOG !== 'undefined') {
    const blogElm = document.getElementById('blog');
    const blogPaginationElm = document.getElementById('blog-pagination');
    const blogFiltersElm = document.getElementById('blog-filters');

    if (blogElm) {
        createRoot(blogElm)
            .render(<BlogListing/>);
    }

    if (blogPaginationElm) {
        createRoot(blogPaginationElm)
            .render(<PaginationContainer />);
    }

    if (blogFiltersElm) {
        createRoot(blogFiltersElm)
            .render(<BlogFilter/>);
    }
}
