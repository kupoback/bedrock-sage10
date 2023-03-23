/**
 * React Scripts
 */
import React, {StrictMode} from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

/**
 * React Store
 */
import {store} from "../Redux/store"

/**
 * React Components
 */
import BlogListing from "./Blog/BlogListing";
import BlogFilter from "./Blog/BlogFilter";
import Pagination from "../Components/Pagination";

// Temporary API return
import {maxPages} from "../Util/posts.json"

ReactDom.render(
	<StrictMode>
		<Provider store={store}>
			<BlogListing/>
		</Provider>
	</StrictMode>,
	document.getElementById('framework-blog')
)

ReactDom.render(
	<StrictMode>
		<Provider store={store}>
			<Pagination itemsPerPage={3} maxNumOfPages={maxPages}/>
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
