/**
 * Checks whether the passed array contains the passed term_id
 * @param {Array}           arrayItems
 * @param {Number, String}  term_id
 * @returns {*}
 */
export const addRemoveTerm = (arrayItems, term_id) => {
    if (arrayItems.includes(term_id)) arrayItems = arrayItems.filter(term => term !== term_id);
    else arrayItems.push(term_id);

    return arrayItems;
}

/**
 * Returns whether the object contains any key:values
 *
 * @param {Object} obj The object to check for
 * @returns {boolean}
 */
export const objectNotEmpty = (obj) => Object.keys(obj).length !== 0;


/**
 * Updates the page selected from Pagination
 *
 * @param {Number}   page The page selected
 * @param {Function} state The store state
 */
export const setPage = (page, state) => state.setState({page})

/**
 * Sets the results total based on the ID passed and the count passed
 * @param {String}          elmId The element ID to set the count to
 * @param {Number, String}  count The total count for innerText
 */
export const setResultsCount = (elmId, count) => {
    const elm = document.getElementById(elmId)
    if (count && elm) elm.innerText = `: ${count}`
}

export const paginationClickHandler = (state, page, elmId) => {
    const elm = document.getElementById(elmId);
    setPage(page + 1, state)
    state.getState().fetch(true);

    if (elm) {
        let offsetTop = 100;
        if (window.innerWidth > 769) {
            offsetTop = 75;
        }

        window.scrollTo({
            behavior: 'smooth',
            top: (elm.offsetTop - offsetTop)
        });
    }
}


export default {
    addRemoveTerm,
    objectNotEmpty,
    paginationClickHandler,
    setPage,
    setResultsCount,
}
