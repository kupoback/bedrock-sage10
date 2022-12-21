import axios from "axios";

//region Action Functions
const windowUrl = new URL(window.location);

/**
 * Makes an API call and setups data to store state,
 * as well as whether to update the browser history
 *
 * @param {string} api The API Url to make a call to
 * @param {object} config Any config content to send to
 * @param {int} page The page number
 *
 * @returns {Promise<unknown>}
 */
const makeApiCall = (api, config = {params: {}}, page = 1) => {
	// updateLoading(store, true);
	// let commitType = "updateState";
	// if (pushData) commitType = "mergeData";

	return axios
		.get(api, config)
		.then(({data, status}) => {
			const {maxPages, posts, postTypeCount, total} = data;
			console.log(posts)
		})
		.catch(err => console.error(err))
		.finally(() => {
		});
};

/**
 * Makes an update to the store state on the `loading` condition
 *
 * @param {object} store    The Vuex store state
 * @param {boolean} loading Whether the loading animation should appear or not
 * @returns {*}
 */
const updateLoading = (store, loading = false) => {
	// store.commit("updateState", {loading})
}

export async function getBlogPosts(uri, params = {update: false}) {
	const {update} = params;
	const config = {params: {}};

	return await makeApiCall(
		uri,
		config,
		1,
	)
}
