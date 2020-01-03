

$(document).ready(function(){

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

    /*TIMER*/
    var count = 17;
    var minutes = 11;
    var hours = 0;
    var end = 0;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
      count = count - 1;
      if (count < 10) {
        $('.dd-sec1').each(function(){
          $(this).html('0'); 
        });
        $('.dd-sec2').each(function(){
          $(this).html(count); 
        });
      }
      else if(count >= 10){
        $('.dd-sec1').each(function(){
          count = count + '';
          $(this).html(count[0]);
          count = count*1;
        });
        $('.dd-sec2').each(function(){
          count = count + '';
          $(this).html(count[1]);
          count = count*1;
        });
      }
      if (count == 0) {
        minutes = minutes - 1;
        if (minutes < 10 && minutes >= 0) {
                // $("#dd-min").html('0'+minutes);

                $('.dd-min1').each(function(){
                 $(this).html('0'); 
               });
                $('.dd-min2').each(function(){
                 $(this).html(minutes); 
               });


              }
              if (minutes >= 10) {
                // $("#dd-min").html(minutes);
                $('.dd-min1').each(function(){
                  minutes = minutes + '';
                  $(this).html(minutes[0]);
                  minutes*=1;
                });
                $('.dd-min2').each(function(){
                 minutes = minutes + '';
                 $(this).html(minutes[1]);
                 minutes*=1;
               });
              }
              if (minutes == 0) {
                hours = hours - 1;
                if (hours < 10 && hours >=0) {
                    // $("#dd-hours").html('0'+hours);
                    $('.dd-hours1').each(function(){
                     $(this).html('0'); 
                   });
                    $('.dd-hours2').each(function(){
                     $(this).html(hours); 
                   });
                  }
                  if (hours>10) {
                    // $("#dd-hours").html('0'+hours);
                    $('.dd-hours1').each(function(){
                      hours = hours + '';
                      $(this).html(hours[0]);
                      hours*=1;
                    });
                    $('.dd-hours2').each(function(){
                      hours = hours + '';
                      $(this).html(hours[1]);
                      hours*=1;
                    });
                  }
                  if (hours < 0 ) {

                    end = 1;
                    clearTimeout(counter);
                  }
                  if (end) { minutes = '00';}
                  else {
                    minutes = 59 + '';
                  }
                  $('.dd-min1').each(function(){
                    $('.dd-min1').html(minutes[0]);
                  });
                  $('.dd-min2').each(function(){
                    $('.dd-min1').html(minutes[1]);
                  });
                }
                if (end) { count = '00';}
                else {
                  count = 59 + '';
                }
                $('.dd-sec1').each(function(){
                  $(this).html(count[0]);
                });
                $('.dd-sec2').each(function(){
                  $(this).html(count[1]);
                });
              }
            }
            /* MAP */
            ymaps.ready(init);
            var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map", {
                center: [59.948717, 30.279405],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([59.948717, 30.279405], {
                hintContent: 'IphoneMania!',
                balloonContent: 'IphoneMania!'
            },
            {
                iconImageHref: '/img/map-baloon.png',
                iconImageSize: [50, 80],
                iconImageOffset: [-25, -60]
                }
        );
            myMap.controls.add('mapTools');
            myMap.geoObjects.add(myPlacemark);
        }


           // ==========================================
          // ============ ПОДКЛЮЧЕНИЕ ЯКОРЯ ===========
          // ==========================================
            $("#menu").on('click','a', function(event){
              event.preventDefault();
              var id  = $(this).attr('href'),
              top = $(id).offset().top;
              $('body,html').animate({scrollTop: top }, 500);
            });








        $('.dfgigs a').on('click', function(e){
          e.preventDefault();
          var price = $(this).attr('price');
          $(this).parents('.dfcharacteristics')
          .find('.dfactivelink')
          .removeClass('dfactivelink');

          $(this).addClass('dfactivelink');
          $(this).parents('.dfcharacteristics').find('.dfprice').find('i').text(price);
        });

        $('.dfcolorbox a').on('click',function(evt) { 
          evt.preventDefault();       
          var getcolor = $(this).attr('color'); 

          var imgPath = $(this).attr('href');         
          var oldImage = $('.dfcatalogimg img');              
          var newImage = $('<img src="' + imgPath +'" color="' + getcolor + '">' ); 
          $(this).parents('.dfboxproduct').find('.dfcatalogimg').html(newImage); 


        });

        
 });


