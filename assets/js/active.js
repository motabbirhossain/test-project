/*
    Template: Rafter - Roofing Services HTML5 Template
    Author: ThemeJunction
*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		/*==========================
				Swiper Init
		============================*/
		var swiper = new Swiper(".hero__content_right", {
			loop: true,
			spaceBetween: 0,
			effect: "fade",
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			  renderBullet: function (index, number) {
				return '<span class="' + number + '">' + (index + 1) + "</span>";
			  },
			},
			autoplay: {
				delay: 6000,
			},
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
