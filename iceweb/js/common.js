$(document).ready(function() {

    //define store some initial variables
    var halfWindowH = $(window).height() * 0.5,
        halfWindowW = $(window).width() * 0.5,
        //define a max rotation value (X and Y axises)
        maxRotationY = 5,
        maxRotationX = 3,
        aspectRatio;

    //detect if hero <img> has been loaded and evaluate its aspect-ratio
    $('.cd-floating-background').find('img').eq(0).load(function() {
        aspectRatio = $(this).width() / $(this).height();
        if ($('html').hasClass('preserve-3d')) initBackground();
    }).each(function() {
        //check if image was previously load - if yes, trigger load event
        if (this.complete) $(this).load();
    });

    //detect mouse movement
    $('.cd-background-wrapper').each(function() {
        $(this).on('mousemove', function(event) {
            var wrapperOffsetTop = $(this).offset().top;
            if ($('html').hasClass('preserve-3d')) {
                window.requestAnimationFrame(function() {
                    moveBackground(event, wrapperOffsetTop);
                });
            }
        });
    });

    //on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
    $(window).on('resize', function() {
        if ($('html').hasClass('preserve-3d')) {
            window.requestAnimationFrame(function() {
                halfWindowH = $(window).height() * 0.5,
                    halfWindowW = $(window).width() * 0.5;
                initBackground();
            });
        } else {
            $('.cd-background-wrapper').attr('style', '');
            $('.cd-floating-background').attr('style', '').removeClass('is-absolute');
        }
    });

    function initBackground() {
        var wrapperHeight = Math.ceil(halfWindowW * 2 / aspectRatio),
            proportions = (maxRotationY > maxRotationX) ? 1.1 / (Math.sin(Math.PI / 2 - maxRotationY * Math.PI / 180)) : 1.1 / (Math.sin(Math.PI / 2 - maxRotationX * Math.PI / 180)),
            newImageWidth = Math.ceil(halfWindowW * 2 * proportions),
            newImageHeight = Math.ceil(newImageWidth / aspectRatio),
            newLeft = halfWindowW - newImageWidth / 2,
            newTop = (wrapperHeight - newImageHeight) / 2;

        //set an height for the .cd-background-wrapper
        $('.cd-background-wrapper').css({
            'height': wrapperHeight,
        });
        //set dimentions and position of the .cd-background-wrapper
        $('.cd-floating-background').addClass('is-absolute').css({
            'left': newLeft,
            'top': newTop,
            'width': newImageWidth,
        });
    }

    function moveBackground(event, topOffset) {
        var rotateY = ((-event.pageX + halfWindowW) / halfWindowW) * maxRotationY,
            yPosition = event.pageY - topOffset,
            rotateX = ((yPosition - halfWindowH) / halfWindowH) * maxRotationX;

        if (rotateY > maxRotationY) rotateY = maxRotationY;
        if (rotateY < -maxRotationY) rotateY = -maxRotationY;
        if (rotateX > maxRotationX) rotateX = maxRotationX;
        if (rotateX < -maxRotationX) rotateX = -maxRotationX;

        $('.cd-floating-background').css({
            '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
            '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
            '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
            '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
            'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
        });
    }


    $(window).on('load', function() {
        $preloader = $('#cube-loader'),
            $loader = $preloader.find('.caption');
        $loader.fadeOut(2000);
        $preloader.delay(350).fadeOut(3000);
    });

    function modalThanksHide() {
        // $('.home-form').removeClass('active');
        $('.recall-btn').html('Заказать звонок');
        $('.recall-btn').removeClass('active');

        $('.home-form').fadeOut();
    }

    function modalThanksHide2() {
        $('.home-form_thanks').css('display', 'none');
    }

    $('.recall-btn').click(function() {
        // $('.home-form').addClass('active');
        $('.home-form').fadeIn('slow');
        $(this).html('Заполните поля');
        $(this).addClass('active');
    });
    $('.home-form_btn').click(function() {
        $('.home-form_thanks').fadeIn();
        setTimeout(modalThanksHide, 2000);
        setTimeout(modalThanksHide2, 3000);
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".home-form").length)
            return;
        if ($(event.target).closest(".recall-btn").length)
            return;
        if ($(event.target).closest(".hiddenMenu ").length)
            return;
        if ($(event.target).closest(".burger ").length)
            return;

        $('.hiddenMenu').removeClass('active');
        $('.overlay-blur').fadeOut();
        $('.blur-wrap').removeClass('active');
        $('.burger').removeClass('is-active');

        modalThanksHide();
        setTimeout(modalThanksHide2, 3000);
        event.stopPropagation();
    });

    $('.main-nav a').mouseover(function() {
        $('.main-logo img').addClass('active');
    });
    $('.main-nav a').mouseout(function() {
        $('.main-logo img').removeClass('active');
    });

    $(".burger").click(function() {
        $(this).toggleClass("is-active");
        $(".hiddenMenu").toggleClass('active');
        var check = $(this).hasClass("is-active");
        if (check) {
            $('.overlay-blur').fadeIn();
            $('.blur-wrap').addClass('active');
        } else {
            $('.overlay-blur').fadeOut();
            $('.blur-wrap').removeClass('active');
        }
    });

    function burgerFade() {
        $(".burger").fadeIn();
    }

    var overlay_navigation = $('.overlay-navigation');
    $('.open-overlay').click(function() {
        setTimeout(burgerFade, 1000);
        overlay_navigation.toggleClass('overlay-active');
        if (overlay_navigation.hasClass('overlay-active')) {
            overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
            overlay_navigation.velocity('transition.slideLeftIn', {
                duration: 300,
                delay: 0,
                begin: function() {
                    $('.contacts ul li').velocity('transition.perspectiveLeftIn', {
                        stagger: 150,
                        delay: 0,

                        complete: function() {
                            $('#contIcon-1').velocity({
                                opacity: [1, 0],
                            }, {
                                delay: 100,
                                duration: 540
                            });
                            $('#contIcon-2').velocity({
                                opacity: [1, 0],
                            }, {
                                delay: 250,
                                duration: 540
                            });
                            $('#contIcon-3').velocity({
                                opacity: [1, 0],
                            }, {
                                delay: 350,
                                duration: 540
                            });
                            $('#contIcon-4').velocity({
                                opacity: [1, 0],
                            }, {
                                delay: 450,
                                duration: 540
                            });
                            $('#contIcon-5').velocity({
                                opacity: [1, 0],
                            }, {
                                delay: 550,
                                duration: 540
                            });
                        }

                    });

                }
            })

        } else {
            hiddenContacts();
        }
    });
    $('.contacts-logo').click(function() {
        overlay_navigation.removeClass('overlay-active');
        hiddenContacts();
    });

    function hiddenContacts() {
        $(".burger").fadeOut();
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        $('.contacts ul li').velocity('transition.perspectiveRightOut', {
            stagger: 150,
            delay: 0,
            complete: function() {
                overlay_navigation.velocity('transition.fadeOut', {
                    delay: 0,
                    duration: 300
                });
                $('#contIcon-1').velocity({
                    opacity: [0, 0],
                }, {
                    delay: 100,
                    duration: 540
                });
                $('#contIcon-2').velocity({
                    opacity: [0, 0],
                }, {
                    delay: 250,
                    duration: 540
                });
                $('#contIcon-3').velocity({
                    opacity: [0, 0],
                }, {
                    delay: 350,
                    duration: 540
                });
                $('#contIcon-4').velocity({
                    opacity: [0, 0],
                }, {
                    delay: 450,
                    duration: 540
                });
                $('#contIcon-5').velocity({
                    opacity: [0, 0],
                }, {
                    delay: 550,
                    duration: 540
                });
            }
        });
    }
    $('.contacts li').mouseover(function() {
        $(this).addClass('active');
        $(this).find('.map-btn_wrap').stop().fadeIn();
        $(this).find('.contacts-icon img').stop().fadeOut();
    });
    $('.contacts li').mouseout(function() {
        $(this).removeClass('active');
        $(this).find('.map-btn_wrap').stop().fadeOut();
        $(this).find('.contacts-icon img').stop().fadeIn();
    });
    $('.phone-mask').mask('+7(999) 999-9999');

    // var checkMapId = $('div').is('.mapTabs');
    // if (checkMapId) {

    ymaps.ready(init);

    function init() {
        // Екатеринбург ===================================================
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
            balloonContent: 'улица Ткачей, 23',
            hintContent: 'улица Ткачей, 23'
        }, {
            // Опции.
            iconLayout: 'default#image'
            // iconImageHref: 'img/baloon.png',
            // iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);

        // офис Москва ==================================================
        var center2 = [55.747723, 37.716297];
        var myMap2 = new ymaps.Map('office-moscow', {
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
            balloonContent: '2й Кабельный проезд, д. 1',
            hintContent: '2й Кабельный проезд, д. 1'
        }, {
            // Опции.
            iconLayout: 'default#image'
            // iconImageHref: 'img/baloon.png',
            // iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap2.geoObjects.add(myPlacemark2);

        // Офис Новосибирск =====================================================
        var center3 = [55.021571, 82.917250];
        var myMap3 = new ymaps.Map('office-novosibirsk', {
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
            balloonContent: 'Советская улица, 5',
            hintContent: 'Советская улица, 5'
        }, {
            // Опции.
            iconLayout: 'default#image'
            // iconImageHref: 'img/baloon.png',
            // iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap3.geoObjects.add(myPlacemark3);

        // Офис Питер =====================================================
        var center4 = [59.941993, 30.354370];
        var myMap4 = new ymaps.Map('office-piter', {
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
            balloonContent: 'Артиллерийская улица, 12',
            hintContent: 'Артиллерийская улица, 12'
        }, {
            // Опции.
            iconLayout: 'default#image'
            // iconImageHref: 'img/baloon.png',
            // iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap4.geoObjects.add(myPlacemark4);

        // Офис Челябинск =====================================================
        var center5 = [55.234974, 61.369451];
        var myMap5 = new ymaps.Map('office-chelybinsk', {
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
            balloonContent: 'Свердловский тракт, 1ж, Парк офисов «СДМ», оф. 415',
            hintContent: 'Свердловский тракт, 1ж, Парк офисов «СДМ», оф. 415'
        }, {
            // Опции.
            iconLayout: 'default#image'
            // iconImageHref: 'img/baloon.png',
            // iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap5.geoObjects.add(myPlacemark5);

    }
    // }

    function mapOverlay() {
        $('.overlay').fadeIn();
    }

    $('#ekaterinburg-btn').click(function() {
        showModalMap('#office-ekaterinburg');
    });
    $('#moscow-btn').click(function() {
        showModalMap('#office-moscow');
    });
    $('#novosibirsk-btn').click(function() {
        showModalMap('#office-novosibirsk');
    });
    $('#piter-btn').click(function() {
        showModalMap('#office-piter');
    });
    $('#chelyabinsk-btn').click(function() {
        showModalMap('#office-chelybinsk');
    });
    $('.map-modal_close').click(function() {
        $('.map-modal').fadeOut();
        $('.overlay').fadeOut();
    });

    function showModalMap(id) {
        $(id).fadeIn();
        $('.overlay').fadeIn();
    }


});
/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective() {
    var element = document.createElement('p'),
        html = document.getElementsByTagName('html')[0],
        body = document.getElementsByTagName('body')[0],
        propertys = {
            'webkitTransformStyle': '-webkit-transform-style',
            'MozTransformStyle': '-moz-transform-style',
            'msTransformStyle': '-ms-transform-style',
            'transformStyle': 'transform-style'
        };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
        st.getPropertyValue("-moz-transform-style") ||
        st.getPropertyValue("-ms-transform-style") ||
        st.getPropertyValue("transform-style");

    if (transform !== 'preserve-3d') {
        html.className += ' no-preserve-3d';
    } else {
        html.className += ' preserve-3d';
    }
    document.body.removeChild(element);

})();
