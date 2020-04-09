/**
 * A file that contains most of the Vue Components and logic
 */
import axios from "axios";
import Vue from "vue";
import { MediaQueries } from "vue-media-queries";

window.Vue = Vue;
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);

Vue.config.productionTip = false;

if (document.getElementById("modal-cnt") !== null) {
    const ModalWindow = Vue.component("modal", require('./Components/Modal.vue').default);
    const modalElm = new Vue({
        el: "#modal-cnt",
        render: h => h(ModalWindow)
    });
}
