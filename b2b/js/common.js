$(document).ready(function() {

    wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();

    $(".phone").mask("7 (999) 999-99-99");

    $('.btn_tab').click(function(e) {
        e.preventDefault();
        $('.tabs__item').removeClass('active');
        $(this).parents('.tabs__item').addClass('active');
        var tab = $(this).attr('href');
        $('.tab-content__item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.btn_active').click();

});
