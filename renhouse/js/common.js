$(document).ready(function() {

    var sheet = document.createElement('style'),
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];


    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {
      var curVal = el.value,
      val = (curVal - 1) * 20,
      style = '';

  // Set active label
  $('.range-labels li').removeClass('active selected');

  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');

  let btnActive = document.querySelector('.my-range .active');
  dinamicApartaments.call(btnActive);


  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #f6ae2d 0%, #f6ae2d ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #f6ae2d 0%, #f6ae2d ' + val + '%, #e8e8e8 ' + val + '%, #e8e8e8 100%)}';


}

return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger('input');

});

function resizeScrenn() {
    if ($(window).width() >= 1170) {

        var swiper4 = new Swiper('.run-franchise-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        // slidesPerView: 'auto',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true
            }
        }
    });
    } else {
        if(swiper4) {
            swiper4.destroy();
        }// или swiper.autoplay.stop();
    }
}


resizeScrenn();

$(window).resize(function () {
    resizeScrenn();
});

var swiper5 = new Swiper('.video-review__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1170: {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true
        },
    }
});

var swiperTestimonials = new Swiper('.perks__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            spaceBetween: 8,
            slidesPerView: 'auto'
        },
        1169: {
            spaceBetween: 22,
            slidesPerView: 'auto'
        }
    }
});


var swiperComment = new Swiper('.swiper-comment', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.good-comment__next',
        prevEl: '.swiper-button-prev',
    }
});




// function sound() {
//      var audio = new Audio(); // Создаём новый элемент Audio
//      audio.src = '...'; // Указываем путь к звуку "клика"
//      audio.autoplay = true; // Автоматически запускаем
//  }


});



//Калькулятор
let calculateLinksChecked = document.querySelectorAll('.calculate-link'),
calculateLinksCity = document.querySelectorAll('.calculate-city-link');

let calcSum = document.querySelector('.calculate__income-sum span'),
jsWorkers = document.querySelector('.js-workers'),
jsAd = document.querySelector('.js-add'),
jsOffice = document.querySelector('.js-office'),
jsMobile = document.querySelector('.js-mobile'),
jsApartaments = document.querySelector('.js-apartaments');

calculateLinksCity.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        //Выбор города оформление
        stateCity.call(item);

        //Выбор города счет
        dinamicCity.call(item);
    });
});

function dinamicCity () {
    let num = Number(this.getAttribute('data-amount')),
    town = Number(document.querySelector('.calculate-link_first').getAttribute('data-num')),
    consumption = document.querySelector('.js-consumption').innerHTML.replace(/\s/g, '');


    let sumAll = num * town,
    sumClear = sumAll - Number(consumption);

    document.querySelector('.js-income').innerHTML = String(sumAll).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    document.querySelector('.js-clear-income').innerHTML = String(sumClear).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}

function dinamicApartaments () {
    let num = Number(this.getAttribute('data-num')),
    town = Number(document.querySelector('.calculate__city_active').getAttribute('data-amount'));

    let sumAll = num * town;



    document.querySelector('.js-income').innerHTML = String(sumAll).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    let myIncome = income(num);
    document.querySelector('.js-consumption').innerHTML = String(myIncome).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    let sumClear = sumAll - myIncome;
    document.querySelector('.js-clear-income').innerHTML = String(sumClear).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}

function income(num) {

    let calcWorkers = 4000,
    calcAd = 5000,
    calcOffice = 8000,
    calcMobile = 500,
    calcApartaments = 20000;


    let sumWorkers = num * calcWorkers,
    sumAd = num * calcAd,
    sumOffice = num > 5 ? calcOffice: 0,
    sumMobile = num * calcMobile,
    sumApartaments = num * calcApartaments,
    sumAll = sumWorkers + sumAd + sumOffice + sumMobile + sumApartaments;

    jsWorkers.innerHTML = String(sumWorkers).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsAd.innerHTML = String(sumAd).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsOffice.innerHTML = String(sumOffice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsMobile.innerHTML = String(sumMobile).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsApartaments.innerHTML = String(sumApartaments).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    return sumAll;
}

function stateCity () {

    calculateLinksCity.forEach((item) => {
        item.classList.remove('calculate__city_active');
    });

    this.classList.add('calculate__city_active');

}


calculateLinksChecked.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        //Выбор квартир оформление
        stateCalc.call(item);

        //Выбор квартир счет
        dinamicApartaments.call(item);
    });
});


