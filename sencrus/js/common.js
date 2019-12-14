$(document).ready(function() {
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(window).scroll(function(e) {
            scroll = $(this).scrollTop();
            if (scroll > 100) {
                $('.header-main_link').fadeOut();
            } else {
                $('.header-main_link').fadeIn();
            }
        }); 
    }


    $('.aboutCompany-article').jScrollPane();

    $('.form-btn').click(function() {
        $(this).css('display', 'none');
        $('.form-thanks').css('display', 'flex');
        setTimeout(fadeFormThanks, 3000);
    });

    function fadeFormThanks() {
        $('.form-btn').css('display', 'block');
        $('.form-thanks').css('display', 'none');
    }

    var checkCompLine = $('div').is('.aboutCompany');
    if (checkCompLine) {
        $('.footer-item_right').addClass('activeLine');
    }
    $('.equipment').hover(function() {
        $('.activeLine').toggleClass('activeLeft');
    });


    //Detect Closest Edge
    function closestEdge(x, y, w, h) {
        var topEdgeDist = distMetric(x, y, w / 2, 0);
        var bottomEdgeDist = distMetric(x, y, w / 2, h);
        var leftEdgeDist = distMetric(x, y, 0, h / 2);
        var rightEdgeDist = distMetric(x, y, w, h / 2);
        var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
    }

    //Distance Formula
    function distMetric(x, y, x2, y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }


    var boxes = document.querySelectorAll(".boxes");

    for (var i = 0; i < boxes.length; i++) {

        boxes[i].onmouseenter = function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);

            var overlay = this.children[1];
            var image = this.children[0];

            switch (edge) {
                case "left":
                    //tween overlay from the left
                    overlay.style.top = "0%";
                    overlay.style.left = "-100%";
                    TweenMax.to(overlay, .5, {
                        left: '0%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.2
                    });
                    break;
                case "right":
                    overlay.style.top = "0%";
                    overlay.style.left = "100%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, {
                        left: '0%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.2
                    });
                    break;
                case "top":
                    overlay.style.top = "-100%";
                    overlay.style.left = "0%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, {
                        top: '0%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.2
                    });
                    break;
                case "bottom":
                    overlay.style.top = "100%";
                    overlay.style.left = "0%";
                    //tween overlay from the right
                    TweenMax.to(overlay, .5, {
                        top: '0%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.2
                    });
                    break;
            }
        };


        boxes[i].onmouseleave = function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
            var overlay = this.children[1];
            var image = this.children[0];

            switch (edge) {
                case "left":
                    TweenMax.to(overlay, .5, {
                        left: '-100%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.0
                    });
                    break;
                case "right":
                    TweenMax.to(overlay, .5, {
                        left: '100%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.0
                    });
                    break;
                case "top":
                    TweenMax.to(overlay, .5, {
                        top: '-100%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.0
                    });
                    break;
                case "bottom":
                    TweenMax.to(overlay, .5, {
                        top: '100%'
                    });
                    TweenMax.to(image, .5, {
                        scale: 1.0
                    });
                    break;
            }
        };
    }

    $(window).on('load', function() {
        $preloader = $('#cube-loader'),
            $loader = $preloader.find('.caption');
        $loader.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    $('.hidden-menu_recallBtn').click(function() {
        $(this).toggleClass('active');
        var check = $(this).hasClass('active');
        if (check) {
            $(this).html('Назад к меню');
            $(this).css('color', '#04c5fd');

            $('.hidden-menu_tabNav').css('display', 'none');
            $('.hidden-menu_form').fadeIn();
        } else {
            $('.hidden-menu_form').css('display', 'none');
            $('.hidden-menu_tabNav').fadeIn();
            $(this).html('Заказать звонок');
            $(this).css('color', '#3f3d3e');

        }
    });

    $('.actionsList-item_img').hover(function() {
        $(this).toggleClass('active');
    });
    $('.pageGallery-img').hover(function() {
        $(this).toggleClass('active');
    });

    $('.actionsList-item_img').click(function() {
        $('.actionsList').css('z-index', 'unset');
        $(this).parents('.actionsList-item').find('.actionsModal').addClass('active');
        var attrBg = $(this).find('img').attr('src');
        $('.actions-bg').css({
            'background': 'url(./' + attrBg + ') no-repeat center',
            'background-size': 'cover'
        });
        $('.actions-bg').fadeIn();
    });
    $('.actionsModal-close').click(function() {
        $('.actionsList').css('z-index', '2');
        $('.actionsModal').removeClass('active');
        $('.actions-bg').fadeOut();
    });
    $('.actions-bg').click(function() {
        $(this).fadeOut();
        $('.actionsModal').removeClass('active');
    });

    $('.sortingBox-types_item').click(function() {
        $('.sortingBox-types_item').removeClass('active');
        $(this).addClass('active');
        var check = $('.sortingBox-types_stroke').hasClass('active');
        if (check) {
            $('.actionsList').addClass('active');
        } else {
            $('.actionsList').removeClass('active');
        }
    });

    $('.contactGallery .item a').hover(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $('.contactGallery-box').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.contactGallery-box').addClass('active');
        var tab = $(this).attr('href');
        $('.mapTabs-item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

    var checkMapId = $('div').is('.mapTabs');
    if (checkMapId) {

        ymaps.ready(init);

        function init() {
            // офис Екатеринбург ===================================================
            var center = [56.817035, 60.631727];
            var myMap = new ymaps.Map('office-ekaterinburg', {
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
                iconImageHref: 'img/baloon.png',
                iconImageSize: [133, 60]
                // preset: 'twirl#violetIcon'
            });

            myMap.geoObjects.add(myPlacemark);

            // Склад Екатеринбург ==================================================
            var center2 = [56.866165, 60.621289];
            var myMap2 = new ymaps.Map('sklad-ekaterinburg', {
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
                iconImageHref: 'img/baloon.png',
                iconImageSize: [133, 60]
                // preset: 'twirl#violetIcon'
            });

            myMap2.geoObjects.add(myPlacemark2);

            // Офис Красноярск =====================================================
            var center3 = [56.047902, 92.857054];
            var myMap3 = new ymaps.Map('office-krasnoyarsk', {
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
                iconImageHref: 'img/baloon.png',
                iconImageSize: [133, 60]
                // preset: 'twirl#violetIcon'
            });

            myMap3.geoObjects.add(myPlacemark3);

            // Склад Красноярск =====================================================
            var center4 = [56.047902, 92.857054];
            var myMap4 = new ymaps.Map('sklad-krasnoyarsk', {
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
                iconImageHref: 'img/baloon.png',
                iconImageSize: [133, 60]
                // preset: 'twirl#violetIcon'
            });

            myMap4.geoObjects.add(myPlacemark4);

            // Офис Хабаровск =====================================================
            var center5 = [56.817035, 60.631727];
            var myMap5 = new ymaps.Map('office-habarovsk', {
                center: center,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap5.behaviors.disable('scrollZoom');

            var myPlacemark5 = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/baloon.png',
                iconImageSize: [133, 60]
                // preset: 'twirl#violetIcon'
            });

            myMap5.geoObjects.add(myPlacemark5);

        }
    }

    var actionsSlide = $(".actionsSlide");
    actionsSlide.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 0,
        center: false, //если нужны обрезаные края
        navText: ['<div class="left"></div>', '<div class="right"></div>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    var contactGallery = $(".contactGallery");
    contactGallery.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: -1,
        center: false, //если нужны обрезаные края
        navText: ['<div class="arrow"></div>', '<div class="arrow"></div>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1270: {
                items: 5
            }
        }
    });

    var repairSlider = $("#pageGallery");
    repairSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 0,
        center: false, //если нужны обрезаные края
        navText: ['<div class="arrow"></div>', '<div class="arrow"></div>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    var equipmentSlider = $(".equipment-slider");
    equipmentSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 12,
        center: false, //если нужны обрезаные края
        navText: ['<div class="left"></div>', '<div class="right"></div>'],
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 6
            },
            992: {
                items: 7
            }
        }
    });

    $('.product-tabs_btn a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.product-tabs_item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tab a:first').click();

    $('.footer-tab_link a').click(function(e) {
        e.preventDefault();
        $(this).parents('.footer-nav').find('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.footer-tab').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.footer-tab_link_li a').addClass('active');
    }

    // $('.footer-tab_link_right a').click(function(e) {
    //     e.preventDefault();
    //     $(this).parents('.footer-nav').find('a').removeClass('active');
    //     $(this).addClass('active');
    //     var tab = $(this).attr('href');
    //     $('.footer-tab_right').not(tab).css({
    //         'display': 'none'
    //     });
    //     $(tab).fadeIn(400);
    // });


    var tabsEl = [];
    $(".product-tabs_list li").each(function() {
        tabsEl.push(this.innerHTML);
    });
    var num = 0;
    for (var i = 0; i < tabsEl.length; i++) {
        num = i;
    }
    if (num > 3) {
        $('.product-tabs_btnShow').css('display', 'block');
        $('.product-tabs_btnShow').click(function() {
            $(this).parent().find('.product-tabs_list').toggleClass('active');
            var checkClass = $('.product-tabs_list').hasClass('active');
            if (checkClass) {
                $(this).html('скрыть');
            } else {
                $(this).html('показать все характеристики');
            }
        });
    }

    $('#select').hover(function() {
        $('.selectList-dropdown').stop().slideToggle();
        var link = $('.selectList-dropdown a');
        $(link).click(function() {
            $(link).removeClass('active');
            $(this).toggleClass('active');
            var linkText = $(this).html();
            var selectText = $(this).parents('.selectList').find('#select span').html(linkText);
        });
    });


    var formInp = $('.contactRecall-inp input');
    $(formInp).focus(function() {
        $('.contactRecall-inp label').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(formInp).blur(function() {
        $('.contactRecall-inp label').removeClass('active');
    });
    var menuSearch = $('.search-menu input');
    var menuSearchHeader = $(".header-main_search__item input");
    var checkContactBox = $("div").is("#contactHeader");

    $('.search-menu').click(function() {
        $(menuSearch).focus();
    });
    $(menuSearch).focus(function() {
        $(this).parent().addClass('active');
    });
    $(menuSearch).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
    });

    $('.header-main_search__item').click(function() {
        $(menuSearchHeader).focus();
    });
    $(menuSearchHeader).focus(function() {
        $(this).parent().addClass('active');
        if (checkContactBox) {
            $("#contactHeader").css('display', 'none');
            $('.headerRight-box').css({
                'width': '100%'
            });
        }
    });
    $(menuSearchHeader).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
        if (checkContactBox) {
            setTimeout(function() {
                $("#contactHeader").fadeIn();
            }, 800);
            setTimeout(function() {
                $('.headerRight-box').css('width', 'unset');
            }, 850);
        }
    });

    var mainSearch = $('.header-main_search input');
    var checkMobBlock = $("div").is("#hidden");
    $('.header-main_search').click(function() {
        $(mainSearch).focus();
    });
    $(mainSearch).focus(function() {
        $(this).parent().addClass('active');
        if (checkMobBlock) {
            $("#hidden").css('display', 'none');
        }
    });
    $(mainSearch).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
        if (checkMobBlock) {
            setTimeout(function() {
                $("#hidden").fadeIn();
            }, 800);
        }
    });

    // Mobile menu =============================================================
    $('.burger-main').click(function() {
        $('.hidden-menu').toggleClass('nav-show');
        $('.hidden-menu').css('width', '100%');
        var checkSearchMain = $("div").is("#main-search");
        $('body').css({
            'overflow-y': "hidden",
            'padding-right': "17px"
        });
        $('.wrapper-blur').addClass('active');
        if (checkSearchMain) {
            $("#main-search").css('opacity', '0');
        }
        $('.overlay-wr').fadeIn();
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w >= 768) {
            $('.hidden-menu').removeAttr('style');
        }
    });
    $('.hidden-menu_close').click(function() {
        $('body').css({
            'overflow-y': "auto",
            'padding-right': "0"
        });
        $('.wrapper-blur').removeClass('active');
        $('.hidden-menu').removeClass('nav-show');
        var checkSearchMain = $("div").is("#main-search");
        if (checkSearchMain) {
            $("#main-search").css('opacity', '1');
        }
        $('.overlay-wr').fadeOut();
    });

    $('.sections-item').mouseenter(function() {
        $(this).addClass('active');
        $(this).find('.sections-blur').stop().fadeOut();
        $(this).find('.sections-item_over').stop().fadeOut();

        $(this).find('.sections-menu').stop().fadeIn();
        $(this).find('.sections-arrow').stop().fadeOut();
        $(this).find('.sections-item_arrow').stop().fadeOut();
    });
    $('.sections-item').mouseleave(function() {
        $(this).removeClass('active');
        $(this).find('.sections-item_over').stop().fadeIn();

        $(this).find('.sections-blur').stop().fadeIn();
        $(this).find('.sections-menu').css('display', 'none');
        $(this).find('.sections-arrow').stop().fadeIn();
        $(this).find('.sections-item_arrow').stop().fadeIn();
    });

    $('.header-main_link a').click(function(e) {
        e.preventDefault();
        scrollTo('#sections');
    });

    $('#toCatList').click(function(e) {
        e.preventDefault();
        scrollTo('.catalog-title');
    });
    $('.catalog-arrow').click(function() {
        scrollTo('.catalog-title');
    });

    function scrollTo(id) {
        var currentBlock = $(id);
        var currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    }

});
