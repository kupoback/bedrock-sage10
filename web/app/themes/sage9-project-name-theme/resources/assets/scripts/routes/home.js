import Swiper from "swiper/dist/js/swiper.js";

export default {
  init() {
				// JavaScript to be fired on the home page
				$("body").data("loading", "loading!");
				$("#section_id").waypoint({
					handler: function(direction) {
						$(this.element).data("alert", "ding");
						if (direction === "down") {
							$(this.element)
								.find(".col-left")
								.addClass("fadeInUp");
							$(this.element)
								.find(".col-right")
								.addClass("fadeInUp");
						}
					},
					offset: "50%"
				});
				
				$(window).on('load', function() {
					if ($('#hero video').length > 0) {
						$("#hero video")[0].play();
					}
				});
        
        var newswiper = new Swiper("#hero .swiper-container", {});
			},
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
