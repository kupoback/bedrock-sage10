import easydropdown from "easydropdown";

export default {
  init() {
    // JavaScript to be fired on all pages

    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      if ($(this).hasClass('is-active')) {
        $('.topnav').slideDown(500);
      } else {
        $('.topnav').slideUp(500);
      }
    });
    $(window).resize(function () {
      $('.topnav').attr('style', '');
      $('.hamburger').removeClass('is-active');
    });

    // Scroll To
    (function () {
      $('.scrollto').on('click', function (e) {
        e.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(section).offset().top
        }, 1000);
      });
    })();

    easydropdown.all();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
