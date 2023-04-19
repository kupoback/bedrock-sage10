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
import Pagination from "./Pagination";

if (typeof BLOG !== 'undefined') {
    const blogElm = document.getElementById('blog');
    const blogPaginationElm = document.getElementById('blog-pagination');
    const blogFiltersElm = document.getElementById('blog-filters');

    if (blogElm) {
        const blogRoot = createRoot(blogElm);
        blogRoot
            .render(<BlogListing/>);
    }

    if (blogPaginationElm) {
        const blogPaginationRoot = createRoot(blogPaginationElm);
        blogPaginationRoot
            .render(
                <Pagination
                    itemsPerPage={3}
                    navClassNames="my-10 pt-10 pb-5 blog-listing__results-pagination"
                />
            );
    }

    if (blogFiltersElm) {
        const blogFiltersRoot = createRoot(blogFiltersElm);
        blogFiltersRoot
            .render(<BlogFilter/>);
    }
}
