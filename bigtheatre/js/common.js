$(document).ready(function() {

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
        $('.header-mobile__hidden').slideToggle();
        $('body').toggleClass('hidden');
    });

    // Buy ticket *
    $('.btn_ticket').click(function() {
        $(this).addClass('active');
        $(this).html('Выбрать на схеме');
        var parent = $(this).parents('.order');
        parent.find('.close-btn').addClass('active');
        parent.find('.order__hidden').slideDown();
        $('.close-btn').click(function() {
            $(this).removeClass('active');
            var btn = parent.find('.btn_ticket');
            btn.removeClass('active');
            btn.html('Выбрать билет');

            parent.find('.order__hidden').slideUp();
        });
    });

    $('.burger').click(function() {
        $('.mob-hidden').removeClass('active');
        $('.menu-mobile').toggleClass('active');
        $('body').toggeClass('hidden');
    });
    $('.menu-mobile .menu-mobile__close').click(function() {
        $('.menu-mobile').removeClass('active');
        $('body').removeClass('hidden');
    });

    $('.date-btn').click(function() {
        $('.mob-hidden').removeClass('active');
        $('.mobile-info').toggleClass('active');
        $('body').toggeClass('hidden');
    });
    $('.mobile-info .mobile-info__close').click(function() {
        $('.mobile-info').removeClass('active');
        $('body').removeClass('hidden');
    });
    $('.product').hover(function(){
        $('.places__tooltip').removeClass('active');
        $(this).find('.places__tooltip').addClass('active');
    });

    // fixed menu *
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 35) {
                $('.header-desktop__bottom').addClass('sticky');
            } else {
                $('.header-desktop__bottom').removeClass('sticky');
            }
        });
    });



    // custom select *
    $('.select-custom select').select2();
    // place slider *
    // $('.places__slider').owlCarousel({
    //     center: true,
    //     items: 20,
    //     loop: false,
    //     // margin: 27,
    //     responsive: {
    //         0: {
    //             items: 6
    //         }
    //     }
    // });

    var swiper = new Swiper('.poster-slider', {
        slidesPerView: 4,
        spaceBetween: 30,

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 4
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    var swiper = new Swiper('.places__slider', {
        slidesPerView: 3,
        // spaceBetween: 5,
        loop: false,
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
            320: {
                slidesPerView: 6
            },
            500: {
                slidesPerView: 7
            },
            992: {
                slidesPerView: 6
            },
            1600: {
                slidesPerView: 10
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Calendar *
    function calendar(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                calendar += '<td>' + i;
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td> ';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
        }
    }
    calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
    }

    function calendarMob(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                calendar += '<td>' + i;
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td> ';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
        }
    }
    calendarMob("calendarMob", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendarMob thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        calendarMob("calendarMob", document.querySelector('#calendarMob thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendarMob thead td:nth-child(2)').dataset.month) - 1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendarMob thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        calendarMob("calendarMob", document.querySelector('#calendarMob thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendarMob thead td:nth-child(2)').dataset.month) + 1);
    }


});
