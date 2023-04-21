export default {
	/**
	 * A method to update a state variable based on the param and key set
	 *
	 * @param {object} currentState Vuex store state
	 * @param {object} params       Any data passed to update
	 */
	updateState(currentState, params)
	{
		Object.keys(params)
			.map(key => currentState[key] = params[key]);
	},
	searchPostTypeCount(currentState, {postTypeCount})
	{
		const getCount = {};
		if (Object.keys(postTypeCount).length) {
			for (const [postType, array] of Object.entries(postTypeCount)) {
				getCount[postType] = array;
			}
		}
		currentState.searchPostTypeCount = getCount;
	},
	/**
	 * Sets up a query for the state and the URLSearchParams
	 *
	 * @param {object} currentState Vuex store state
	 * @param {object} params       Any data passed to update
	 */
	setQuery(currentState, params)
	{
		let searchParameters = new URLSearchParams();
		if (Object.keys(params).length === 0) currentState.queryParams = {};
		else {
			for (const [key, value] of Object.entries(params)) {
				if (value || value.length) {
					searchParameters.set(key, value.toString());
					currentState.queryParams[key] = value;
				}
			}
		}
		currentState.searchParams = searchParameters;
	},
	/**
	 * Removes an item from the queryParams state
	 *
	 * @param {object} currentState Vuex store state
	 * @param {object} params       Any data passed to update
	 */
	removeFromQuery(currentState, params)
	{
		if (Object.keys(params).length) {
			for (const [key, value] of Object.entries(params)) {
				delete currentState.queryParams[key];
			}
		}
	},
	/**
	 * Build the Vuex query based on the URL params
	 *
	 * @param {object} currentState Vuex store state
	 */
	buildQuery(currentState) {
		const stateQuery = {};
		const queryParams = new URL(window.location).searchParams;

		queryParams.forEach((value, key) => {
			if (key === 'categories') stateQuery[key] = value.split(',')
			else if (key === 'search' || key === 's') currentState.searchText = value;
			else if (key === 'page_num') currentState.page = Number(value);
			else stateQuery[key] = value
		})

		currentState.queryParams = stateQuery
	}
}
