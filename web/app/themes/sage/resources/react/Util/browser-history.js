const windowUrl = new URL(window.location);

/**
 * Creates a
 * @param queryParams
 * @returns {module:url.URLSearchParams}
 */
export const generateQueryParams = (queryParams) => {
    let searchParameters = new URLSearchParams();
    for (const [key, value] of Object.entries(queryParams)) {
        searchParameters.set(key, value.toString());
    }
    return searchParameters;
}

/**
 * Gets all the query Params
 *
 * @returns {*} The query param we need to search for
 */
export const getQueryParams = () => {
    const query = windowUrl?.searchParams;
    let returnQuery = {};
    const queryParams = new URLSearchParams(query);
    queryParams.forEach((value, key) => returnQuery[key] = value);
    return returnQuery;
};

/**
 * Method to build and send to the browser's history any
 * query parameters built on the page when the user filters
 * any content
 *
 * @param {object}  query The Vuex store state
 * @param {boolean} updateHistory Whether to update the history or not
 */
export const updateBrowserHistory = (query, updateHistory = false) => {
    let queryToString = (query.toString() && updateHistory) ? `?${query.toString()}` : '';

    if (queryToString) {
        const urlPath = windowUrl.origin + windowUrl.pathname + queryToString;
        window
            .history
            .pushState(
                {path: urlPath},
                document.title,
                urlPath
            );
    }
}

/**
 * A function that sends the browser to a specific URL
 * @param {object} query The React store state
 * @param {string} url The URL to go to
 */
export const goToUrl = (query, {url = ''}) => {
    if (query.toString().length && url)
        window.location = `${url}?${query.toString()}`;
}

export default {
    generateQueryParams,
    getQueryParams,
    goToUrl,
    updateBrowserHistory,
}
