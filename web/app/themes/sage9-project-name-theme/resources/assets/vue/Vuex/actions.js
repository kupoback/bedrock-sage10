import axios from "axios";

/**
 * API call to grab the navigation items from the Rest API
 * @param store
 * @param opts
 * @returns {Promise<AxiosResponse<any> | void>}
 */
export function getNavigation (store, opts) {
    const {viewport, navLocation} = opts;
    return axios
        .get(
            NAV.api,
            {params: {navLocation, viewport}}
        )
        .then(({data, status}) => {
            if (status === 200 && data.status !== 404) {
                store.commit("buildNavigation", {
                    viewport: viewport,
                    data: data || null,
                });
            }
        })
        .catch(err => console.error(err));
}
