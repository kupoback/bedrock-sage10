export default {
    methods: {
        objIsEmpty(obj) {
            return Object.keys(obj).length === 0;
        },
        objHasKey(obj, key) {
            return obj.hasOwnProperty(key);
        },
        /**
         * An array of terms with a term_id used to see if it exists, and remove it, otherwise add it
         * @param {Array.<arrayItems>} arrayItems An array of terms with at least term_id
         * @param term_id The term_id to add or remove from
         * @returns {*}
         */
        addRemoveTerm(arrayItems, term_id) {
            if (arrayItems.includes(term_id)) arrayItems = arrayItems.filter(term => term !== term_id);
            else arrayItems.push(term_id);

            return arrayItems;
        }
    }
}
