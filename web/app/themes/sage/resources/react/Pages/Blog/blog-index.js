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
    const frameworkBlogElm = document.getElementById('framework-blog');
    const frameworkPaginationElm = document.getElementById('framework-pagination');
    const frameworkFiltersElm = document.getElementById('framework-filters');

    if (frameworkBlogElm) {
        const blogRoot = createRoot(frameworkBlogElm);
        blogRoot
            .render(<BlogListing/>);
    }

    if (frameworkPaginationElm) {
        const blogPaginationRoot = createRoot(frameworkPaginationElm);
        blogPaginationRoot
            .render(
                <Pagination
                    itemsPerPage={3}
                    navClassNames="my-10 pt-10 pb-5 blog-listing__results-pagination"
                />
            );
    }

    if (frameworkFiltersElm) {
        const blogFiltersRoot = createRoot(frameworkFiltersElm);
        blogFiltersRoot
            .render(<BlogFilter/>);
    }
}
