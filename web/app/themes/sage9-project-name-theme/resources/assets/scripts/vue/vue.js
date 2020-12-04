/**
 * A file that contains most of the Vue Components and logic
 */
import axios from "axios";
import Vue from "vue";
import { MediaQueries } from "vue-media-queries";
import VueAccessibleModal from "vue-accessible-modal";

window.Vue = Vue;
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);

/** Vue Accessibility Default Options **/
const modalOptions = {
    transition: 'fade',
};
Vue.use(VueAccessibleModal, modalOptions);

Vue.config.productionTip = false;

if (document.getElementById("modal-cnt") !== null) {
    const ModalWindow = Vue.component("modal", require('./Components/ModalContainer.vue').default);
    const modalElm = new Vue({
        el: "#modal-cnt",
        render: h => h(ModalWindow)
    });
}
