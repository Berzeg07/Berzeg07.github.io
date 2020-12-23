$(document).ready(function() {

    $('.phone-inp').mask('+7 (999) 999-9999');

    $('.voice').click(function() {
        // $('.voice').each(function() {
        //     $(this).find('.voice-btn__audio').get(0).pause();
        // });
        $('.voice-btn__audio').get(0).pause();
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).find('.voice-btn__audio').get(0).pause();
        } else {
            $(this).addClass('on');
            var pl = $(this).find('.voice-btn__audio').get(0)
            pl.play();
            $(pl).on("ended", function() {
                $(this).parent().removeClass('on');
            });
        }
        // $('.voice').each(function() {
        //     $(this).find('.voice-btn__audio').get(0).pause();
        // });
    });

    $(function() {
        $(".main-menu a").click(function(e) {
            e.preventDefault();
            var currentBlock = $(this).attr("href");
            currentBlockoffset = $(currentBlock).offset().top;
            $("html, body").animate({
                scrollTop: currentBlockoffset
            }, 500);
        });
    });

    $('.callreq').click(function(e) {
        e.preventDefault();
        $('#recalModal, .overlay').fadeIn();
        $('body').addClass('overflow-hidden');
    });

    $('.close-modal').click(function() {
        $('.request-modal, .overlay').fadeOut();
        $('body').removeClass('overflow-hidden');
        $('.thanks-modal').removeClass('is-active');
        $('.franchaizi-modal').removeClass('is-active');
    });

    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-menu, .overlay').fadeToggle();
    });

    $('.link-detail').click(function(e) {
        e.preventDefault();
        var modalId = $(this).attr('data-attr');
        if (!modalId) {
            return;
        }
        $(modalId).addClass('is-active');
        $('.overlay').fadeIn();
        $('body').addClass('overflow-hidden');
    });

    $('.subscription__link').click(function(e) {
        e.preventDefault();
        $('#mailing, .overlay').fadeIn();
        $('body').addClass('overflow-hidden');
    });

    var swiperScrollbar = new Swiper('.franchaizi-scroll-box', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    var swiper = new Swiper('.filial-slider', {
        slidesPerView: 7,
        spaceBetween: 15,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'progressbar',
        // },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 15,
                loop: false,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
                loop: false,
            },
            1169: {
                slidesPerView: 3,
                spaceBetween: 21,
                loop: false,
            },
            1899: {
                slidesPerView: 5,
                spaceBetween: 40,
                loop: false,
            },
        }
    });

    var swiperPost = new Swiper('.post-slider', {
        navigation: {
            nextEl: '.post-block__next',
            prevEl: '.post-block__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    // function toggleClassZoom() {
    //
    //     if ($(window).width() >= 768) {
    //         $('.certificates__img').addClass('zoom-img');
    //         swiperSert.destroy();
    //         // $('.certificat-slider .swiper-wrapper').removeAttr('style');
    //         // $('.certificat-slider .swiper-slide').removeAttr('style');
    //     } else {
    //         $('.certificates__img').removeClass('zoom-img');
    //     }
    // }

    // var swiperSert = undefined;

    // function initSwiper() {
    //     var screenWidth = $(window).width();
    //     if (screenWidth < 768 && swiperSert == undefined) {
    //         var swiperSert = new Swiper('.certificat-slider', {
    //             slidesPerView: 2,
    //             spaceBetween: 15,
    //             simulateTouch: true,
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //             breakpoints: {
    //                 640: {
    //                     slidesPerView: 1
    //                 }
    //             }
    //         });
    //     } else if (screenWidth >= 768 && swiperSert != undefined) {
    //         alert(111);
    //         swiperSert.destroy();
    //         swiperSert = undefined;
    //         // jQuery('.swiper-wrapper').removeAttr('style');
    //         // jQuery('.swiper-slide').removeAttr('style');
    //     }
    // }

    // //Swiper plugin initialization
    // initSwiper();

    // //Swiper plugin initialization on window resize
    // $(window).resize(function() {
    //     initSwiper();
    // });


    var swiperTeam = new Swiper('.about-slider', {
        slidesPerView: 3,
        spaceBetween: 21,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'progressbar',
        // },

        breakpoints: {
            599: {
                slidesPerView: 1,
                spaceBetween: 15,
                // loop: false,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
                // loop: false,
            },
            991: {
                slidesPerView: 3,
                loop: true
                    // spaceBetween: 35,
            },
        }
    });

    var swiperPres = new Swiper('.modal-slider', {
        slidesPerView: 2,
        spaceBetween: 56,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                // spaceBetween: 35,
            },
        }
    });

    var swiper2 = new Swiper('.network-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'progressbar',
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            599: {
                slidesPerView: 1,
                spaceBetween: 15,
                // loop: false,
            },

            1169: {
                slidesPerView: 2,
                spaceBetween: 40,
                // loop: false,
            },
        }
    });

    var swiper3 = new Swiper('.presentation-slider', {
        slidesPerView: 5,
        spaceBetween: 34,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'progressbar',
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            599: {
                slidesPerView: 1,
                spaceBetween: 15,
                loop: false,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
                loop: false,
            },
            1169: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: false,
            },
        }
    });

    $('.zoom-img').loupe();

    var swiperCom = new Swiper('.community-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        // slidesPerView: 'auto',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    $.fancybox.defaults.backFocus = false;

    var swiperTeam = new Swiper('.team-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        simulateTouch: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'progressbar',
        // },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 15,
                // loop: false,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
                // loop: false,
            },
            1169: {
                spaceBetween: 26,
                // slidesPerView: 2,
                // loop: false,
                centeredSlides: false
            }
        }
    });

    $(function() {
        var $fotoramaDiv = $('.fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        var imagArr = fotorama.data;
        var srcArr = [];

        for (var i = 0; i < imagArr.length; i++) {
            var src = {};
            src.src = imagArr[i].img;
            srcArr.push(src);
        }

        $('.fotorama').on('click', '.fotorama__img', function() {
            $.fancybox.open(srcArr, {
                loop: false
            });
        });
    });

    $(".form-modal").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/sendmessage.php",
            data: form_data,
            success: function() {
                cleanTnanks(this);
            }
        });
        return false;
    });

    function cleanTnanks(form) {
        $('.request-modal').fadeOut();
        $('.overlay').fadeIn();

        $('.thanks-modal').addClass('is-active');
        // location = "spasibo.php";
    };




    //  $(function() {
    //     $('.certificates__img').click(function(event) {
    //         event.preventDefault();
    //
    //         var i_path = $(this).attr('href');
    //         $('body').append('<div class="magnify"><img src="' + i_path + '"><div class="close-popup"></div></div>');
    //         // $('#magnify').css({
    //         //     left: ($(document).width() - $('#magnify').outerWidth()) / 2,
    //         //     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
    //         //     top: ($(window).height() - $('#magnify').outerHeight()) / 2
    //         // });
    //         $('.overlay, .magnify').fadeIn('fast');
    //     });
    //
    //     $('body').on('click', '.close-popup', function(event) {
    //         event.preventDefault();
    //
    //         $('.overlay, .magnify').fadeOut('fast', function() {
    //             $('.close-popup, .magnify').remove();
    //         });
    //     });
    // });




});