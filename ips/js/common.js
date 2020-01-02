$(document).ready(function() {

    // Mobile menu =============================================================
    $(function() {
        $('.burger').click(function() {
            $('.dropdown-menu').slideToggle();
        });
        $('.dropdown-menu_close').click(function() {
            $('.dropdown-menu').slideUp();
        });
        $(document).click(function(event) {
            if ($(event.target).closest(".dropdown-menu").length) return;
            if ($(event.target).closest(".burger").length) return;
            $('.dropdown-menu').slideUp();;
            event.stopPropagation();
        });
    });

    // Map API =================================================================
    ymaps.ready(init);

    function init() {
        var center = [55.772973, 37.571318];
        var myMap = new ymaps.Map('mapMoscow', {
            center: center,
            controls: [],
            zoom: 16
            // controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'Пресненский Вал, 27, стр. 18',
            hintContent: 'Пресненский Вал, 27, стр. 18'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // iconImageHref: 'img/map-ic.png',
            // iconImageSize: [42, 42]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);

        var center2 = [58.008829, 56.242289];
        var myMap2 = new ymaps.Map('mapPerm', {
            center: center2,
            controls: [],
            zoom: 16
            // controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap2.behaviors.disable('scrollZoom');

        var myPlacemark2 = new ymaps.Placemark(center2, {
            balloonContent: 'Комсомольский пр., 34, офис 105',
            hintContent: 'Комсомольский пр., 34, офис 105'
        }, {
            iconLayout: 'default#image',
        });

        myMap2.geoObjects.add(myPlacemark2);
    }

    // input focus =============================================================
    $(function() {
        $(".feedback-form_inputs label input").focus(function() {
            var parent = $(this).parent("label");
            var span = $(parent).find('span');
            $(parent).addClass('border-focus');
            $(span).addClass('inp-focus');
            $(this).focusout(function(){
                $(span).removeClass('inp-focus');
                $(parent).removeClass('border-focus');
            });
        });
    });
    // // send message ============================================================
    // $(".form-reserv").submit(function () {
    //     var inpFirst = $(this).find('.inp_first');
    //     var inpSecond = $(this).find('.inp_second');
    //     var inpFirstInner = $(this).find('.inp_first input');
    //     var inpSecondInner = $(this).find('.inp_second input');
    //
    //     var emptyFirst = false;
    //     var emptySecond = false;
    //
    //     if (inpFirstInner.val() == "") {
    //         emptyFirst = true;
    //     }
    //     if(inpSecondInner.val() == ""){
    //         var emptySecond = true;
    //     }
    //     if (emptyFirst == true) {
    //         inpFirst.addClass("error-input");
    //         inpFirstInner.focus();
    //     }
    //     if (emptySecond == true) {
    //         inpSecond.addClass("error-input");
    //         inpSecondInner.focus();
    //     }else{
    //         var form_data = $(this).serialize();
    //         $.ajax({
    //             type: "POST",
    //             url: "/sendmessage.php",
    //             data: form_data,
    //             success: function () {
    //                 cleanTnanks(this);
    //             }
    //         });
    //     }
    //     return false;
    // });
    // function cleanTnanks(form) {
    //     $('.inp_first').removeClass("error-input");
    //     $('.inp_second').removeClass("error-input");
    //
    //     $(".inp_first input").val("");
    //     $(".inp_second input").val("");
    //
    //     $('.reservation-modal').hide();
    //     $('.modal-thanks').fadeIn();
    // };
    //
    // // custom select ===========================================================
    // $('select').selectric();
    //
    // // modal reservation =======================================================
    // $('.modal-show').click(function() {
    //     $('.overlay').fadeIn();
    //     $('.reservation-modal').fadeIn();
    //     $('.close-modal').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    //     $('.overlay').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    // });
    //
    // // slider ==================================================================
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 'auto',
    //     //   spaceBetween: 83,
    //     loop: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });
    //
    // // slider hover animate ====================================================
    // $('.gallery-wrap').hover(function() {
    //     $('.swiper-slide').toggleClass('slider-animate');
    // });
    // $('.gallery-wrap').mouseleave(function() {
    //     $('.swiper-slide').removeClass('slider-animate');
    // });

});
