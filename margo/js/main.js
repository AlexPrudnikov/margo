$(function() {
	$('.product-slider-wrapper').slick({
		dots: false,
		slidesToShow: 4,
  		slidesToScroll: 1,
		prevArrow: '<button class="product-slider-wrapper-btn product-slider-wrapper-btnprev"><img src="./images/content/arrow-left.png" alt="arrow" /></button>',
		nextArrow: '<button class="product-slider-wrapper-btn product-slider-wrapper-btnright"><img src="./images/content/arrow-right.png" alt="arrow" /></button>'
	});
	$('.navigation__panel-link').on('click', function(){
		$('.navigation__panel-link').removeClass('navigation__panel-link--active');
		$(this).addClass('navigation__panel-link--active');
	});

	$('.product-item__favorite-img').on('click', function(){
		if($(this).hasClass('product-item__favorite-active')) {
			$(this).removeClass('product-item__favorite-active');
		} else {
			$(this).addClass('product-item__favorite-active');
		}
	});
		$('.product-item__compare-img').on('click', function(){
		if($(this).hasClass('product-item__compare-active')) {
			$(this).removeClass('product-item__compare-active');
		} else {
			$(this).addClass('product-item__compare-active');
		}
	});
});