calculateLinksChecked.forEach((item) => {
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        //Выбор квартир оформление
        stateCalc.call(item);

        //Выбор квартир счет
        dinamicApartaments.call(item);
    });
});


function stateCalc() {

    let num = Number(this.getAttribute('data-num'));

    calculateLinksChecked.forEach((item) => {
        item.classList.remove('calculate-link_active');
        item.classList.remove('calculate-link_first');
        item.parentElement.classList.remove('calculate-li-active');
    });


    calculateLinksChecked.forEach((item) => {
        if(item.getAttribute('data-num') === 5 ) {
            item.classList.add('calculate-link_active');
            return;
        }

        if(item.getAttribute('data-num') <= num) {
            item.classList.add('calculate-link_active');
            item.parentElement.classList.add('calculate-li-active');
        }
    });

    this.classList.add('calculate-link_first');
}



//Обратная связь вместо с опросником
let btnCall = document.querySelectorAll('.js-call'),//Кнопки для открытия модальных окок обраной связи
recalName, recalPhone, recalEmail, recalIncome, recalInvestment, recalWhen, recalWhen2;


//Открытие модального окна для обратной связи
btnCall.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        openCallModal();
    });
});


let recallBlock = document.querySelector('.js-recall'), //Модальное окно обратной связи
    overlayBlock = document.querySelector('.overlay2'), //Подложка
    sendForm = document.querySelector('#recall-form'), //Форма
    question1 = document.querySelector('.js-question1'),//Опросник 1
    question2 = document.querySelector('.js-question2'),//Опросник 2
    question3 = document.querySelector('.js-question3');//Опросник 3

//Открытия модального окна обратной связи
function openCallModal() {

    closeModel = recallBlock.querySelector('.js-recall .close-modal'); //Закрытие окна обратной связи
    recallBlock.classList.add('recall_open'); //Открытие модального окна обратной связи
    overlayBlock.style.display = 'block'; //Включение подложки
    // document.querySelector('body').style.overflow = 'hidden';//Без скрола боди
    $('body').addClass('overflow-hidden');

    closeModel.addEventListener('click', () => {
        recallBlock.classList.remove('recall_open');
        overlayBlock.style.display='none';
        // document.querySelector('body').style.overflowY = 'scroll';
        $('body').removeClass('overflow-hidden');

        sendForm.uname.value = '';
        sendForm.phone.value = '';
        sendForm.email.value = '';

    }, false);

    overlayBlock.addEventListener('click', clickOverlay);//Клик на подложку

    sendForm.onsubmit = function(e) {
        e.preventDefault();
        sendMessages();
    }
}

//Обработка формы
function sendMessages() {
    recalName = sendForm.uname.value;
    recalPhone = sendForm.phone.value;
    recalEmail = sendForm.email.value;


    sendForm.uname.value = '';
    sendForm.phone.value = '';
    sendForm.email.value = '';
    recallBlock.classList.remove('recall_open');

    openQuestioner();
}


//Опросник 1
function openQuestioner() {
      let further = question1.querySelector('.questionare__further'),//Кнопка далее
          modelClose = question1.querySelector('.questionnaire__close');//Кнопка закрыть

    overlayBlock.removeEventListener('click', clickOverlay);//Удаляем клик с подложки
    question1.classList.add('recall_open');//Открытие первого опросника


    modelClose.onclick = function() {
        sendQuestions(question1);
    };

    //Отправка результатов опроса в переменную и вызов второго опросника
    further.onclick = function(e) {
        e.preventDefault();
        recalIncome = question1.querySelector('.questionare__income_active').innerHTML;
        recalInvestment = question1.querySelector('.questionare__investment_active').innerHTML;
        question1.classList.remove('recall_open');
        openQuestioner2();
    };

};

//Опросник 2
function openQuestioner2() {
    question2.classList.add('recall_open');

    let modelClose = question2.querySelector('.questionnaire__close');
    further = question2.querySelector('.questionare__further');


    modelClose.onclick = function() {
        sendQuestions(question2);
    };

    further.onclick = function(e) {
        e.preventDefault();
        recalWhen = question2.querySelector('.questionare__buy1_active').innerHTML;
        question2.classList.remove('recall_open');
        openQuestioner3();
    };

}

