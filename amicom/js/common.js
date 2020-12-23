$(document).ready(function () {
    $('.search-desctop').hover(function () {
        $(this).toggleClass('is-active');
    });

    $('.catalog-show').click(function () {
        $('.catalog-list').toggleClass('is-active');
    });

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        // $('.dropdownmenu').fadeToggle();
        // $('.overlay').fadeToggle();
        // $('body').toggleClass('hidden');
        $('.dropdownmenu').toggleClass('is-active');
    });

    // $(document).mouseup(function (e) { // событие клика по веб-документу
    //     var div = $(".dropdownmenu"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0 && !div.is('.burger')) { // и не по его дочерним элементам
    //         div.fadeOut(); // скрываем его
    //         $('.burger').removeClass('is-active');
    //     }
    // });

    $(".more-btn").click(function () {
        var $this = $(this);
        var elem = $(this).next().slideToggle();
        $this.toggleClass("is-active");
    });

    $('.catalog-list__links-top>li').hover(function () {
        $('.catalog-list__hidden').slideUp();
        $(".more-btn").removeClass('is-active');
    });

    $(".dropdownmenu__list>li").click(function (e) {
        console.log(e.target);
        if (e.target.tagName == 'LI') {
            var $this = $(this);
            var elem = $(this).find('.dropdownmenu__inner');

            if (!$this.hasClass("is-active")) {
                $(".dropdownmenu__inner").slideUp();
                $(".dropdownmenu__list>li").removeClass("is-active");
            }

            $this.toggleClass("is-active");
            elem.slideToggle();
        }
    });

    function showStickyMenu() {
        $(this).toggleClass('is-active');
        $('.dropmenu-main').fadeToggle();
    }

    var flag = true;

    function stickyMenu(scrollTopEl, elPosition, elHeight) {
        if (scrollTopEl >= elPosition.top) {
            $('.header').css('height', elHeight + 'px');
            $('.header__bottom-wrap').addClass('stickytop');
            if (flag) {
                flag = false;
                $('.dropmenu-main').fadeOut();
            }
            $('.dropdownmenu').addClass('is-sticky');
        }
        else {
            $('.header__bottom-wrap').removeClass('stickytop');
            $('.header').removeAttr('style');
            $('.dropdownmenu').removeClass('is-sticky');
            flag = true;
            $('.dropmenu-main').fadeIn();
            $('.catalog-show').removeClass('is-active');
        }
    }

    $(function () {
        var headerHeight = $(".header").height();
        var position = $(".header__bottom").offset();
        var windwoTop = $(window).scrollTop();

        stickyMenu(windwoTop, position, headerHeight);

        if (windwoTop >= position.top) {
            var el = document.querySelector('.catalog-show');
            el.addEventListener('click', showStickyMenu);
        }

        $(window).scroll(function () {
            var el = document.querySelector('.catalog-show');
            var scrollTopDinamic = $(this).scrollTop();
            stickyMenu(scrollTopDinamic, position, headerHeight);
            if (scrollTopDinamic >= position.top) {
                el.addEventListener('click', showStickyMenu);
            } else {
                el.removeEventListener('click', showStickyMenu);
            }
        });
    });

    var bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var catChooseSale = new Swiper('.cat-choose_sale', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-chs',
            prevEl: '.swiper-button-prev-chs',
        },
    });

    catChooseSale.on('slideChangeTransitionEnd', function () {
        var tabData = $('.cat-choose_sale .swiper-slide-active .cat-choose__item').attr('data-href');
        $('.sale-slider_tab').not(tabData).css({ 'display': 'none' });
        $(tabData).fadeIn(400);
    });

    var newsTab = new Swiper('.news-tab', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-nw',
            prevEl: '.swiper-button-prev-nw',
        },
    });

    newsTab.on('slideChangeTransitionEnd', function () {
        var tabData = $('.news-tab .swiper-slide-active .cat-choose__item').attr('data-href');
        $('.news-slider_tab').not(tabData).css({ 'display': 'none' });
        $(tabData).fadeIn(400);
    });

    var leads = new Swiper('.lead-tab', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-ld',
            prevEl: '.swiper-button-prev-ld',
        },
    });

    leads.on('slideChangeTransitionEnd', function () {
        var tabData = $('.lead-tab .swiper-slide-active .cat-choose__item').attr('data-href');
        $('.lead-slider_tab').not(tabData).css({ 'display': 'none' });
        $(tabData).fadeIn(400);
    });

    var contSlider = new Swiper('.sale-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var newsSlider = new Swiper('.news-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var leadSlider = new Swiper('.lead-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var complectSliderL = new Swiper('.csl', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-cl',
            prevEl: '.swiper-button-prev-cl',
        }
    });

    var complectSliderR = new Swiper('.csr', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-cr',
            prevEl: '.swiper-button-prev-cr',
        }
    });

});
