/*
    Template: Rafter - Roofing Services HTML5 Template
    Author: ThemeJunction
*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		/*==========================
			Owl Carousel Init
		============================*/
		$('.hero__content_right').owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			nav: false,
			dots: true,
			dotsData: true,
		});
		/* ==========================
				#wow  init
		=============================*/
		new WOW().init();
		// if ($(".wow").length) {
		// 	var wow = new WOW({
		// 		boxClass: "wow",
		// 		animateClass: "animated",
		// 		mobile: true,
		// 		live: true,
		// 	});
		// 	wow.init();
		// }
	});
})(jQuery); // End jQuery
