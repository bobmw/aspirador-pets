
/* Document Ready */
jQuery(document).ready(function () {
	"use strict";

	/* Page Pre Loading */
	$(window).load(function () { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
	});

	//Initiat WOW JS
	new WOW().init();

	//Smooth Scroll
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	//Testimonial Slider
	if ($('.cs-testimonial-slider').length) {
		$(".cs-testimonial-slider").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			margin: 42,
			nav: false,
			dots: true,

			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				992: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});
	}

	//Partner Slider
	if ($('.cs-partner-slider').length) {
		$(".cs-partner-slider").owlCarousel({
			items: 2,
			autoplay: false,
			nav: false,
			dots: false,

			responsive: {
				0: {
					items: 2,
					dots: true,
					nav: false
				},
				600: {
					items: 2,
					dots: true
				},
				992: {
					items: 4
				},
				1000: {
					items: 6
				},
				1200: {
					items: 6
				}
			}
		});
	}



});
