import Swiper from "swiper";

export default {
    init() {
        // JavaScript to be fired on the home page
        $("body").data("loading", "loading!");
        
        const newSwiper = new Swiper("#hero .swiper-container", {});
    },
    finalize() {
        // JavaScript to be fired on the home page, after the init JS
    },
};
