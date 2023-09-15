/**
 * Checks whether the passed array contains the passed term_id
 * @param {Array}           arrayItems
 * @param {Number, String}  term_id
 * @returns {*}
 */
const addRemoveTerm = (arrayItems, term_id) =>
    arrayItems.includes(term_id)
        ? arrayItems.filter(term => term !== term_id)
        : [...arrayItems, term_id];


/**
 * Returns whether the object contains any key:values
 *
 * @param {Object} obj The object to check for
 * @returns {boolean}
 */
const objectNotEmpty = (obj) => Object.keys(obj).length !== 0;

/**
 * Updates the page selected from Pagination
 *
 * @param {Number}   page The page selected
 * @param {Function} state The store state
 */
const setPage = (page, state) => state.setState({page})

/**
 * Sets the results total based on the ID passed and the count passed
 * @param {String}          elmId The element ID to set the count to
 * @param {Number, String}  count The total count for innerText
 */
const setResultsCount = (elmId, count) => {
    const elm = document.getElementById(elmId);
    elm && (elm.innerText = count || '');
};

/**
 * Handles the Pagination click handler to change the page and
 * scroll the user back to the top of the listing
 *
 * @param {Object} state This is the Zustand state
 * @param {Number} page  The page number to switch to
 * @param {String} elmId The ID name of the element to scroll to
 */
const paginationClickHandler = (state, page, elmId) => {
    setPage(page, state)
    state.getState().fetch(true);

    const elm = document.getElementById(elmId);
    if (elm) {
        const offsetTop = window.innerWidth > 769 ? 75 : 100;

        window.scrollTo({
            behavior: 'smooth',
            top: elm.offsetTop - offsetTop,
        });
    }
}

export {
    addRemoveTerm,
    objectNotEmpty,
    paginationClickHandler,
    setPage,
    setResultsCount,
}
