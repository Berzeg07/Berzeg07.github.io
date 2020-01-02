$(document).ready(function() {

    new WOW().init();

    $(function() {
        $('.burger').click(function() {
            $('.main-nav_list').slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.main-nav_list').removeAttr('style');
            }
        });
    });

    $('.write-us_btn').click(function(){
        $('.form').fadeIn();
        $('.overlay').fadeIn();
        $('body').addClass('modal-open');
    });

    $('.close-modal, .overlay').click(function(){
        $('.form').fadeOut();
        $('.overlay').fadeOut();
        $('body').removeClass('modal-open');
    });

    $(function() {

        $("#typing").typed({
            strings: ["Дворец культуры<br> железнодорожников"],
            typeSpeed: 70,
            backDelay: 1500,
            startDelay: 2500,
            loop: true,
            loopCount: 1,
            contentType: 'html',
        });

    });

    var owl2 = $(".main-slider");
    owl2.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 0,
        center: false, //если нужны обрезаные края
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    var triggers = document.querySelectorAll('.main-nav_link');
    var highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlightLink() {
        var linkCoords = this.getBoundingClientRect();

        var coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        };
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }
    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
    triggers.forEach(a => a.addEventListener('focus', highlightLink));


    $(".form-main").submit(function() {
        $('.ripple').append("<span class='ripple-effect'>");
        $('.ripple').find(".ripple-effect").css({
            left: event.pageX - $(this).position().left,
            top: event.pageY - $(this).position().top
        }).animate({
            opacity: 0,
        }, 1500, function() {
            $(this).remove();
        });

        var mail = $(this).find('.inp');
        var mailVal = $(this).find('.inp').val();
        if (mailVal == "") {
            mail.addClass("error-input");
            mail.focus();
        } else {
            var form_data = $(this).serialize();
            mail.removeClass("error-input");
            $.ajax({
                type: "POST",
                url: "/sendmessage.php",
                data: form_data,
                success: function() {
                    alert(1);
                }
            });
        }
        return false;
    });

    $(".bar-1").circularProgress({
        line_width: 7,
        color: "#9C6035",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: "",
        text: "455"
    });

    $(".bar-2").circularProgress({
        line_width: 7,
        color: "#9C6035",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: "",
        text: "1991"
    });

    $(".bar-3").circularProgress({
        line_width: 7,
        color: "#9C6035",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: "",
        text: "806"
    });

    $(".bar-4").circularProgress({
        line_width: 7,
        color: "#9C6035",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: "",
        text: "502"
    });

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function() {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 3000
            });
            $(".bar-1").circularProgress({
                line_width: 7,
                color: "#9C6035",
                starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
                percent: 0, // percent starts from
                percentage: "",
                text: "455"
            }).circularProgress('animate', 76, 5000);

            $(".bar-2").circularProgress({
                line_width: 7,
                color: "#9C6035",
                starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
                percent: 0, // percent starts from
                percentage: "",
                text: "1991"
            }).circularProgress('animate', 76, 5000);

            $(".bar-3").circularProgress({
                line_width: 7,
                color: "#9C6035",
                starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
                percent: 0, // percent starts from
                percentage: "",
                text: "806"
            }).circularProgress('animate', 76, 5000);

            $(".bar-4").circularProgress({
                line_width: 7,
                color: "#9C6035",
                starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
                percent: 0, // percent starts from
                percentage: "",
                text: "502"
            }).circularProgress('animate', 76, 5000);
            show = false;
        }
    });

});

$(window).on('load', function() {
    var $preloader = $('#preloader');
    $preloader.delay(1500).fadeOut('slow');
});
