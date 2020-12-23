$(document).ready(function () {
    $('.showmenu').click(function () {
        $(this).toggleClass('is-active')
        $('.dropdownmenu').fadeToggle()
    })

    $('.selectcustom select').selectric()

    var carsObj = {
        Audi: {
            model: ['A3', 'A4', 'A6']
        },
        Mersedes: {
            model: ['GLS', 'GLK', 'ML']
        }
    }

    function generateOptions(context) {
        var selectMark = $(context).find(":selected").val();
        $(".selectModel select").html('');
        var arrModels = carsObj[selectMark].model;
        for (var i = 0; i < arrModels.length; i++) {
            $(".selectModel select").append("<option value=" + arrModels[i] + ">" + arrModels[i] + "</option>");
        }
        $('.selectcustom select').selectric('refresh');
    }

    generateOptions('.selectCar select')

    $('.selectCar select').on('change', function () {
        generateOptions(this)
    });

    var screenWidth = $(window).width();

    if (screenWidth < 700) {
        $('.tabbuttons li').click(function () {
            var tab = $(this).attr('data-tab');
            $('.tabcontent__item').not(tab).css({ 'display': 'none' });
            $('.tabcontent').fadeIn()
            if (tab == '#tab2') {
                $('.tabcontent').addClass('wheat')
            }
            if (tab == '#tab3') {
                $('.tabcontent').addClass('green')
            }
            $(tab).fadeIn(400);
            // Добавить это --
            $('.selectCar select').prop('selectedIndex', 0).selectric('refresh');
            generateOptions('.selectCar select')
            // ------------------ *
        });

        $('.closetab').click(function () {
            $('.tabcontent').removeClass('green').removeClass('wheat')
            $('.tabcontent__item').fadeOut()
            $('.tabcontent').fadeOut()
        })
    } else {
        $('.tabbuttons li').click(function () {
            $('.tabbuttons li').removeClass('is-active');
            $(this).addClass('is-active');
            var tab = $(this).attr('data-tab');
            $('.tabcontent__item').not(tab).css({ 'display': 'none' });
            $(tab).fadeIn(400);
            // Добавить это --
            $('.selectCar select').prop('selectedIndex', 0).selectric('refresh');
            generateOptions('.selectCar select')
            // ------------------ *
        });
        $('.tabbuttons li:first').click();
    }

    var markSlider = new Swiper('.mark-slider', {
        slidesPerView: 5,
        spaceBetween: 24,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.mark-slider__next',
            prevEl: '.mark-slider__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            499: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 1279 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.team-slider', {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: '.team-slider__next',
                    prevEl: '.team-slider__prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    1599: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        } else if (screenWidth < 1280 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    ymaps.ready(init);

    function init() {
        var center = [55.59113656911934, 37.88662649999996];
        var myMap = new ymaps.Map('map', {
            center: center,
            controls: [],
            zoom: 7
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
    }

});

