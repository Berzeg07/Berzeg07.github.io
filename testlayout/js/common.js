var mainSlider = new Swiper('.mainslider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.mainslider__paginate',
        clickable: true,
    }
});

var doortypeSlider = new Swiper(".doortypeslider", {
    slidesPerView: 3.5,
    spaceBetween: 0,
    freeMode: true,
    breakpoints: {
        767: {
            slidesPerView: 2.6,
            spaceBetween: 10,
        },
    }
  });

  $('.customselect select').selectric();