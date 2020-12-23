$(document).ready(function(){
	$('.level-selection-tab li').click(function(e) {
		e.preventDefault();
		$('li').removeClass('level-selection-active');
		$(this).addClass('level-selection-active');
		var tab = $(this).attr('data-num');
		$('.level-selection-tab__box').not(tab).css({'display':'none'});
		$(tab).fadeIn(400);
	});
	$('.level-selection-tab li:first').click();

	$('.single-tab li').click(function(e) {
		e.preventDefault();
		$('li').removeClass('single-item-active');
		$(this).addClass('single-item-active');
		var tab = $(this).attr('data-num');
		$('.single-column-tab__box').not(tab).css({'display':'none'});
		$(tab).fadeIn(400);
	});

	$('.single-tab li:first').click();

	$('.appartaments-tab a').click(function(e) {
		e.preventDefault();
		$('a').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.appartaments-tab__box').not(tab).css({'display':'none'});
		$(tab).fadeIn(400);
	});
	$('.appartaments-tab a:first').click();
});


var swiperApps1 = new Swiper('.appartaments-tab1', {
	slidesPerView: 1.29,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    // when window width is >= 320px
    992: {
    	slidesPerView: 1,
    	spaceBetween: 30
    },
}

});
