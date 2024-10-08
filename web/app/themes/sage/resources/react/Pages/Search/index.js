/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";

/**
 * React Components
 */
import Search from "./Search";
import PaginationContainer from "./PaginationContainer";
import SearchInput from "./SearchInput";


if (typeof SEARCH !== 'undefined') {
    const searchElm = document.getElementById('search-container');
    const searchInputElm = document.getElementById('search-input');
    const searchPaginationElm = document.getElementById('search-pagination');
    const searchFiltersElm = document.getElementById('search-filters');

    searchElm && createRoot(searchElm)
        .render(<StrictMode><Search/></StrictMode>);

    searchPaginationElm && createRoot(searchPaginationElm)
        .render(<StrictMode><PaginationContainer/></StrictMode>);

    searchInputElm && createRoot(searchInputElm)
        .render(<StrictMode><SearchInput /></StrictMode>)

    if (searchFiltersElm) {
        // createRoot(searchFiltersElm)
        //     .render(<StrictMode><BlogFilter/></StrictMode>);
    }
}
