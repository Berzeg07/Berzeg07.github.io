$(document).ready(function() {

    // Set interval ======================================
    setInterval(function(){
        $('.cyprus-time').html(moment().tz("Asia/Famagusta").format('a h:mm'));
        $('.monaco-time').html(moment().tz("Europe/Monaco").format('a h:mm'));
        $('.singapore-time').html(moment().tz("Asia/Singapore").format('a h:mm'));
        $('.antwerp-time').html(moment().tz("Europe/Paris").format('a h:mm'));
        $('.rio-time').html(moment().tz("America/Sao_Paulo").format('a h:mm'));
        $('.copenhagen-time').html(moment().tz("Europe/Copenhagen").format('a h:mm'));
    }, 1000);

    // Mobile menu ========================================
    $(function() {
        function burger() {
            $('.main-nav').toggleClass('nav-show');
        };
        $('.menu-bars').click(function() {
            burger();
        });
        $(document).click(function(event) {
            if ($(event.target).closest(".main-nav").length) return;
            if ($(event.target).closest(".menu-bars").length) return;
            $('.main-nav').removeClass('nav-show');
            event.stopPropagation();
        });
    });

    // Fleet info ========================================
    $('.fleet-about_name').click(function() {
        var parentClass = $(this).parent();
        var parentMainClass = parentClass.parent();
        var mainClass = $(parentMainClass).find('.fleet-about_info');
        mainClass.slideToggle();

        $(document).mouseup(function(e) {
            var div = $(parentClass);
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $(mainClass).fadeOut();
            }
        });
    });

    // type ship =========================================
    $('.typeShip-btn').click(function() {
        $('.typeShip-list').slideToggle();
        $(this).toggleClass('arrowRotate');
    });

    // num animation =====================================
    var showAnimation_1 = true;
    var showAnimation_2 = true;
    var showAnimation_3 = true;
    var showAnimation_4 = true;
    var showAnimation_5 = true;
    var showAnimation_6 = true;
    var showAnimation_7 = true;
    var showAnimation_8 = true;

    $(window).on("scroll load resize", function() {

        if($(this).scrollTop() >= 80) {
            $('header').addClass('hideClass');
            $('.header-logo').addClass('header-logo_scale');
        }
        else{
            $('header').removeClass('hideClass');
            $('.header-logo').removeClass('header-logo_scale');
        }

        if (showAnimation_1 == true) {
            var w_top = $(window).scrollTop();
            var e_top_1 = $('#count-1').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_1 = $("#count-1").outerHeight();
            if (w_top + 1000 >= e_top_1 || w_height + w_top == d_height || e_height_1 + e_top_1 < w_height) {
                $(".spincrement").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_1 = false;
            }
        }

        if (showAnimation_2 == true) {
            var w_top = $(window).scrollTop();
            var e_top_2 = $('#count-2').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_2 = $("#count-2").outerHeight();
            if (w_top + 700 >= e_top_2 || w_height + w_top == d_height || e_height_2 + e_top_2 < w_height) {
                $(".spincrement2").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_2 = false;
            }
        }

        if (showAnimation_3 == true) {
            var w_top = $(window).scrollTop();
            var e_top_3 = $('#count-3').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_3 = $("#count-3").outerHeight();
            if (w_top + 800 >= e_top_3) {
                $(".spincrement3").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_3 = false;
            }
        }

        if (showAnimation_4 == true) {
            var w_top = $(window).scrollTop();
            var e_top_4 = $('#count-4').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_4 = $("#count-4").outerHeight();
            if (w_top + 800 >= e_top_4 || w_height + w_top == d_height || e_height_4 + e_top_4 < w_height) {
                $(".spincrement4").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_4 = false;
            }
        }

        if (showAnimation_5 == true) {
            var w_top = $(window).scrollTop();
            var e_top_5 = $('#count-5').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_5 = $("#count-5").outerHeight();
            if (w_top + 800 >= e_top_5 || w_height + w_top == d_height || e_height_5 + e_top_5 < w_height) {
                $(".spincrement5").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_5 = false;
            }
        }

        if (showAnimation_6 == true) {
            var w_top = $(window).scrollTop();
            var e_top_5 = $('#count-6').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_5 = $("#count-6").outerHeight();
            if (w_top + 800 >= e_top_5 || w_height + w_top == d_height || e_height_5 + e_top_5 < w_height) {
                $(".spincrement6").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_6 = false;
            }
        }

        if (showAnimation_7 == true) {
            var w_top = $(window).scrollTop();
            var e_top_5 = $('#count-7').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_5 = $("#count-7").outerHeight();
            if (w_top + 800 >= e_top_5 || w_height + w_top == d_height || e_height_5 + e_top_5 < w_height) {
                $(".spincrement7").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_7 = false;
            }
        }

        if (showAnimation_8 == true) {
            var w_top = $(window).scrollTop();
            var e_top_5 = $('#count-8').offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height_5 = $("#count-8").outerHeight();
            if (w_top + 800 >= e_top_5 || w_height + w_top == d_height || e_height_5 + e_top_5 < w_height) {
                $(".spincrement8").spincrement({
                    thousandSeparator: ", ",
                    duration: 1000,
                    complete: null
                });
                showAnimation_8 = false;
            }
        }
    });

    // modal ========================================================
    function modalShow(id) {
        $('.overlay').fadeIn();
        $(id).fadeIn();
    };
    $('.modal-close').click(function() {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".modal").length) return;
        if ($(event.target).closest(".group-sircle").length) return;
        $(".modal").fadeOut();
        $(".overlay").fadeOut();
        event.stopPropagation();
    });
    $('#denmark').click(function() {
        modalShow('.denmark-modal');
    });
    $('#antwerp').click(function() {
        modalShow('.antwerp-modal');
    });
    $('#cyprus').click(function() {
        modalShow('.nicosia-modal');
    });
    $('#brazil').click(function() {
        modalShow('.brazil-modal');
    });
    $('#singapore').click(function() {
        modalShow('.singapore-modal');
    });
    $('#monaco').click(function() {
        modalShow('.monaco-modal');
    });


});
