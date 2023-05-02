import axios from "axios";

/**
 * Makes an API request passing through the URL and any configs
 * @param {String}  apiUrl  The API Url
 * @param {Object}  config  The API config object
 * @returns {Promise<{fetchErr: boolean}|any>}
 */
export const apiGetRequest = async (apiUrl, config = {}) => {
    try {
        const response = await axios.get(apiUrl, config);
        return response.data;
    } catch (err) {
        console.error(err);
        return { fetchErr: true };
    }
};
