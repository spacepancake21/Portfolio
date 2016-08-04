$(function() {

	// SLIDER

	var
		worksInfoItem = $('.works__info-item'),
		worksPreviewItem = $('.works__preview-item'),
		worksBtnDownItem = $('.works__btn_down .works__btn-item'),
		worksBtnUpItem = $('.works__btn_up .works__btn-item'),

		iCount = 1,
		pCount = 1,
		bdDownCount = 0,
		bdUpCount = 2;

	// * * *

	worksInfoItem.eq(iCount).addClass('works__info-item_active');
	worksPreviewItem.eq(pCount).addClass('works__preview-item_active');
	worksBtnDownItem.eq(bdDownCount).addClass('works__btn-item_active');
	worksBtnUpItem.eq(bdUpCount).addClass('works__btn-item_active');

	// * * *

	$('.works__btn').on('click', function(e) {

		e.preventDefault();

		if($(this).hasClass('works__btn_down')) {

			// переключение блока с описанием
			if(iCount >= worksInfoItem.length-1) {
				worksInfoItem.eq(iCount).removeClass('works__info-item_active');
				iCount = 0;
				worksInfoItem.eq(iCount).addClass('works__info-item_active');
			} else {
				worksInfoItem.eq(iCount).removeClass('works__info-item_active');
				iCount++;
				worksInfoItem.eq(iCount).addClass('works__info-item_active');
			}
			// переключение блока с большой картинкой
			if(pCount >= worksPreviewItem.length-1) {
				worksPreviewItem.eq(pCount).removeClass('works__preview-item_active');
				pCount = 0;
				worksPreviewItem.eq(pCount).addClass('works__preview-item_active');
			} else {
				worksPreviewItem.eq(pCount).removeClass('works__preview-item_active');
				pCount++;
				worksPreviewItem.eq(pCount).addClass('works__preview-item_active');
			}
			// переключение блока с кнопкой вниз
			if(bdDownCount >= worksInfoItem.length-1) {
				worksBtnDownItem.eq(bdDownCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdDownCount = 0;
				worksBtnDownItem.eq(bdDownCount).addClass('works__btn-item_active');
			} else {
				worksBtnDownItem.removeClass('works__btn-item_anim');
				worksBtnDownItem.eq(bdDownCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdDownCount++;
				worksBtnDownItem.eq(bdDownCount).addClass('works__btn-item_active');
			}
			// переключение блока с кнопкой вверх
			if(bdUpCount >= worksInfoItem.length-1) {
				worksBtnUpItem.eq(bdUpCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdUpCount = 0;
				worksBtnUpItem.eq(bdUpCount).addClass('works__btn-item_active');
			} else {
				worksBtnUpItem.removeClass('works__btn-item_anim');
				worksBtnUpItem.eq(bdUpCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdUpCount++;
				worksBtnUpItem.eq(bdUpCount).addClass('works__btn-item_active');
			}

		}

		/* * */

		if($(this).hasClass('works__btn_up')) {

			// переключение блока с описанием
			if(iCount <= 0) {
				worksInfoItem.eq(iCount).removeClass('works__info-item_active');
				iCount = worksPreviewItem.length-1;
				worksInfoItem.eq(iCount).addClass('works__info-item_active');
			} else {
				worksInfoItem.eq(iCount).removeClass('works__info-item_active');
				iCount--;
				worksInfoItem.eq(iCount).addClass('works__info-item_active');
			}
			// переключение блока с большой картинкой
			if(pCount <= 0) {
				worksPreviewItem.eq(pCount).removeClass('works__preview-item_active');
				pCount = worksPreviewItem.length-1;
				worksPreviewItem.eq(pCount).addClass('works__preview-item_active');
			} else {
				worksPreviewItem.eq(pCount).removeClass('works__preview-item_active');
				pCount--;
				worksPreviewItem.eq(pCount).addClass('works__preview-item_active');
			}
			// переключение блока с кнопкой вниз
			if(bdDownCount <= 0) {
				worksBtnDownItem.eq(bdDownCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdDownCount = worksPreviewItem.length-1;
				worksBtnDownItem.eq(bdDownCount).addClass('works__btn-item_active');
			} else {
				worksBtnDownItem.removeClass('works__btn-item_anim');
				worksBtnDownItem.eq(bdDownCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdDownCount--;
				worksBtnDownItem.eq(bdDownCount).addClass('works__btn-item_active');
			}
			// переключение блока с кнопкой вверх
			if(bdUpCount <= 0) {
				worksBtnUpItem.eq(bdUpCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdUpCount = worksPreviewItem.length-1;
				worksBtnUpItem.eq(bdUpCount).addClass('works__btn-item_active');
			} else {
				worksBtnUpItem.removeClass('works__btn-item_anim');
				worksBtnUpItem.eq(bdUpCount).removeClass('works__btn-item_active')
					.addClass('works__btn-item_anim');
				bdUpCount--;
				worksBtnUpItem.eq(bdUpCount).addClass('works__btn-item_active');
			}

		}

	});

});

// BLUR

if($('.works__about').length) {

	function blur() {
		var imgWidth = 2067,
			blurSection = $('.works__about'),
			blur = $('.works__blur'),
			posY;

		posY = blurSection.offset().top - blur.offset().top;

		blur.css({
			//'background-size': imgWidth + 'px' + ' ' + 'auto',
			'background-position': 'center' + ' ' + posY + 'px'
		});
	}

	$(document).ready(function(){
		blur();
	});

	$(window).resize(function(){
		blur();
	});

}