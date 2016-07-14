"use strict";

$(function() {

	(function() {

		// Переворачивание плашек на главной странице

		var flippedFront = function() {
			$('.welcome__btn').fadeIn();
			$('.welcome__block').removeClass('welcome__block_flipped');
		};

		$('.welcome__btn').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut();
			$('.welcome__block').addClass('welcome__block_flipped');
		});

		$('.wrapper').on('click', function(e) {
			if(e.target.classList.contains('welcome')) {
			flippedFront();
			}
		});

		$('.js-flipped-front').on('click', function(e) {
			e.preventDefault();
			flippedFront();
		});

	})();

	(function() {

		// Активация меню

		$('.js-menu-toggle').on('click', function() {
			$(this).toggleClass('header__menu_active');
			$('.menu').toggleClass('menu_active');
		});

	})();

	(function() {

		// Активация сайдбара

		$('.js-sidebar-toggle').on('click', function() {
			$(this).parent().toggleClass('blog__sidebar_active');
			$('.header').toggleClass('header_slide-right');
			$('.blog__content').toggleClass('blog__content_slide-right');
		});

		//

		$(window).on('resize', function() {
			if($(window).width() >= 1200) {
				$('.blog__sidebar').removeClass('blog__sidebar_active')
					.removeClass('blog__sidebar_fixed');
				$('.header').removeClass('header_slide-right');
				$('.blog__content').removeClass('blog__content_slide-right');
			}
		});

		//

		var blogSidebar = $('.blog__sidebar'),
		sidebarOffset = blogSidebar.offset().top;

		$(document).on('scroll', function() {
			if($(window).scrollTop() > sidebarOffset) {
				blogSidebar.addClass('blog__sidebar_fixed');
			} else {
				blogSidebar.removeClass('blog__sidebar_fixed');
			}
		});

	})();

});