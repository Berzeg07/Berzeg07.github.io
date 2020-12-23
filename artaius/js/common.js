$(document).ready(function () {

    function previewShow() {
        var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
        var queue = {};
        var form = $('form#uploadImages');
        var imagesList = $('#uploadImagesList');

        var itemPreviewTemplate = imagesList.find('.item.template').clone();
        itemPreviewTemplate.removeClass('template');
        imagesList.find('.item.template').remove();


        $('#addImages').on('change', function () {
            var files = this.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
                    alert('Фотография должна быть в формате jpg, png или gif');
                    continue;
                }

                if (file.size > maxFileSize) {
                    alert('Размер фотографии не должен превышать 2 Мб');
                    continue;
                }

                preview(files[i]);
            }

            this.value = '';
        });

        // Создание превью
        function preview(file) {
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var img = document.createElement('img');

                var itemPreview = itemPreviewTemplate.clone();

                itemPreview.find('.img-wrap img').attr('src', event.target.result);
                itemPreview.data('id', file.name);

                imagesList.append(itemPreview);

                queue[file.name] = file;

            });
            reader.readAsDataURL(file);
        }

        // Удаление фотографий
        // imagesList.on('click', '.delete-link', function () {
        //     var item = $(this).closest('.item'),
        //         id = item.data('id');

        //     delete queue[id];

        //     item.remove();
        // });
    }



    $(function () {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".modalbasket"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('is-active') // скрываем его
            }
        });
    });

    // var inputs = document.querySelectorAll('.filter-block__check input');
    // var lab;
    // for (var i = 0; i < inputs.length; i++) {
    //     inputs[i].addEventListener('change', function () {
    //         if (this.checked) {
    //             lab = this.parentNode.textContent;
    //             var li = document.createElement('li');
    //             li.innerHTML = '<div class="filter-block__res-item">' + '<span>' + lab + '</span>' + '<div class="filter-block__res-del"></div>' + '</div>';
    //             var div = document.querySelector('.filter-block__res');
    //             div.appendChild(li);
    //             $('.filter-block__clear').addClass('is-active');

    //             $('.filter-block__res-del').click(function () {
    //                 $(this).parents('li').remove();
    //                 var checkChildren = $(".filter-block__res").children();
    //                 if (checkChildren.length == 0) {
    //                     $('.filter-block__clear').removeClass('is-active');
    //                     for (var i = 0; i < inputs.length; i++) {
    //                         inputs[i].checked = false;
    //                     }
    //                 }
    //             });
    //         }
    //         removeFilter();
    //     });
    // }

    var filterBtn = document.querySelectorAll('.filter-price__btn');

    if (filterBtn) {
        for (var i = 0; i < filterBtn.length; i++) {
            filterBtn[i].addEventListener('click', function () {
                $('.filter-block__res').html('');
                var parent = this.parentNode;
                var inputs = document.querySelectorAll('.filter-block__check input');
                var lab;
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].checked) {
                        lab = inputs[i].parentNode.textContent;
                        var li = document.createElement('li');
                        li.innerHTML = '<div class="filter-block__res-item">' + '<span>' + lab + '</span>' + '<div class="filter-block__res-del"></div>' + '</div>';
                        var div = document.querySelector('.filter-block__res');
                        div.appendChild(li);
                        $('.filter-block__clear').addClass('is-active');

                        $('.filter-block__res-del').click(function () {
                            $(this).parents('li').remove();
                            var checkChildren = $(".filter-block__res").children();
                            if (checkChildren.length == 0) {
                                $('.filter-block__clear').removeClass('is-active');
                                for (var i = 0; i < inputs.length; i++) {
                                    inputs[i].checked = false;
                                }
                            }
                        });
                    }
                    removeFilter();
                }
            });
        }
    }

    function removeFilter() {
        $('.filter-block__clear').click(function () {
            $(".filter-block__res li").remove();
            $(this).removeClass('is-active');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }
        });
    }

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

        $('.fastview__close, .overlay').click(function () {
            $('.fastview').fadeOut();
            $('.overlay').fadeOut();
            $('.fastview').remove();
            $('.select-refprod select').selectric('destroy');
        });
        addfavor();

    });

    function addfavor() {
        $('.addfavor-block').click(function () {
            $(this).find('.addfavor-block__heart').toggleClass("is-active");
            $('.addfavor__txt').toggleClass('is-active');
            $(this).toggleClass('is-active');
            if ($('.addfavor__txt').hasClass('is-active')) {
                $('.addfavor__txt').html('В избранном');
            } else {
                $('.addfavor__txt').html('В избранное');
            }
        });
    }

    addfavor();

    $('.overlay').click(function () {
        $('.modal, .modal-lk, .feedbackmodal, .addcitymodal').fadeOut();
        $(this).fadeOut();
        $('body').removeClass('hidden-y');
        $('.mob-menu, .burger').removeClass('is-active');
    });

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

    $('.reviews-block__btn').click(function () {
        var plansoffset = $(".addreview").offset().top;
        $("html, body").animate({
            scrollTop: plansoffset
        }, 500);
    });

    $('.order-product__link').click(function () {
        localStorage.scrollComment = 'true';
    });

    function scrollToComment() {
        var checkDiv = document.querySelector('.addreview');
        if (checkDiv != undefined) {
            if (localStorage.scrollComment == 'true') {
                var plansoffset = $(".addreview").offset().top;
                $("html, body").animate({
                    scrollTop: plansoffset
                }, 500);
                localStorage.scrollComment = 'false';
            }
        }
    }

    scrollToComment();

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
        $('.modal-lk, .modal, .feedbackmodal, .addcitymodal').fadeOut();
        $('.overlay').fadeOut();
        $('.modalbasket').removeClass('is-active');
        $('body').removeClass('hidden-y');
    });

    $('.basketheader').hover(function () {
        $('.modalbasket').addClass('is-active');
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

    $('.addcitymodal__inp').on('input', function () {
        $('.addcitymodal__hidden').fadeIn();
        $(this).focusout(function () {
            $('.addcitymodal__hidden').fadeOut();
        });
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
                nextEl: '.tab-next',
                prevEl: '.tab-prev',
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
                374: {
                    slidesPerView: 1.6,
                    spaceBetween: 6,
                },
                599: {
                    slidesPerView: 2,
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

    $('.menu-laptop__list span').click(function () {
        $('.menu-laptop__list li').removeClass('is-active');
        $(this).parent().addClass('is-active');
        $('.dropdownmenu_laptop').css('display', 'none');
        $(this).parent().find('.dropdownmenu_laptop').fadeIn();
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
        $('.overlay').fadeToggle();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 250) {
            $('.sticky-panel').addClass('is-active');
        }
        else {
            $('.sticky-panel').removeClass('is-active');
        }

        if ($(this).scrollTop() >= 43) {
            $('.header__laptop').addClass('sticky');
            $('.menu-laptop').addClass('sticky');
            $('.header').addClass('fixheight');
        } else {
            $('.header__laptop').removeClass('sticky');
            $('.menu-laptop').removeClass('sticky');
            $('.header').removeClass('fixheight');
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

    $('.delivery-list, .modal-pickup, .modalbasket__columns').mCustomScrollbar({
        axis: 'y',              // вертикальный скролл 
        theme: 'dark',  // тема 
        scrollInertia: '130',   // продолжительность прокрутки, значение в миллисекундах 
        // setHeight: 360,         // высота блока (переписывает CSS) 
        // mouseWheel: {
        //     deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
        // }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.userphoto img').attr('src', e.target.result);
                $('.userphoto').addClass('is-active');
                $('.add-profilephoto__txt').addClass('hide');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#addphoto").change(function () {
        readURL(this);
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
        if (screenWidth > 1279) {
            previewShow();
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
                    el: '.swiper-pagination-block',
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
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
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
            // 1899: {
            //     slidesPerView: 3.2,
            //     spaceBetween: 10,
            // }
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

    $('.modalauth__tablink button').click(function () {
        $('.modalauth__tablink button').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.modalauth__tab').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.modalauth__tablink button:first-child').click();

    $('.delivmethod__about-shipping').click(function () {
        $('.modal-lk_check').fadeIn();
        $('.overlay').fadeIn();
        $('body').addClass('hidden-y');
    });

    $('.delivery-type').click(function () {
        $('.delivery-type').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.delivery-method').click(function () {
        $('.delivery-method').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.passbtn').click(function () {
        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
            $(this).parent().find('input').attr('type', 'text');
        } else {
            $(this).parent().find('input').attr('type', 'password');
        }
    });

    $('.switchinp').click(function () {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('.formlogin__tab-email').css('display', 'none');
            $('.formlogin__tab-phone').fadeIn();
        } else {
            $('.formlogin__tab-phone').css('display', 'none');
            $('.formlogin__tab-email').fadeIn();
        }
    });

    $('.login a, .login-icon').click(function (e) {
        e.preventDefault();
        $('#modalauth').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.forgotpass').click(function () {
        $('.modal').removeAttr('style');
        $('.modalpassrestore').fadeIn();
    });

    $('.phone-list__btn, .recallbtn, .buy-one-click').click(function (e) {
        e.preventDefault();
        $('.feedbackmodal').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.changecity-btn, .delivery__city, .delivmethod__addcity, .selectcity, .mob-menu__mark').click(function () {
        $('.addcitymodal').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.sctolltop-btn').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
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

        //=======================================================
        var checkDiv = document.querySelector('#delivMap');
        if (checkDiv) {
            var center4 = [55.59113656911934, 37.88662649999996];
            var myMap4 = new ymaps.Map('delivMap', {
                center: center4,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap4.behaviors.disable('scrollZoom');

            var myPlacemark4 = new ymaps.Placemark(center4, {
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

            myMap4.geoObjects.add(myPlacemark4);
        }
    }

    // Тестовый вызов модалок !!!!!!!!!!!!!!!!!!!!!!!

    // $(".test1").click(function () {
    //     $('.modal-lk_addadress').fadeIn();
    // });

    // $(".test2").click(function () {
    //     $('.modal-lk_check').fadeIn();
    // });


});
