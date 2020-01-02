ymaps.ready(init);

function init() {
    var center = [55.834729, 37.316798];
    var myMap = new ymaps.Map('map-inner', {
        center: center,
        // controls: [],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'

    });

    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark(center, {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
    	  balloonContent: 'Красногорск, ул. Народного ополчения, д. 2Б, корп. 2, оф. 16',
        hintContent: 'Красногорск, ул. Народного ополчения, д. 2Б, корп. 2, оф. 16'
    }, {
        // Опции.
        iconLayout: 'default#image',
        // iconImageHref: 'img/map-ic.png',
        // iconImageSize: [42, 42]
        // preset: 'twirl#violetIcon'
    });

    myMap.geoObjects.add(myPlacemark);
}
