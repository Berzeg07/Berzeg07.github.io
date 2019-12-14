

$(document).ready(function(){


    $("#js-nav a").click(function(e){
        e.preventDefault();
        var currentBlock = $(this).attr("href");
        currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    });

    $('.checkbox-js').click(function(){
        $('.dd-txt-radio-js').toggleClass('activeRed');
    });

    $('.dd-dost_span').hover(function(){
        $('.dd-podskazka').css('display' , 'block');
    });
    $('.dd-dost_span').mouseleave(function(){
        $('.dd-podskazka').css('display' , 'none');
    });
    $('.dd-kr').click(function(){
        $('.dd-podskazka').css('display' , 'none');
    });
    


    $('.last-block .button-1').click(function(){
        var price = $(this).parents('.inner').find('.price').find('i').text();
        var much_1 = $(this).parents('.inner').find('.block_much_1 span b').text();
        var much_2 = $(this).parents('.inner').find('.block_much_2 span b').text();

        var tarif_name = $(this).parents('.tabs-block').find('.active .tab-in span b').text();

        // var kalory = $(this).parents('.tabs-block').find('.active .tab-in i em strong').text();
        var kalory = $(this).parents('.inner').find('.dd-kalory span b').text();

        $('#log-in-2 .dd-price').text(price);
        $('#log-in-2 .dd-grey-txt .dd-much_1').text(much_1);
        $('#log-in-2 .dd-grey-txt .dd-much_2').text(much_2);
        $('#log-in-2 .dd-bold-title_pop .tarif_name').text(tarif_name);
        $('#log-in-2 .dd-bold-title_pop span .dd-kal').text(kalory);

        $('.tarif_name_hide').val(tarif_name);
        $('.tarif_price').val(price);
        $('.tarif_kalory').val(kalory);
        $('.how_much').val(much_1);
        $('.how_much_day').val(much_2);
        
    });

    $('.jsmobv').on('click', function(e){
        var kolvokal = $('.active').find('.tab-in').find('i').find('em').find('strong').text();
        var nameprodm = $('.active').find('.tab-in').find('span').find('b').text();
        var pricemob = $(this).parents('.price').find('span').find('i').text();
        var much_1mob = $(this).parents('.inner').find('.right').find('.block:first')
        .find('span b').text();
        var much_2mob = $(this).parents('.inner').find('.right').find('.block:last')
        .find('span b').text();

        $('#log-in-2 .dd-price').text(pricemob);
        $('#log-in-2 .dd-bold-title_pop .tarif_name').text(nameprodm);
        $('#log-in-2 .dd-bold-title_pop span .dd-kal').text(kolvokal);
        $('#log-in-2 .dd-grey-txt .dd-much_1').text(much_1mob);
        $('#log-in-2 .dd-grey-txt .dd-much_2').text(much_2mob);

        $('.tarif_name_hide').val(nameprodm);
        $('.tarif_price').val(pricemob);
        $('.tarif_kalory').val(kolvokal);
        $('.how_much').val(much_1mob);
        $('.how_much_day').val(much_2mob);

    });


    $('.ripplelink').each(function() {
        var $this = $(this);

        var ink, d, x, y;

        setInterval(function() {
            if($this.find(".ink").length === 0){
                $this.prepend("<span class='ink'></span>");
            }

            ink = $this.find(".ink");
            ink.removeClass("animate");

            if(!ink.height() && !ink.width()){
                d = Math.max($this.outerWidth(), $this.outerHeight());
                ink.css({height: d, width: d});
            }

            x = Math.round(Math.random()*ink.width() - ink.width()/2);
            y = Math.round(Math.random()*ink.height() - ink.height()/2);
                // y = 0;
                // x = e.pageX - $this.offset().left - ink.width()/2;
                // y = e.pageY - $this.offset().top - ink.height()/2;

                ink.css({top: y+'px', left: x+'px'}).addClass("animate");
            }, 3000)
    });

    $('.checkbox-js').click(function(){
        $('.dd-txt-radio-js').toggleClass('activeRed');
    });
    $('.dd-dost_span').hover(function(){
        $('.dd-podskazka').toggleClass('blocked');
    });

    $('.jscheked').on('click', function(e){
        var txtdaytarif = $('.dd-grey-txt_2 i').text();//день недели        
        $('.jsdayweekpop').val(txtdaytarif);        
    });

    $('a[name=modal]').click(function(e) {      
        e.preventDefault();
        
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        // $('#mask').css({'width':maskWidth,'height':maskHeight});
        // $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
        
        if(window.innerWidth > 990) {
            $(id).css('top',  posTop+50);
        }
        // $(id).css('left', winW/2-$(id).width()/2);
        $('#mask').fadeIn();
        $(id).fadeIn(500);

        $('body').css({
            'overflow' : 'hidden',
            'position': 'fixed',
            'width' : '100%',
            'top': -posTop,
            'padding-right': '17px',
        });
        $('.roistat-lh-pulsator-phone').css('display', 'none');

    });
    $('.window .dd-close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
        $('.window').hide();
        $('body').removeAttr('style');
        $( window ).scrollTop(posTop);
        $('.roistat-lh-pulsator-phone').css('display', 'block');
    }); 

    $('#mask, .an-exit__krest').click(function () {
        $('#mask').hide();
        $('.window').hide();
        $('body').removeAttr('style');  
        $( window ).scrollTop(posTop);
        $('.roistat-lh-pulsator-phone').css('display', 'block');
    });

    $(".phone").mask("+7(999)999-99-99?"); 
 
     ////////////////////////////////

//отправка на попап и на почту(menuphp)

    $('.jsdflink').on('click', function(){
        var txttarif = $('.dfactivelinkdesk a em').text();  //название тарифа   
        $('.dd-bold-title_pop b').text(txttarif);       
        $('.jsnametarifpop').val(txttarif);

        var txtdaykkal = $('.dfactivelinkdesk').next('.jskaldaypopup').text();//ккал в тарифе
        $('.dd-bold-title_pop b').next('span').text(txtdaykkal);
        $('.jskkalpop').val(txtdaykkal);

        var txtdaytarif = $('.jsweakactive').text();//день недели
        $('.dd-grey-txt_2 i').text(txtdaytarif);   

             // Цели выбор дня недели ....................

        if(txtdaytarif == 'Понедельник'){
            ga ('send', 'event', 'popup', 'menu_monday');
            yaCounter38724665.reachGoal('menu_monday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Воскресенье'){
            ga ('send', 'event', 'popup', 'menu_sunday');
            yaCounter38724665.reachGoal('menu_sunday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Вторник'){
            ga ('send', 'event', 'popup', 'menu_tuesday');
            yaCounter38724665.reachGoal('menu_tuesday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Среда'){
            ga ('send', 'event', 'popup', 'menu_wednesday');
            yaCounter38724665.reachGoal('menu_wednesday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Четверг'){
            ga ('send', 'event', 'popup', 'menu_thursday');
            yaCounter38724665.reachGoal('menu_thursday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Пятница'){
            ga ('send', 'event', 'popup', 'menu_friday');
            yaCounter38724665.reachGoal('menu_friday');
            roistatGoal.reach();
        }
        else if(txtdaytarif=='Суббота'){
            ga ('send', 'event', 'popup', 'menu_saturday');
            yaCounter38724665.reachGoal('menu_saturday');
            roistatGoal.reach();
        }

        //////////////////////////////////////////////////
        
        //  $('.jsdayweekpop').val(txtdaytarif);      
        
        var js5days = $('.df5priemactive i').text(); //количество приемов 
        var js3days = $('.df3priemactive i').text();
        $('.js5days').val(js5days);
        $('.js3days').val(js3days);     
    });

 ///////////////////////mob version
        

    $('.jsdflinkmob').on('click', function(){       
        var txttarifmob = $('.dfactivelinkmob a').attr('tarif');        
        $('.dd-bold-title_pop b').text(txttarifmob);
        $('.jsnametarifpop').val(txttarifmob);

        var txtdaykkal = $('.dfactivelinkmob a').text();    
        $('.dd-bold-title_pop b').next('span').text(txtdaykkal);
        $('.jskkalpop').val(txtdaykkal);

        var txtdaytarifmob = $('.jsmobactive').attr('dayweek');     
        $('.dd-grey-txt_2 i').text(txtdaytarifmob);       

          // Цели выбор дня недели ....................

        if(txtdaytarifmob == 'Понедельник'){
            ga ('send', 'event', 'popup', 'menu_monday');
            yaCounter38724665.reachGoal('menu_monday');
            roistatGoal.reach();
        }
        else if(txtdaytarifmob=='Воскресенье'){
            ga ('send', 'event', 'popup', 'menu_sunday');
            yaCounter38724665.reachGoal('menu_sunday');
            roistatGoal.reach();           
        }
        else if(txtdaytarifmob=='Вторник'){
            ga ('send', 'event', 'popup', 'menu_tuesday');
            yaCounter38724665.reachGoal('menu_tuesday');
            roistatGoal.reach();
        }
        else if(txtdaytarifmob=='Среда'){
            ga ('send', 'event', 'popup', 'menu_wednesday');
            yaCounter38724665.reachGoal('menu_wednesday');
            roistatGoal.reach();
        }
        else if(txtdaytarifmob=='Четверг'){
            ga ('send', 'event', 'popup', 'menu_thursday');
            yaCounter38724665.reachGoal('menu_thursday');
            roistatGoal.reach();
        }
        else if(txtdaytarifmob=='Пятница'){
            ga ('send', 'event', 'popup', 'menu_friday');
            yaCounter38724665.reachGoal('menu_friday');
            roistatGoal.reach();
        }
        else if(txtdaytarifmob=='Суббота'){
            ga ('send', 'event', 'popup', 'menu_saturday');
            yaCounter38724665.reachGoal('menu_saturday');
            roistatGoal.reach();
        }

        ////////////////////////////////////////////////// 

        var js5daysmob = $('.df5active').text(); //количество приемов 
        var js3daysmob = $('.df3active').text();
        $('.js5days').val(js5daysmob);
        $('.js3days').val(js3daysmob);  
    }); 


//////////////////////////end mob
    
//отправка на попап и на почту(menuphp)=====конец

    
    $(".form1").submit(function() { 
        var tel = $(this).find('input[name="phone"]');
        var inppop = $(this).find('input[name="uname"]');
        var empty = false;

        if (inppop.val() == "") {
            // inppop.addClass('error-input');
            inppop.focus();         
        }
        if (tel.val() == ""){
            empty = true;
        }
        
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            $("#formvalid").validate(); 


                    // Цели заказ по телефону    ...................

        var target = $('.tarif_name_hide').val();
        if(target=='Фит'){
            ga ('send', 'event', 'popup', 't1400_phone');
            yaCounter38724665.reachGoal('t1400_phone');
            alert(1);
        }
        else if(target=='Фит Плюс'){
            ga ('send', 'event', 'popup', 't1700_phone');
            yaCounter38724665.reachGoal('t1700_phone');
        }
        else if(target=='Спорт'){
            ga ('send', 'event', 'popup', 't2500_phone');
            yaCounter38724665.reachGoal('t2500_phone');
        }
        else if(target=='Спорт Плюс'){
            ga ('send', 'event', 'popup', 't3500_phone');
            yaCounter38724665.reachGoal('t3500_phone');
        }

        /////////////////////////////////////////////////

        // Цели онлайн оплата   .........................

        if(target=='Фит'){           
            if($('#log-in-5').css('display')==='block'){
                ga ('send', 'event', 'popup', 't1400_online_oplata');
                yaCounter38724665.reachGoal('t1400_online_oplata');
            }
        }
        else if(target=='Фит Плюс'){     
            if($('#log-in-5').css('display')==='block'){
               ga ('send', 'event', 'popup', 't1700_online_oplata');
               yaCounter38724665.reachGoal('t1700_online_oplata');
            }
        }
        else if(target=='Спорт'){   
            if($('#log-in-5').css('display')==='block'){
                ga ('send', 'event', 'popup', 't2500_online_oplata');
                yaCounter38724665.reachGoal('t2500_online_oplata');
            }
        }
        else if(target=='Спорт Плюс'){  
            if($('#log-in-5').css('display')==='block'){
               ga ('send', 'event', 'popup', 't3500_online_oplata');
               yaCounter38724665.reachGoal('t3500_online_oplata');              
            }
        }

        /////////////////////////////////////////////////    




            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/sendmessage.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });

        }


        
        return false;
    });

    function cleanTnanks(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $('.window').hide();            
        location = "spasibo.php";
    };

    $('.online-replace').on('click', function(el){
        el.preventDefault();
        var unamereq = $(this).parents('#log-in-2').find('.unamejs').val();
        var phonereq = $(this).parents('#log-in-2').find('.phonejs').val();
        $('.dd-hid-name').val(unamereq);
        $('.dd-hid-phone').val(phonereq);
        if(unamereq == "" ){    
            $('.unamejs').focus();  
                // $('.unamejs').addClass('disabledinputjs');               
                return false;

            }else if(phonereq == ""){    
                $('.phonejs').focus();
                // $('.phonejs').addClass('disabledinputjs');    
                return false;   
            }else{
                $('.disabledinputjs').removeClass('disabledinputjs');
                $('.online-replace').attr('name', 'modal');

                // Цели кнопка перехода к онлайн оплате ....................

                var target = $('.tarif_name_hide').val();
                if(target=='Фит'){
                    ga ('send', 'event', 'popup', 't1400_phone');
                    yaCounter38724665.reachGoal('t1400_phone');
                }
                else if(target=='Фит Плюс'){
                    ga ('send', 'event', 'popup', 't1700_phone');
                    yaCounter38724665.reachGoal('t1700_phone');
                }
                else if(target=='Спорт'){
                    ga ('send', 'event', 'popup', 't2500_phone');
                    yaCounter38724665.reachGoal('t2500_phone');
                }
                else if(target=='Спорт Плюс'){
                    ga ('send', 'event', 'popup', 't3500_phone');
                    yaCounter38724665.reachGoal('t3500_phone');
                }

                //////////////////////////////////////////////////

                function send_form(form_id) {
                    var form = $('#'+form_id);
                    var msg   = form.serialize();
                    $.ajax({
                        type: 'POST',
                        url: "/sendmessage.php", 
                        data: msg,
                        success: function(data) {              
                        },
                        error:  function(){             
                        }
                    });
                }send_form('dd-first-messege');

                $('#log-in-2').hide();
                $('#log-in-5').show();

                

                return true;
            }
        });




    $(".js-faq-tittle").click(function(e){
        e.preventDefault();
        var $this = $(this);

        if( !$this.hasClass("dd-active")){
            $(".js-faq-content").slideUp();
            $(".js-faq-tittle").removeClass("dd-active");
        }
        $this.toggleClass("dd-active"); 
        $this.next().slideToggle();
    });
    $(".js-faq-tittle:first").click();

    $(".js-faq-tittle2").click(function(e){
        e.preventDefault();
        var $this = $(this);

        if( !$this.hasClass("dd-active")){
            $(".js-faq-content2").slideUp();
            $(".js-faq-tittle2").removeClass("dd-active");
        }
        $this.toggleClass("dd-active"); 
        $this.next().slideToggle();
    });
    $(".js-faq-tittle2:first").click();


  /////////////////////////////////
  $('.jsdayselected select').change(function(event) {

  });


 


///////////////////submit for shtrafphp

  $('.jssubmit').submit(function(){
    var phone = $(this).find('input[name="phone"]');

    var sendnametarif = $(this).parents('.end ')
    .find('.end__item')
    .find('.jskkalday b')
    .text();
    $('.jsnametarif').val(sendnametarif);   

    var sendnametarifmob = $(this).parents('#jsmobversion2')
    .find('.info')
    .find('.half')
    .find('.jsmobkallday b')
    .text();
    $('.jsnametarifmob').val(sendnametarifmob); 



    if(window.innerWidth > 990) {
        var selected = $('.jsdayselected select option:selected').text();
        $('.jsdaydostavki').val(selected);

        var jstimeselected = $('.jstimeselected select option:selected').text();
        $('.jstimedostavki').val(jstimeselected);
    }else{
        var selected = $('.jsdayselectedmob select option:selected').text();
        $('.jsdaydostavki').val(selected);

        var jstimeselected = $('.jstimeselectedmob select option:selected').text();
        $('.jstimedostavki').val(jstimeselected);
    }

                if(phone.val() == ""){
                    phone.focus();
                    return false;
                }

                else{
                    $(".form-collback").validate(); 
                    var form_data = $(this).serialize(); 
                    $.ajax({
                        type: "POST", 
                        url: "/sendmessage.php", 
                        data: form_data,
                        success: function() {
                            cleanTnanks(this);
                        }
                    });
                }
               
                return false;

            });

            function cleanTnanks(form){
                $('.js-window').hide();               
                location = "spasibo.php";
            };


 //////////////////////////////////////////////////


    if(window.innerWidth <= 800) {
        window.roistatLeadHunterInited = true;
    }  

   
   $('.db-menu a, .db-up_menu_menu a, .db-want, .db-podr, .db-tarif, .db-podr1, .db-tarif1').on("click", function(e){
        e.preventDefault();
        var $this = $(this), 
        $href = $this.attr('href'),
        $scrollTop = $($href).offset().top;

        $('html, body').animate({
            scrollTop: $scrollTop
        },1000);
    });

    $('.db-burger').on("click", function(){
        $('.db-up_menu_menu').slideToggle();
    });
   $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });

   $("#owl-slider").owlCarousel({
        loop:true,
        dots:true,
        items:1,
        mouseDrag:true,
        touchDrag: true,
        nav:true,
            responsive:{
              770:{
                nav:false,
                items:3
            }
        }
    });

    $('.tabs-content > .tab-content').each(function(index){
        if (index != 0) {
        $(this).css('display','none');
        };
    });

   $('.tab').click(function(){
    $('.tab').removeClass('active');
    $('.tabs-content').find('div').removeClass('active');
    $('.tabs-content > .tab-content').css('display','none');
    $(this).addClass('active');

    for (var i = 0; i < 4; i++) {
        if($('.tabs > .tab-' + i).hasClass('active')){
            $('.tabs-content > .tab-' + i).addClass('active');
        };

        $('.tabs-content > .active').css('display','block');
    };
});

   

   $('#tb3 span').click();

   $('.individual').on('click', function(evt5){
    evt5.preventDefault();  
    $('html, body').animate({
        scrollTop: $(".shtraf").offset().top - 0
    }, 500);
});

});