//Опросник 3
function openQuestioner3() {
    question3.classList.add('recall_open');

    let modelClose = question3.querySelector('.questionnaire__close'),
    further = question3.querySelector('.questionare__further');

    modelClose.onclick = function() {
        sendQuestions(question3);
    };


    further.onclick = function(e) {
        e.preventDefault();

        recalWhen2 = question3.querySelector('.questionare__buy2_active').innerHTML;
        question3.classList.remove('recall_open');
        overlayBlock.style.display = 'none';
        preparingMessage();

        //Окно спасибо
        openThanksModel();
    };

}

//Сбор информации
function preparingMessage() {

    if((recalName && recalPhone && recalEmail && recalIncome && recalInvestment && recalWhen && recalWhen2) != undefined){
        let formData = new FormData();
        formData.append("name", recalName);
        formData.append("phone", recalPhone);
        formData.append("email", recalName);
        formData.append("income", recalIncome);
        formData.append("investment", recalInvestment);
        formData.append("when", recalWhen);
        formData.append("when2", recalWhen2);
        sendMessage(formData);
        return;
    }else if ((recalName && recalPhone && recalEmail) != undefined) {
        let formData = new FormData();
        formData.append("name", recalName);
        formData.append("phone", recalPhone);
        formData.append("email", recalName);
        sendMessage(formData);
        return;
    }

}


//Отправка сообщения на почту
function sendMessage(formData) {

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'message.php');

    xhr.send(formData);

    // if (xhr.status != 200) {
    //   console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    // } else {
    //     concole.log('Сообщение отправлено');
    // }
}


//Закрытие Опросника
function sendQuestions(questionNum) {

    preparingMessage();
    questionNum.classList.remove('recall_open');
    document.querySelector('.overlay2').style.display='none';

    //Окно спасибо
    openThanksModel();
}

//Окно спасибо
function openThanksModel() {
    // document.querySelector('body').style.overflowY = 'scroll';
    $('body').removeClass('overflow-hidden');

    document.querySelector('.overlay').style.display='block';
    document.querySelector('.thanks-modal').classList.add('is-active');
}

//Закрытие подложки
function clickOverlay() {

    document.querySelector('.overlay2').style.display='none';
    // document.querySelector('body').style.overflowY = 'scroll';
    $('body').removeClass('overflow-hidden');

    document.querySelector('#recall-form').uname.value = '';
    document.querySelector('#recall-form').phone.value = '';
    document.querySelector('#recall-form').email.value = '';
    document.querySelector('.js-recall').classList.remove('recall_open');

}

//Кнопки опросника 1 - Планируемая сумма
let btnsQuestion1 = question1.querySelectorAll('.questionare__income button');

btnsQuestion1.forEach((item) => {
    item.addEventListener('click', function() {
        btnsQuestion1.forEach((item) => {
            item.classList.remove('questionare__income_active');
        });

        item.classList.add('questionare__income_active');
    });
});

//Кнопки опросника 1 - Сумма инвестиций
let btnsQuestion12 = question1.querySelectorAll('.questionare__investment button');

btnsQuestion12.forEach((item) => {
    item.addEventListener('click', function() {
        btnsQuestion12.forEach((item) => {
            item.classList.remove('questionare__investment_active');
        });

        item.classList.add('questionare__investment_active');
    });
});

//Кнопки опросника 2
let btnsQuestion2 = question2.querySelectorAll('.questionare__buy button');

btnsQuestion2.forEach((item) => {
    item.addEventListener('click', function() {
        btnsQuestion2.forEach((item) => {
            item.classList.remove('questionare__buy1_active');
        });

        item.classList.add('questionare__buy1_active');
    });
});

//Кнопки опросника 3
let btnsQuestion3 = question3.querySelectorAll('.questionare__buy2 button');

btnsQuestion3.forEach((item) => {
    item.addEventListener('click', function() {
        btnsQuestion3.forEach((item) => {
            item.classList.remove('questionare__buy2_active');
        });

        item.classList.add('questionare__buy2_active');
    });
});
