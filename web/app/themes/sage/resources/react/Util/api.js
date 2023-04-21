import axios from "axios";

/**
 * Makes an API request passing through the URL and any configs
 * @param apiUrl
 * @param config
 * @returns {Promise<{fetchErr: boolean}|any>}
 */
const apiGetRequest = async (apiUrl, config = {}) => {
    try {
        const response = await axios.get(apiUrl, config);
        return response.data;
    } catch (err) {
        console.error(err);
        return { fetchErr: true };
    }
};

export { apiGetRequest };
