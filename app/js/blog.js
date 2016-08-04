"use strict";

$(function() {

	if($('.blog').length) {

		var blogSidebar = $('.blog__sidebar'),
			sidebarOffset = blogSidebar.offset().top;

		// Активация сайдбара

		$('.js-sidebar-toggle').on('click', function() {
			$(this).parent().toggleClass('blog__sidebar_active');
			$('.header').toggleClass('header_slide-right');
			$('.blog__content').toggleClass('blog__content_slide-right');
		});

		// Закрываем сайдаб при разрешении меньше 1200px

		$(window).on('resize', function() {

			if($(window).outerWidth() >= 1200) {
				$('.blog__sidebar').removeClass('blog__sidebar_active');
				$('.header').removeClass('header_slide-right');
				$('.blog__content').removeClass('blog__content_slide-right');

				if($(window).scrollTop() > sidebarOffset) {
					blogSidebar.addClass('blog__sidebar_fixed');
				}

			} else {
				$('.blog__sidebar').removeClass('blog__sidebar_fixed');
			}

		});

		// Добавляем класс fixed к сайдбару

		$(document).on('scroll load', function() {
			if($(window).scrollTop() >= sidebarOffset) {
				blogSidebar.addClass('blog__sidebar_fixed');
			} else {
				blogSidebar.removeClass('blog__sidebar_fixed');
			}
		});

	}

});