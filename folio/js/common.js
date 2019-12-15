$(document).ready(function() {

    $('.player').click(function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('#my-hidden-player').get(0).pause();
        } else {
            $('.button').removeClass('on');
            $(this).addClass('on');
            var pl = $('#my-hidden-player').get(0);
            pl.pause();
            pl.src = $(this).attr('data-src');
            pl.play();
        }
    });

    function showIcon() {
        $('.skills__icon').addClass('show-icon');
        $('.skill-bars').addClass('active');
        $('.skill-bars__num_html').spincrement({
            from: 0,
            to: 80,
            fade: true,
            duration: 2200
        });
        $('.skill-bars__num_js').spincrement({
            from: 0,
            to: 60,
            fade: true,
            duration: 2200
        });
        $('.skill-bars__num_php').spincrement({
            from: 0,
            to: 40,
            fade: true,
            duration: 2200
        });
    }

    $('.tab-menu a').click(function(e) {
        e.preventDefault();
        $('.tab-menu a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        var checkClass = $('.skill-bars').hasClass('active');
        var checkLinkClass = $(this).hasClass('main-link_mob');
        if (checkLinkClass) {
            $('.navbar').removeClass('is-active');
            $('.mobile-menu').removeClass('is-active');
            $('body').removeClass('hidden');
            $('.overlay').fadeOut();
        }
        if (tab == '#about-me') {
            if (!checkClass) {
                setTimeout(showIcon, 300);
            }
        }
        $('.tab-content').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.nav a:first').click();

    $('.navbar').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-menu').toggleClass('is-active');
        $('body').toggleClass('hidden');
        $('.overlay').fadeToggle();
    });

    // Typed text Header *
    var typed = new Typed('#typing', {
        strings: ["<br>Добро пожаловать в WebDev Factory", "Вы можете заказать отдельную услугу<br> или разработку сайта под ключ", "Верстка, разработка скриптов,<br> сайт под ключ на cms Wordpress"],
        typeSpeed: 70,
        backDelay: 1000,
        startDelay: 2000,
        loop: true,
        loopCount: 1,
        contentType: 'html',
    });

    // $(document).snowfall({
    //     flakeCount: 100,
    //     // image: "assets/img/snow4.png",
    //     minSize: 2,
    //     maxSize: 3,
    //     minSpeed: 1,
    //     maxSpeed: 2,
    //     round: true,
    //     shadow: false,
    // });

    function showCont() {
        // $('.player').trigger('click');
        $('.player').addClass('show');
        $('.footer').addClass('active');
        $('.nav').addClass('active');
        $('.logo').addClass('show');
        $('.copy').addClass('animate');
    }

    showCont();

    // setTimeout(showCont, 6000);

    // $('.cube').hover(function() {
    //     $(this).addClass('active');
    //     $(this).mouseleave(function() {
    //         $(this).removeClass('active');
    //     });
    // });

    // Portfolio hover *
    $(function() {
        var protfolio_speed = 400;
        $('.portfolio__item').hover(function(event) {
            function get_back(element) {
                var attr = element.attr('data-back');
                if (typeof attr !== typeof undefined && attr !== false) {

                    if (attr == "left") {
                        element.find(".overlay-bg").css('left', '100%');
                        element.find(".overlay-bg").css('top', '0');
                        element.find(".overlay-bg").animate({
                            left: "0"
                        }, protfolio_speed);
                    }

                    if (attr == "right") {
                        element.find(".overlay-bg").css('left', '-100%');
                        element.find(".overlay-bg").css('top', '0');
                        element.find(".overlay-bg").animate({
                            left: "0"
                        }, protfolio_speed);
                    }

                    if (attr == "top") {
                        element.find(".overlay-bg").css('left', '0');
                        element.find(".overlay-bg").css('top', '100%');
                        element.find(".overlay-bg").animate({
                            top: "0"
                        }, protfolio_speed);
                    }
                    if (attr == "bottom") {
                        element.find(".overlay-bg").css('left', '0');
                        element.find(".overlay-bg").css('top', '-100%');
                        element.find(".overlay-bg").animate({
                            top: "0"
                        }, protfolio_speed);
                    }
                    element.removeAttr('data-back');
                }
            }
            if (!$(this).hasClass('prozess')) {
                var left = 0;
                var left_d = 0;
                var top = 0;
                var top_d = 0;
                var position = $(this).offset();

                $(this).addClass('prozess');

                if (event.pageX - position.left < $(this).width() / 2) {
                    left = 1;
                    left_d = event.pageX - position.left;
                } else {
                    left_d = position.left + $(this).width() - event.pageX;
                }
                if (event.pageY - position.top < $(this).height() / 2) {
                    top = 1;
                    top_d = event.pageY - position.top;
                } else {
                    top_d = position.top + $(this).height() - event.pageY;
                }
                if ((left_d < top_d) & (left == 1)) {
                    $(this).find(".overlay-bg").animate({
                        left: "100%"

                    }, protfolio_speed, function() {
                        haupt_element.removeClass('prozess');
                        get_back(haupt_element);
                    });
                }
                if ((left_d < top_d) & (left == 0)) {
                    $(this).find(".overlay-bg").animate({
                        left: "-100%"
                    }, protfolio_speed, function() {
                        haupt_element.removeClass('prozess');
                        get_back(haupt_element);
                    });
                }
                if ((left_d > top_d) & (top == 1)) {
                    $(this).find(".overlay-bg").animate({
                        top: "100%"

                    }, protfolio_speed, function() {
                        haupt_element.removeClass('prozess');
                        get_back(haupt_element);
                    });
                }
                if ((left_d > top_d) & (top == 0)) {
                    $(this).find(".overlay-bg").animate({
                        top: "-100%"

                    }, protfolio_speed, function() {
                        haupt_element.removeClass('prozess');
                        get_back(haupt_element);
                    });
                }
                var haupt_element = $(this);
            }
        }, function() {

            var left = 0;
            var left_d = 0;
            var top = 0;
            var top_d = 0;
            var position = $(this).offset();

            if (event.pageX - position.left < 0) {
                left = 1;
            } else if (event.pageX - position.left - $(this).width() > 0) {
                left = 2;
            }
            if (event.pageY - position.top < 0) {
                top = 1;
            } else if (event.pageY - position.top - $(this).height() > 0) {
                top = 2;
            }

            if ($(this).hasClass('prozess')) {
                if (left == 1) {
                    $(this).attr("data-back", "left");
                }
                if (left == 2) {
                    $(this).attr("data-back", "right");
                }

                if (top == 1) {
                    $(this).attr("data-back", "top");
                }
                if (top == 2) {
                    $(this).attr("data-back", "bottom");
                }
            } else {
                if (left == 1) {
                    $(this).find(".overlay-bg").css('left', '100%');
                    $(this).find(".overlay-bg").css('top', '0');
                    $(this).find(".overlay-bg").animate({
                        left: "0"
                    }, protfolio_speed);
                }

                if (left == 2) {
                    $(this).find(".overlay-bg").css('left', '-100%');
                    $(this).find(".overlay-bg").css('top', '0');
                    $(this).find(".overlay-bg").animate({
                        left: "0"
                    }, protfolio_speed);
                }

                if (top == 1) {
                    $(this).find(".overlay-bg").css('left', '0');
                    $(this).find(".overlay-bg").css('top', '100%');
                    $(this).find(".overlay-bg").animate({
                        top: "0"
                    }, protfolio_speed);
                }
                if (top == 2) {
                    $(this).find(".overlay-bg").css('left', '0');
                    $(this).find(".overlay-bg").css('top', '-100%');
                    $(this).find(".overlay-bg").animate({
                        top: "0"
                    }, protfolio_speed);
                }
            }
        });
    });

});
