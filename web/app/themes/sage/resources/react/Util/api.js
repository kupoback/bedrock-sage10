import axios from "axios";

export const apiRequest = async (apiUrl, config = {}) => {
    try {
        const response = await axios
            .get(apiUrl, config);

        return await response.data;
    } catch (err) {
        console.error(err);
        return {fetchErr: true}
    }
}

export default {
    apiRequest,
}
