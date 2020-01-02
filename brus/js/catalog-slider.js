var catalogSlider = undefined;

function initCatalog() {
    var screenWidth = $(window).width();
    if (screenWidth < 1280 && catalogSlider == undefined) {
        catalogSlider = new Swiper('.catalog', {
            slidesPerView: 4,
            spaceBetween: 12,
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
                991: {
                    slidesPerView: 3
                },
                1279: {
                    slidesPerView: 3
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination-catalog',
                clickable: true,
            },
        });
    } else if (screenWidth > 1279 && catalogSlider != undefined) {
        catalogSlider.destroy();
        catalogSlider = undefined;
        $('.swiper-wrapper_catalog').removeAttr('style');
        $('.swiper-slide_catalog').removeAttr('style');
    }
}

//Swiper plugin initialization
initCatalog();

//Swiper plugin initialization on window resize
$(window).on('resize', function() {
    initCatalog();
});
