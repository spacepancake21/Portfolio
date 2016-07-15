"use strict";

$(function() {

	if($('.menu').length) {

		// Активация меню

		$('.js-menu-toggle').on('click', function() {
			$(this).toggleClass('header__menu_active');
			$('.menu').toggleClass('menu_active');
		});

	}

});