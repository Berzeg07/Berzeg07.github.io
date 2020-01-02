var bankSlider = undefined;

function initSwiper() {
    var screenWidth = $(window).width();

    if (screenWidth > 991 && bankSlider == undefined) {

        bankSlider = new Swiper('.banks-slider', {
            slidesPerView: 9,
            spaceBetween: 80,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next-bank',
                prevEl: '.swiper-button-prev-bank',
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1279: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1599: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                1799: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                1800: {
                    slidesPerView: 8,
                    spaceBetween: 80,
                },
                1919: {
                    slidesPerView: 8,
                    spaceBetween: 80,
                }
            }
        });

    } else if (screenWidth < 992 && bankSlider != undefined) {
        bankSlider.destroy();
        bankSlider = undefined;
        $('.swiper-wrapper_bank').removeAttr('style');
        $('.swiper-slide_bank').removeAttr('style');
    }
}

initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function() {
    initSwiper();
});
