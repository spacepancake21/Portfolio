"use strict";

$(function() {

	(function() {

		$('.welcome__btn').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut();
			$('.welcome__block').addClass('welcome__block_flipped');
		});

		$('.wrapper').on('click', function(e) {
			if(e.target.className == 'wrapper welcome') {
				$('.welcome__btn').fadeIn();
				$('.welcome__block').removeClass('welcome__block_flipped');
			}
		});

	})();

});