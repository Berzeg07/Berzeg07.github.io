$(document).ready(function () {

    // function activateFastReview() {
    $('.fastview-btn').click(function () {
        var htmlModal = $(this).parents('.product-card').find('.fastview-item').html();

        // $('.fastview').fadeOut();
        // $('.fastview').remove();
        // $('.select-refprod select').selectric('destroy');
        // $('.select-refprod select').selectric();

        var reviewModal = $('<div class="fastview"></div>');

        $('body').append(reviewModal);
        $('.fastview').append(htmlModal);
        $('.fastview').fadeIn();
        $('.addfavor').click(function () {
            $(this).toggleClass("is-active");
        });
        $('.select-refprod select').selectric();
        $('.overlay').fadeIn();

        var galleryThumbs = new Swiper('.fastview .fastview-gallery-thumb', {
            spaceBetween: 10,
            slidesPerView: 4,
            observer: true,
            observeParents: true,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var galleryTop = new Swiper('.fastview .fastview-gallery-top', {
            spaceBetween: 10,
            loop: true,
            observer: true,
            observeParents: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        $('.fastview__close').click(function () {
            $('.fastview').fadeOut();
            $('.overlay').fadeOut();
            $('.fastview').remove();
            $('.select-refprod select').selectric('destroy');
        });
    });
    // }

    var galleryProductThumbs = new Swiper('.product-gallery-thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryProductTop = new Swiper('.product-gallery-top', {
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        loopedSlides: 5, //looped slides should be the same
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryProductThumbs,
        },
    });

    var ordersGallery = new Swiper('.orders-list', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
        observer: true,
        observeParents: true,
        // loopedSlides: 5, //looped slides should be the same
        breakpoints: {
            499: {
                slidesPerView: 1.9,
                spaceBetween: 6,
            },
            599: {
                slidesPerView: 2.3,
                spaceBetween: 7,
            },
            767: {
                slidesPerView: 3.1,
                spaceBetween: 7,
            },
            991: {
                slidesPerView: 2.2,
                spaceBetween: 7,
            }
        }
    });

    $('.delivery-btn').click(function () {
        $('.delivery').slideToggle();
    });

    $('.select_sorting select').selectric();

    $('.product-select select').selectric();

    $('.addfavor').click(function () {
        $(this).toggleClass("is-active");
    });

    $('.filter-mob__list li span').click(function () {
        $(this).parent().toggleClass('is-active');
        $(this).next().slideToggle();
    });

    $('.filter-mob__sort li').click(function () {
        $('.filter-mob__sort li').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.catalogtop-mob__filter-btn').click(function () {
        $('.filter-mob_checks').fadeIn();
    });

    $('.catalogtop-mob__sort-btn').click(function () {
        $('.filter-mob_sort').fadeIn();
    });

    $('.filter-mob__close').click(function () {
        $('.filter-mob').fadeOut();
    });

    $('.reviews-like__btn').click(function () {
        $(this).parent().children().removeClass('is-active');
        $(this).addClass("is-active");
    });

    $('.show-article').click(function () {
        $(this).parent().find('.product-specif__article').addClass('height-auto');
        $(this).addClass('hidden');
    });

    $('.editadress').click(function () {
        $('.modal-lk_addadress').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.close-modal').click(function () {
        $('.modal-lk, .modal').fadeOut();
        $('.overlay').fadeOut();
    });

    $('.editcont').click(function () {
        $(this).parent().find('input').removeAttr('disabled').focus();
    });

    $('.editname').click(function () {
        $(this).parents('.tab-profile__name-block').find('input').removeAttr('disabled').focus();
    });

    $('.tab-profile__phone input, .tab-profile__email input, .tab-profile__name').focusout(function () {
        $(this).attr('disabled', 'disabled');
    });

    $('.modal-pickup__item').click(function () {
        $('.modal-pickup__item').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.acc-tabs .acc-tabs__item').click(function () {
        $('.acc-tabs__item').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.acc-tabscont__item').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.acc-tabs .acc-tabs__item:first-child').click();

    $(".switch-counter .switch-counter__btn").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        }
        else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }

        $button.parent().find("input").val(newVal);

        if (newVal == 1) {
            $button.parent().find('.switch-counter__btn_minus').addClass('disabled');
        } else {
            $button.parent().find('.switch-counter__btn_minus').removeClass('disabled');
        }
    });

    $('.purchase__delete').click(function () {
        $(this).parents('.purchase').remove();
    });

    $('.tab-slider').each(function () {
        var actionSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
                },
                599: {
                    slidesPerView: 2.3,
                    spaceBetween: 7,
                },
                767: {
                    slidesPerView: 3.1,
                    spaceBetween: 7,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
        actionSlider.on('transitionEnd', function () {
            $('.btn_buy').click(function () {
                $(this).addClass('is-active');
                $(this).html('В корзине');
            });
            $('.addfavor').click(function () {
                $(this).toggleClass("is-active");
            });
        });
    });

    $('.product-slider').each(function () {
        var productSlider = new Swiper(this, {
            slidesPerView: 3,
            spaceBetween: 45,
            loop: false,
            navigation: {
                nextEl: $(this).parent().find('.swiper-button-next'),
                prevEl: $(this).parent().find('.swiper-button-prev'),
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 35,
                },
                599: {
                    slidesPerView: 2.3,
                    spaceBetween: 7,
                },
                767: {
                    slidesPerView: 3.1,
                    spaceBetween: 7,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
    });

    $('.recom-slider').each(function () {
        var productSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            navigation: {
                nextEl: $(this).parent().find('.swiper-button-next'),
                prevEl: $(this).parent().find('.swiper-button-prev'),
            },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
                },
                599: {
                    slidesPerView: 2.3,
                    spaceBetween: 7,
                },
                767: {
                    slidesPerView: 3.1,
                    spaceBetween: 7,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
    });

    // activateFastReview();

    function selecticActivate() {
        $('.select_city select').selectric();
    }

    selecticActivate();

    $('.catalog-btn').click(function () {
        $('.menu-laptop').fadeIn();
    });

    $('.dropdownmenu__close').click(function () {
        $('.menu-laptop').fadeOut();
    });

    $('.menu-laptop__list li').click(function () {
        $('.menu-laptop__list li').removeClass('is-active');
        $(this).addClass('is-active');
        $('.dropdownmenu_laptop').css('display', 'none');
        $(this).find('.dropdownmenu_laptop').fadeIn();
    });

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 1280px)').matches) {
            $('.menu-laptop').removeAttr('style');
        }
    });

    $('.mob-menu__cat-link').click(function () {
        $(this).next().addClass('is-active');
    });

    $(".phoneinp").mask("+7 (999) 999-99-99");

    $('.mob-menu__back').click(function () {
        $(this).parent().removeClass('is-active');
    });

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.mob-menu').toggleClass('is-active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 250) {
            $('.sticky-panel').addClass('is-active');
        }
        else {
            $('.sticky-panel').removeClass('is-active');
        }
    });

    $('.footer__list-title').click(function () {
        $(this).next().slideToggle();
    });

    $('.deliveryserv__switch').click(function () {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('.deliveryserv__item_map').css('display', 'none');
            $('.deliveryserv__item_list').fadeIn();
            $(this).text('Показать на карте');
        } else {
            $(this).text('Показать списком');
            $('.deliveryserv__item_list').css('display', 'none');
            $('.deliveryserv__item_map').fadeIn();
        }
    });

    $('.brends-list__modal').mCustomScrollbar({
        axis: 'y',              // вертикальный скролл 
        theme: 'dark',  // тема 
        // scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
        setHeight: 264,         // высота блока (переписывает CSS) 
        // mouseWheel: {
        //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
        // }
    });

    $('.delivery-list, .modal-pickup').mCustomScrollbar({
        axis: 'y',              // вертикальный скролл 
        theme: 'dark',  // тема 
        // scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
        // setHeight: 360,         // высота блока (переписывает CSS) 
        // mouseWheel: {
        //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
        // }
    });

    function showSidebar() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280) {
            $('.category-block__top').click(function () {
                $('.category-block__list').slideToggle();
            });
        }
        if (screenWidth > 767) {
            $('.orders-block__top').click(function () {
                $(this).toggleClass('is-active');
                $(this).next().slideToggle();
            });
        }
    }

    showSidebar();

    function tabsScroll() {
        var screenWidth = $(window).width();
        if (screenWidth < 400) {
            $('.tabs-btn').mCustomScrollbar({
                axis: 'x',              // вертикальный скролл 
                theme: 'dark',  // тема 
                // scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
                //setHeight: 264,         // высота блока (переписывает CSS) 
                // mouseWheel: {
                //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
                // }
            });
        }
    }

    tabsScroll();

    var bannerSlider = undefined;

    function initBannerSlider() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280 && bannerSlider == undefined) {

            var bannerSlider = new Swiper('.banner-block', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 1.3,
                        spaceBetween: 38,
                    },
                    1079: {
                        slidesPerView: 1.4,
                        spaceBetween: 10,
                    },
                    1279: {
                        slidesPerView: 1.6,
                        spaceBetween: 10,
                    }
                },
            });

        } else if (screenWidth > 1279 && bannerSlider != undefined) {
            bannerSlider.destroy();
            bannerSlider = undefined;
        }
    }

    initBannerSlider();

    $('.product-list-slider').each(function () {
        var productListSlider = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 45,
            loop: false,
            // navigation: {
            //     nextEl: $(this).parent().find('.swiper-button-next'),
            //     prevEl: $(this).parent().find('.swiper-button-prev'),
            // },
            breakpoints: {
                499: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
                },
                599: {
                    slidesPerView: 2.3,
                    spaceBetween: 7,
                },
                767: {
                    slidesPerView: 3.1,
                    spaceBetween: 7,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
    });

    $('.reviews-gallery').each(function () {
        var revGallerySlider = new Swiper(this, {
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                767: {
                    slidesPerView: 4,
                    spaceBetween: 7,
                }
            }
        });
    });

    var newsSlider = new Swiper('.news-slider', {
        slidesPerView: 3.8,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            599: {
                slidesPerView: 1.6,
                spaceBetween: 5,
            },
            767: {
                slidesPerView: 2.3,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 1.6,
                spaceBetween: 25,
            },
            1099: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            1279: {
                slidesPerView: 2.6,
                spaceBetween: 10,
            },
            1899: {
                slidesPerView: 3.2,
                spaceBetween: 10,
            }
        },
    });

    $('.btn_buy').click(function () {
        $(this).addClass('is-active');
        $(this).html('В корзине');
    });

    $('.tabs-btn span').click(function () {
        $('.tabs-btn__el').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.action-tab').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.tabs-btn span:first-child').click();

    $('.modal-tablist button').click(function () {
        $('.modal-tablist button').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.modal-lk__tab').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.modal-tablist button:first-child').click();

    $('.delivmethod__about-shipping').click(function () {
        $('.modal-lk_check').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.delivery-type').click(function () {
        $('.delivery-type').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.delivery-method').click(function () {
        $('.delivery-method').removeClass('is-active');
        $(this).addClass('is-active');
    });

    ymaps.ready(init);

    function init() {
        var center = [55.59113656911934, 37.88662649999996];
        var myMap = new ymaps.Map('mappickup', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // iconImageHref: 'img/map-ic.png',
            // iconImageSize: [42, 42]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);

        //=======================================================

        var center2 = [55.59113656911934, 37.88662649999996];
        var myMap2 = new ymaps.Map('adressmap', {
            center: center2,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap2.behaviors.disable('scrollZoom');

        var myPlacemark2 = new ymaps.Placemark(center2, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // iconImageHref: 'img/map-ic.png',
            // iconImageSize: [42, 42]
            // preset: 'twirl#violetIcon'
        });

        myMap2.geoObjects.add(myPlacemark2);

        //=======================================================

        var center3 = [55.59113656911934, 37.88662649999996];
        var myMap3 = new ymaps.Map('addAdress', {
            center: center3,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap3.behaviors.disable('scrollZoom');

        var myPlacemark3 = new ymaps.Placemark(center3, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // iconImageHref: 'img/map-ic.png',
            // iconImageSize: [42, 42]
            // preset: 'twirl#violetIcon'
        });

        myMap3.geoObjects.add(myPlacemark3);
    }

    // Тестовый вызов модалок !!!!!!!!!!!!!!!!!!!!!!!

    // $(".test1").click(function () {
    //     $('.modal-lk_addadress').fadeIn();
    // });

    // $(".test2").click(function () {
    //     $('.modal-lk_check').fadeIn();
    // });


});
