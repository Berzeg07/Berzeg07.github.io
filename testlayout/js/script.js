var plotCarousel = new Swiper('#plot-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-container-plot__button_next',
        prevEl: '.swiper-container-plot__button_prev',
        disabledClass: 'swiper-container-plot__button_disabled'
    }
});

var dataProject;

$('.plot-block-content-item__elem').click(function () {
    $('.plot-block-content-item__elem').removeClass('is-active');
    $(this).addClass('is-active');
    var tab = $(this).attr('data-tab');
    $('.plot-block-img').not(tab).css({ 'display': 'none' });
    $(tab).fadeIn(400);
});
$('.plot-block-content-item div:first').trigger('click');

plotCarousel.on('slideChangeTransitionEnd', function () {
    $('.swiper-slide-active .plot-block-content-item div:first').trigger('click');
    var attrActive = $('.swiper-slide-active').attr('data-swiper-slide-index');
    dataProject = $('.swiper-slide-active .plot-block').attr('data-project');
    $('.' + dataProject).trigger('click');
});

var swiper = new Swiper('#cost-slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // Navigation arrows
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.calculator-change-sector__button_next',
        prevEl: '.calculator-change-sector__button_prev',
        disabledClass: 'calculator-change-sector__button_disabled'
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});

$('.btntab').click(function () {
    var attr = $(this).attr('data-place');
    $('#place' + attr).trigger('click');
    swiper.slideTo(Number(attr), 1, false);
})

var container = document.querySelector('#cost-slider');

container.addEventListener('click', function (e) {
    var element = e.target;
    var item = element.closest('.calculator-change-sector__item-container');
    if (!item) return;
    var prevActive = container.querySelector('.calculator-change-sector__item_active');

    if (prevActive) {
        prevActive.classList.remove('calculator-change-sector__item_active');
    }

    item.classList.add('calculator-change-sector__item_active');
});