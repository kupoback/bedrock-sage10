import React, {StrictMode} from "react";
import ReactDom from "react-dom";

import store from "../Redux/Blog/store"
import { Provider } from "react-redux";

import BlogListing from "./Blog/BlogListing";
import BlogFilter from "./Blog/BlogFilter";
import Pagination from "../Components/Pagination";

ReactDom.render(
	<StrictMode>

			<BlogListing/>
	</StrictMode>,
	document.getElementById('framework-blog')
)

ReactDom.render(
	<StrictMode>
			<Pagination />
	</StrictMode>,
	document.getElementById('framework-pagination')
)

ReactDom.render(
	<StrictMode>
			<BlogFilter />
	</StrictMode>,
	document.getElementById('framework-filters')
)
