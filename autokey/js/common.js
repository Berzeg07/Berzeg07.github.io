$(document).ready(function() {

    $('.tooltip-icon').hover(function() {
        $(this).next().toggleClass('active');
    });

    $('.qa-block__btn').click(function() {
        var $this = $(this);
        var block = $this.parents('li').find('.qa-block__hidden');

        if (!$this.hasClass("active")) {
            $(".qa-block__hidden").slideUp();
            $(".qa-block__btn").removeClass("active");
        }

        $this.toggleClass("active");
        block.slideToggle();
    });

    // Объект с данными моделей и URL *
    var carsObj = {
        Audi: {
            model: ['A4', 'Q5'],
            modelUrl: {
                A4: 'audi/a4/',
                Q5: 'audi/q5/'
            }
        },
        BMW: {
            model: ['X5', 'X6'],
            modelUrl: {
                X5: 'bmv/x5/',
                X6: 'bmv/x6/'
            }
        }
    };

    $('#selectMark').on('change', function() {
        var selectMark = $(this).find(":selected").val();
        if (selectMark == 'Заголовок') {
            $("#selectModel").html('');
            $("#selectModel").append('<option value="Заголовок">Выберите модель</option>');
            return;
        }
        $("#selectModel").html('');
        $("#selectModel").append('<option value="Заголовок">Выберите модель</option>');
        var arrModels = carsObj[selectMark].model;
        for (var i = 0; i < arrModels.length; i++) {
            $("#selectModel").append("<option value=" + arrModels[i] + ">" + arrModels[i] + "</option>");
        }
    });

    $('#urlBtn').click(function() {
        var pageUrl = $('#selectBroken :selected').val();
        var carMark = $('#selectMark :selected').val();
        var carModel = $('#selectModel :selected').val();
        $('#selectBroken, #selectMark, #selectModel').parent().removeClass('error');
        if (pageUrl == 'Заголовок') {
            $('#selectBroken').parent().addClass('error');
            return;
        }
        if (carMark == 'Заголовок') {
            $('#selectMark').parent().addClass('error');
            return;
        }
        if (carModel == 'Заголовок') {
            $('#selectModel').parent().addClass('error');
            return;
        } else {
            var urlGet = pageUrl + carsObj[carMark].modelUrl[carModel];
            document.location.href = "http://" + urlGet;
        }

    });

    // fixed menu *
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 45) {
                $('.header-mobile__menu').addClass('stickytop');
                $('.header-mobile__hidden').addClass('sticky');
            } else {
                $('.header-mobile__menu').removeClass('stickytop');
                $('.header-mobile__hidden').removeClass('sticky');
            }
        });
    });

    // mobile menu *
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.header-mobile__hidden').fadeToggle();
        $('body').toggleClass('hidden');
    });

    // custom select *
    $('.select-custom select').select2();

    // car model slider *
    var modelSlider = $(".model-slider");
    modelSlider.owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            375: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1280: {
                items: 7
            },
            1400: {
                items: 9
            }
        }
    });

    var docSlider = $(".doc-slider");
    docSlider.owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 100,
        center: false,
        loop: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    var equipSlider = $(".equip-slider");
    equipSlider.owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 20,
        center: false,
        loop: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // photo slider *
    var photoSlider = $(".photo-slider");
    photoSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 10,
        center: true,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
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
            1280: {
                items: 5,
                center: false,

            }
        }
    });

    // map Yandex *
    ymaps.ready(init);

    function init() {
        var center = [55.753220, 37.715471];
        var myMap = new ymaps.Map('map', {
            controls: [],
            center: center,
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });
        var myPlacemark = new ymaps.Placemark(center, {
            balloonContent: 'Авиамоторная, 12',
            hintContent: 'Авиамоторная, 12'
        }, {
            iconLayout: 'default#image'
        });
        myMap.geoObjects.add(myPlacemark);

        $('.arrival-btn').click(function() {
            var checkVal = $('.arrival-calc__total').html();
            if (checkVal == 'Жмите кнопку для расчета пути') {
                var geolocation = ymaps.geolocation;
                geolocation.get({
                    provider: 'yandex',
                    mapStateAutoApply: true
                }).then(function(result) {
                    var geoUser = result.geoObjects.position;
                    var multiRoute = new ymaps.multiRouter.MultiRoute({
                        referencePoints: [
                            [55.753220, 37.715471],
                            geoUser
                        ],
                        params: {
                            routingMode: "auto",
                            avoidTrafficJams: true
                        }
                    }, {
                        boundsAutoApply: true,
                    });
                    myMap.geoObjects.add(multiRoute);
                    multiRoute.model.events.add('requestsuccess', function() {
                        var activeRoute = multiRoute.getActiveRoute();
                        $('.arrival-calc__total').html("Мастер будет у вас через: " + activeRoute.properties.get("duration").text);
                        if (activeRoute.properties.get("blocked")) {
                            console.log("На маршруте имеются участки с перекрытыми дорогами.");
                        }
                    });
                    myMap.geoObjects.add(multiRoute);
                });
            }
            return;
        });

        if (window.matchMedia('(min-width: 768px)').matches) {
            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small"
                }
            });
            myMap.controls.add(zoomControl, {
                position: {
                    right: '40px',
                    top: '180px'
                }
            });
        }

        myMap.behaviors.disable('scrollZoom');
    }

});
