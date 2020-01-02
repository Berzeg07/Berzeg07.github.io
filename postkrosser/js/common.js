$(document).ready(function() {
    // $('.tooltip-btn').hover(function() {
    //     $('.tooltip-header').toggleClass('block-show');
    // });

    // function initMap() {
    //     var element = document.getElementById('map');
    //     var options = {
    //         zoom: 17,
    //         center: {
    //             lat: 55.687034,
    //             lng: 37.5274293
    //         }
    //     };
    //     var myMap = new google.maps.Map(element, options);
    //     var marker = new google.maps.Marker({
    //         position: {
    //             lat: 55.687034,
    //             lng: 37.5274293
    //         },
    //         map: myMap,
    //         icon: 'img/html-logo.png'
    //     });
    //
    //     var InfoWindow = new google.maps.InfoWindow({
    //         content: '<span>Строителей 15</span>'
    //     });
    //
    //     marker.addListener('click', function() {
    //         InfoWindow.open(myMap, marker);
    //     });
    // }

    new WOW().init();

    $(function() {
        $('.burger').click(function() {
            $('.main-nav ul').slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.main-nav ul').removeAttr('style');
            }
        });
    });

    $('.header-login_img').hover(function() {
        $('.header-login_nickname a:first-child').toggleClass('active');
    });

    $('.main-slider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 5,
        nav: true,
        mouseDrag: true,
        autoplay: true,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });


    $('.icon-slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 8
            }
        }
    });

    $('.ether-slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 45,
        nav: true,
        autoplay: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            1270: {
                items: 2
            }
        }
    });

    $('.mayor-kluv_slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 2000
    });

    $('.main-slider_item').hover(function() {
        $(this).find('.main-slider_hover').stop().slideToggle();
    });

    $('.mayor-kluv .tooltip-btn').mouseenter(function() {
        $(this).removeClass('pulsing');
    });

    $('.mayor-kluv .tooltip-btn').mouseleave(function() {
        $(this).addClass('pulsing');
    });


    $('.postcard-info_tabs a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab-table').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.postcard-info_tabs a:first').click();

    $('.choose-social_inst').click(function() {
        var divInner = $('.cabinet-middle_social__img');
        $(divInner).html('');
        $(divInner).html('<img src="img/inst-big.png">');
    });

    $('.choose-social_vk').click(function() {
        var divInner = $('.cabinet-middle_social__img');
        $(divInner).html('');
        $(divInner).html('<img src="img/vk-big.png">');
    });

    $('.delete-table').click(function() {
        $(this).parents('.postcard-table_main').remove();
    });

    var itemprice = $('.product-main_price span').text(),
        priceInner = $('.product-main_price span'),
        itempOldPrice = $('.product-old_price strike').text(),
        itempOldPriceInner = $('.product-old_price strike');
    $(".product-counter  .switch-button").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);

        var quantity = $('#quantity').val(),
            total = itemprice * quantity,
            totalOld = itempOldPrice * quantity;
        $(priceInner).html(total);
        $(itempOldPriceInner).html(totalOld);

    });

    if ($("div").is(".basket-total_box")) {
        totalBasketPrice();
    }

    function totalBasketPrice() {
        var elements = document.getElementsByClassName('basket-price'),
            contents = [],
            total = 0;
        for (var i = 0; i < elements.length; i++) {
            contents[i] = +elements[i].innerText;
            total = total + contents[i];
        }
        $('.basket-total_inner').html(total);
    }

    $(".product-cat_counter  .switch-button").on("click", function() {
        var $button = $(this),
            productCatPrice = $button.parents('.product-cat_count').find('.current-price').val(),
            productCatPriceInner = $button.parents('.product-cat_count').find('.product-cat_price_main span'),
            oldValue = $button.parent().find("input").val(),

            productOldPrice = $button.parents('.product-cat_count').find('.old-price').val(),
            productOldPriceInner = $button.parents('.product-cat_count').find('.product-cat_price_old strike');

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);

        var quantity = $button.parent().find('.quantity').val(),
            total = productCatPrice * quantity,
            totalOld = productOldPrice * quantity;

        $(productCatPriceInner).html(total + ' ');
        $(productOldPriceInner).html(totalOld + ' ');


        if ($("div").is(".basket-total_box")) {
            totalBasketPrice();
        }
    });

    $('.delete-basket_product').click(function() {
        $(this).parents('li').remove();
        totalBasketPrice();
    });




    if ($("div").is("#map")) {



        ymaps.ready(init);

        function init() {
            var center = [55.59113656911934, 37.88662649999996];
            var myMap = new ymaps.Map('map', {
                center: center,
                controls: ['zoomControl'],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('multiTouch');
            myMap.behaviors.disable('drag');

            // behavior.MultiTouch([2]);

            var myPlacemark = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/map-ic.png',
                iconImageSize: [35, 49]
                // preset: 'twirl#violetIcon'
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

    $('.profile-social_link').hover(function() {
        $('.profile-social span').toggleClass('active');
    });

    $('.profile-name').hover(function() {
        $('.profile-name_hover').toggleClass('hide');
        $('.profile-name_inner').toggleClass('active');
    });

    $('.profile-article_show').click(function() {
        if ($('.profile-article_inner').hasClass('active')) {
            $('.profile-article_show').html('Развернуть');
        } else {
            $('.profile-article_show').html('Свернуть');
        }
        $('.profile-article_inner').toggleClass('active');
    });

    $('.order-toggle').click(function() {
        if ($('.order-shipping_toggle').hasClass('active')) {
            $(this).html('Информация о стоимости');
        } else {
            $(this).html('Свернуть информацию о стоимости');
        }
        $('.order-shipping_toggle').toggleClass('active');
        $('.order-shipping_toggle').slideToggle();

    });

    $('#sendBtnNo').click(function() {
        $(this).parents('.sendbox').addClass('hide-block');
        $('.editadress').slideDown();

        // $('.editadress').addClass('show-block');

    });

    $('#sendBtnYes').click(function() {
        $(this).parents('.sendbox').addClass('hide-block');
        $('.readytosend').slideDown();

        // $('.readytosend').addClass('show-block');
    });

    $('#aprooveAdress').click(function() {
        // $(this).parents('.editadress').removeClass('show-block');
        $(this).parents('.editadress').slideUp();
        $('.readytosend').slideDown();


        // $('.readytosend').addClass('show-block');
    });

    $('#sendPostcardBtn').click(function() {
        $(this).parents('.readytosend-form_item').addClass('hide-block');
        $('.readytosend-form_result').addClass('show-block');
    });

    $('.close-form_result').click(function() {
        $(this).parents('.readytosend-form_result').removeClass('show-block');

        $('.readytosend-form_item').removeClass('hide-block');
        // $(this).parents('.readytosend').removeClass('show-block');
        $(this).parents('.readytosend').slideUp();

        $('.sendbox').removeClass('hide-block');
    });

    $('#canselPostcardBtn').click(function() {
        // $(this).parents('.readytosend').removeClass('show-block');
        $(this).parents('.readytosend').slideUp();

        $('.sendbox').removeClass('hide-block');
    });

    $(".postcard-scroll").click(function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href");
        currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    });

    $(".purchaces-link").click(function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href");
        currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    });

    $(".basket-more").click(function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href");
        currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    });

    $('.toggle-article').click(function() {
        $('.foruminner-article').slideToggle();
    });

    // custom select ===========================================================
    $('.news-sort_select').selectmenu();

    autosize(document.querySelectorAll('textarea'));

    $('.foruminner-formcomment_textarea').focus(function() {
        $(this).parents('.foruminner-formcomment').addClass('active');
    });
    $('.foruminner-formcomment_textarea').blur(function() {
        $(this).parents('.foruminner-formcomment').removeClass('active');
    });

    $(function() {
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src');
            var i_link = $(this).attr('linkpostcard');
            var i_alt = $(this).attr('alt');
            $('body').append('<div id="overlay"></div><div id="magnify"><div class="magnify-inner"><img src="' + i_path + '"></div><ul class="magnify-article"><li><a href="' + i_link + '" class="i-link">ссылка на открытку</a></li><li><p class="i-alt">"' + i_alt + '"</p></li></ul><div id="close-popup"></div>');
            $('.overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, .overlay', function(event) {
            event.preventDefault();

            $('.overlay, #magnify').fadeOut('fast', function() {
                $('#close-popup, #magnify').remove();
            });
        });
    });

    $('.order-table_delete').click(function() {
        $(this).parents('tr').remove();
    });

    $('.quote-btn').click(function() {
         var $this = $(this)
         $('.quote-box').html('');
         $('.nick-author').html('');
		 var nickLink = $(this).parents('.foruminner-bottom_inner').find('.foruminner-nick').html();
		 
        var quoteText = $(this).parents('.foruminner-bottom_comment').find('.foruminner-bottom_text__inner p').html();
		var linkAttr = $("nickLink").attr("href");
		var linkTotal = `<a href="${linkAttr}">${nickLinkHtml}</a>`;
         $('.quote-box').html(linkTotal + quoteText);
         var currentBlockoffset = $('#form-comment').offset().top;
         $("html, body").animate({
             scrollTop: currentBlockoffset
         }, 500);
    });
	
    //
    // $('.add-comment').click(function() {
    //     var $this = $(this)
    //     $('.quote-box').html('');
    //     $('.nick-author').html('');
    //     var quoteText = $(this).parents('.foruminner-bottom_inner').find('.foruminner-nick').html();
    //     $('.nick-author').html(quoteText);
    //     var currentBlockoffset = $('#form-comment').offset().top;
    //     $("html, body").animate({
    //         scrollTop: currentBlockoffset
    //     }, 500);
    // });

    // $('.sortthemes_btn').click(function() {
    //     var text = $(this).text();
    //     $('.sortthemes_btn').removeClass('active');
    //     $(this).addClass('active');
    // });

    $('.forum-article_likeicon, .comment-btn, .add-comment, .quote-btn, .sortthemes_btn, .sendpostcard-btn, .ether-adress_btn, .basket-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.tooltip-article').addClass('active');
        $(this).mouseleave(function() {
            $(this).parent().find('.tooltip-article').removeClass('active');
        });
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 1) {
                $('.container-nav_sticky').addClass('stickytop-mobile');
            } else {
                $('.container-nav_sticky').removeClass('stickytop-mobile');
            }

            if ($(this).scrollTop() >= 130) {
                $('.header-sticky_top, .header-sticky_top__bg, .logo-sticky').addClass('active');
                $('.header-top').addClass('hidden');
                $('.main-nav').addClass('fixed');
            } else {
                $('.header-sticky_top, .header-sticky_top__bg, .logo-sticky').removeClass('active');
                $('.header-top').removeClass('hidden');
                $('.main-nav').removeClass('fixed');
            }
        });
    });

    $(".dws-progress-bar").circularProgress({
        color: "#CAE2ED",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);

});

$(window).on('load', function() {
    var $preloader = $('#preloader');
    $preloader.delay(2850).fadeOut('slow');
});
