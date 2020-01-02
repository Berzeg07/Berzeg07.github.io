var actionSlider = undefined;

function initAction() {
    var screenWidth = $(window).width();
    if (screenWidth > 767 && actionSlider == undefined) {
        actionSlider = new Swiper('.action-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,

            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1279: {
                    slidesPerView: 2
                },
                1280: {
                    slidesPerView: 2
                },
            },
            navigation: {
                nextEl: '.swiper-button-next-action',
                prevEl: '.swiper-button-prev-action',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (screenWidth < 768 && actionSlider != undefined) {
        actionSlider.destroy();
        actionSlider = undefined;
        $('.swiper-wrapper_action').removeAttr('style');
        $('.swiper-slide_action').removeAttr('style');
    }
}

//Swiper plugin initialization
initAction();

//Swiper plugin initialization on window resize
$(window).on('resize', function() {
    initAction();
});
