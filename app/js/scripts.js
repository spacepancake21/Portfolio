"use strict";

$(function() {

	(function() {

		// Переворачивание плашек на главной странице

		$('.welcome__btn').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut();
			$('.welcome__block').addClass('welcome__block_flipped');
		});

		$('.wrapper').on('click', function(e) {
			if(e.target.classList.contains('welcome')) {
				$('.welcome__btn').fadeIn();
				$('.welcome__block').removeClass('welcome__block_flipped');
			}
		});

	})();

});