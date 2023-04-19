/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import {createRoot} from "react-dom";

/**
 * React Components
 */
import Search from "./Search";
import PaginationContainer from "./PaginationContainer";
import SearchInput from "./SearchInput";


if (typeof SEARCH !== 'undefined') {
    const searchElm = document.getElementById('search');
    const searchInputElm = document.getElementById('search-input');
    const searchPaginationElm = document.getElementById('search-pagination');
    const searchFiltersElm = document.getElementById('search-filters');

    searchElm && createRoot(searchElm).render(<Search/>);

    searchPaginationElm && createRoot(searchPaginationElm).render(<PaginationContainer/>);

    searchInputElm && createRoot(searchInputElm).render(<SearchInput />)

    if (searchFiltersElm) {
        // createRoot(searchFiltersElm)
        //     .render(<BlogFilter/>);
    }
}
