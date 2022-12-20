import axios from "axios";

//region Action Functions
const windowUrl = new URL(window.location);

/**
 * Makes an API call and setups data to store state,
 * as well as whether to update the browser history
 *
 * @param {string} api The API Url to make a call to
 * @param {object} store The vuex store state
 * @param {object} config Any config content to send to
 * @param {int} page The page number
 * @param {boolean} updateHistory Whether or not to update the browser history
 * @param {boolean} pushData Whether to add data to the var or replace it
 *
 * @returns {Promise<unknown>}
 */
const makeApiCall = (api, store, config = {params: {}}, page = 1, updateHistory = false, pushData = false) => {
	updateLoading(store, true);
	let commitType = "updateState";
	if (pushData) commitType = "mergeData";

	return axios
		.get(api, config)
		.then(({data, status}) => {
			const {maxPages, posts, postTypeCount, total} = data;
			(status === 200 && data.status !== 404) && store.commit(commitType, {maxPages: Number(maxPages), page, posts, total});
			postTypeCount !== undefined && store.commit('searchPostTypeCount', {postTypeCount});
		})
		.catch(err => console.error(err))
		.finally(() => {
			// Remove the Page Number from the query params if on the first page
			if (page > 1) config.params.page_num = page;
			else delete config.params.page_num;

			// Remove the updateCount from the query params
			delete config.params.updateCount;

			store.commit("setQuery", config.params);
			if (updateHistory) store.dispatch("updateBrowserHistory", {updateHistory});
			updateLoading(store);
		});
};


/**
 * Makes an update to the store state on the `loading` condition
 *
 * @param {object} store    The Vuex store state
 * @param {boolean} loading Whether the loading animation should appear or not
 * @returns {*}
 */
const updateLoading = (store, loading = false) => store.commit("updateState", {loading})
//endregion

export default {
	/**
	 * Method to make an API call to get the content for the Blogs Page
	 *
	 * @param {object} store
	 * @param {object} params Any parameters for the API call
	 * @returns {Promise<AxiosResponse<any> | void>}
	 */
	getBlogPosts(store, params = {update: false})
	{
		const {update} = params;
		const {api, page, selectedCategories, search} = store.state;
		const config = {params: {}};

		// Setup Config
		if (search) config.params.s = search;
		if (selectedCategories.length) config.params.categories = selectedCategories;

		return makeApiCall(
			api + (page || 1),
			store,
			config,
			(page || 1),
			update,
		);
	},
	/**
	 * Method to build and send to the browser's history any
	 * query parameters built on the page when the user filters
	 * any content
	 *
	 * @param {object} store The Vuex store state
	 * @param {boolean} updateHistory Whether to update the history or not
	 */
	updateBrowserHistory(store, updateHistory = false)
	{
		const {searchParams} = store.state;
		let newUrl = "";
		if (searchParams.toString() && updateHistory) newUrl = `?${searchParams.toString()}`;

		const urlLocation = windowUrl.origin + windowUrl.pathname + newUrl;
		window.history.pushState({path: urlLocation}, document.title, urlLocation);
	}
}
