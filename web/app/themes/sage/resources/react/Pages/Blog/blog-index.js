/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

/**
 * React Store
 */
import {store} from "@sageRedux/features/blog/store"

/**
 * React Components
 */
import BlogListing from "./BlogListing";
import BlogFilter from "./BlogFilter";
import Pagination from "./Pagination";

if (typeof BLOG !== 'undefined') {
    ReactDom.render(
        <StrictMode>
            <Provider store={store}>
                <BlogListing />
            </Provider>
        </StrictMode>,
        document.getElementById('framework-blog')
    )

    ReactDom.render(
        <StrictMode>
            <Provider store={store}>
                <Pagination itemsPerPage={3} navClassNames="my-10 pt-10 pb-5 blog-listing__results-pagination"/>
            </Provider>
        </StrictMode>,
        document.getElementById('framework-pagination')
    )

    ReactDom.render(
        <StrictMode>
            <Provider store={store}>
                <BlogFilter />
            </Provider>
        </StrictMode>,
        document.getElementById('framework-filters')
    )
}
