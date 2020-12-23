$(document).ready(function() {

    $('.header-main').addClass('scale-animate');

    $('.flat-info__btn').click(function() {
        var $this = $(this);
        $('.flat-info__front, .flat-info__back').removeAttr('style');
        $('.flat-info__front').addClass('hide');
        $('.flat-info__back').fadeIn();
        $('.flat-info__back').removeClass('hide');
        if (!$this.hasClass("active")) {
            $('.flat-info__front, .flat-info__back').removeAttr('style');
            $('.flat-info__front').fadeIn();
            $('.flat-info__front').removeClass('hide');
            $('.flat-info__back').addClass('hide');
        }
        $($this).toggleClass('active');
    });

    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu, .bg-dropdown, .bg-center').toggleClass('is-active');
    });

    $('.close-menu').click(function() {
        $('.dropdown-menu, .bg-dropdown, .burger, .bg-center').removeClass('is-active');
    });

    var swiperApartaments = new Swiper('.apartments-slider', {
        slidesPerView: 2,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next-apart',
            prevEl: '.swiper-button-prev-apart',
        },
        breakpoints: {
            1279: {
                slidesPerView: 1,
                spaceBetween: 15,
            }
        }
    });




});