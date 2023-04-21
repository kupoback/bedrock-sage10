const windowUrl = new URL(window.location);

/**
 * Creates a
 * @param queryParams
 * @returns {module:url.URLSearchParams}
 */
const generateQueryParams = (queryParams) => {
    return Object.entries(queryParams)
        .reduce((searchParams, [key, value]) => {
            searchParams.set(key, value.toString());
            return searchParams;
        }, new URLSearchParams()
        );
}

/**
 * Gets all the query Params
 *
 * @returns {*} The query param we need to search for
 */
const getQueryParams = () => {
    const queryParams = new URLSearchParams(windowUrl?.search);
    return Object.fromEntries(queryParams);
};

/**
 * Method to build and send to the browser's history any
 * query parameters built on the page when the user filters
 * any content
 *
 * @param {object}  query The Vuex store state
 * @param {boolean} updateHistory Whether to update the history or not
 */
const updateBrowserHistory = (query, updateHistory = false) => {
    if (query.toString() && updateHistory) {
        const { origin, pathname } = windowUrl;
        const urlPath = `${origin}${pathname}?${query.toString()}`;
        window.history.pushState({ path: urlPath }, document.title, urlPath);
    }
}

/**
 * A function that sends the browser to a specific URL
 * @param {object} query The React store state
 * @param {string} url The URL to go to
 */
const goToUrl = (query, { url = '' }) => {
    if (query && url) {
        window.location = `${url}?${query}`;
    }
};

export {
    generateQueryParams,
    getQueryParams,
    goToUrl,
    updateBrowserHistory,
}
