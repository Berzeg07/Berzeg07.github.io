"use strict";

let nameMap = undefined;
let objectManager = undefined;
let group = undefined;
let district = undefined;
const btnSwitch = [].slice.call(document.querySelectorAll('.infrastructure_btn'));
const filterElements = [].slice.call(document.querySelectorAll('.infrastructure_item'));

class Map {
    constructor(name, zoom, element, attr = '') {
        this.name = name;
        this.zoom = zoom;
        this.element = element;
        this.attr = attr;
        this.latlag = element.getAttribute('data-latlag') || '55.834977,37.317508';
        this.lat = this.latlag.split(',')[0];
        this.lag = this.latlag.split(',')[1];

        const initMap = () => {
            nameMap = this.name;
            nameMap = new ymaps.Map(this.element, {
                center: [this.lat, this.lag],
                zoom: this.zoom,
                controls: []
            });
            nameMap.behaviors.disable(['scrollZoom']);
            let top = 0;
            if (this.name === 'indexMap' && window.innerWidth >= 1024) top = 68;
            let zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small",
                    position: {
                        top: 10 + top,
                        right: 10,
                        left: "auto"
                    }
                }
            });
            let fullScreenControl = new ymaps.control.FullscreenControl({
                options: {
                    position: {
                        top: 80 + top,
                        right: 10
                    }
                }
            });
            nameMap.controls.add(zoomControl).add(fullScreenControl); // РЎРѕР·РґР°РЅРёРµ РјР°РєРµС‚Р° Р±Р°Р»СѓРЅР°

            let MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="Balloon Balloon-top">' + '<a class="Balloon_close" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></a>' + '<div class="Balloon_arrow"></div>' + '<div class="Balloon_inner">' + '$[[options.contentLayout observeSize maxWidth=235 maxHeight=350]]' + '</div>' + '</div>', {
                build: function() {
                    this.constructor.superclass.build.call(this);
                    this._$element = $('.Balloon', this.getParentElement());
                    this.applyElementOffset();

                    this._$element.find('.Balloon_close').on('click', $.proxy(this.onCloseClick, this));
                },
                clear: function() {
                    this._$element.find('.Balloon_close').off('click');

                    this.constructor.superclass.clear.call(this);
                },
                onSublayoutSizeChange: function() {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if (!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();
                    this.events.fire('shapechange');
                },
                applyElementOffset: function() {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.Balloon_arrow')[0].offsetHeight)
                    });
                },
                onCloseClick: function(e) {
                    e.preventDefault();
                    this.events.fire('userclose');
                },
                getShape: function() {
                    if (!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top],
                        [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.Balloon_arrow')[0].offsetHeight]
                    ]));
                },
                _isElement: function(element) {
                    return element && element[0] && element.find('.Balloon_arrow')[0];
                }
            }); // РЎРѕР·РґР°РЅРёРµ РІР»РѕР¶РµРЅРЅРѕРіРѕ РјР°РєРµС‚Р° СЃРѕРґРµСЂР¶РёРјРѕРіРѕ Р±Р°Р»СѓРЅР°.

            let MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<h3 class="Balloon_title">$[properties.balloonHeader]</h3>' + '<div class="Balloon_content">$[properties.balloonContent]</div>');
            district = new ymaps.Placemark([this.lat, this.lag], {}, {
                iconLayout: "default#image",
                iconImageHref: "https://bruschaty.ru/img/icon_map/home.png",
                iconImageSize: [121, 147],
                iconImageOffset: [-60, -140]
            });
            objectManager = new ymaps.ObjectManager({});
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);
            objectManager.objects.options.set('pane', 'balloon');
            objectManager.objects.events.add('click', function(e) {
                e.get('target').options.set('zIndex', 1000);
                var objectId = e.get('objectId');

                if (objectManager.objects.balloon.isOpen(objectId)) {
                    e.get('target').options.set('zIndex', 0);
                    objectManager.objects.balloon.close();
                }
            });

            objectManager.objects.events.add('mouseenter', function(e) {
                e.get('target').options.set('zIndexHover', 1000);
            });

            objectManager.objects.options.set('balloonOffset', [98, 7]);
            objectManager.objects.options.set('balloonLayout', MyBalloonLayout);
            objectManager.objects.options.set('balloonContentLayout', MyBalloonContentLayout);
            nameMap.geoObjects.add(district).add(objectManager);
            $.ajax({
                url: `${this.element.getAttribute(this.attr)}`
            }).done(function(data) {
                objectManager.add(data);
            });
            // ymapsTouchScroll(nameMap);
        };

        ymaps.ready(initMap);
    }

    switchDisplayMarkers() {
        const fillterList = document.querySelector('.infrastructure_list');
        btnSwitch.forEach(el => {
            el.addEventListener('click', e => {
                for (let i = 0; i < btnSwitch.length; i++) {
                    if (btnSwitch[i].classList.contains('active')) {
                        btnSwitch[i].classList.remove('active');
                    }
                }

                el.classList.add('active');

                if (el.classList.contains('infrastructure_btnHide')) {
                    nameMap.geoObjects.remove(objectManager); // fillterList.classList.add('infrastructure_list-disbaled');

                    for (let i = 0; i < filterElements.length; i++) {
                        filterElements[i].classList.add('infrastructure_item-disbaled');
                    }
                } else if (el.classList.contains('infrastructure_btnShow')) {
                    nameMap.geoObjects.add(objectManager); // fillterList.classList.remove('infrastructure_list-disbaled');

                    objectManager.setFilter('');

                    for (let i = 0; i < filterElements.length; i++) {
                        filterElements[i].classList.remove('infrastructure_item-disbaled');
                    }
                }
            });
        });
    }

    filtration() {
        filterElements.forEach(el => {
            el.addEventListener('click', () => {
                if (nameMap.geoObjects.getLength() == 1) {
                    nameMap.geoObjects.add(objectManager);
                }

                el.classList.toggle('infrastructure_item-disbaled');
                let types = '';
                filterElements.forEach(fElem => {
                    if (!fElem.classList.contains('infrastructure_item-disbaled')) {
                        const group = fElem.getAttribute('data-group');

                        if (types === '') {
                            types += `properties.group == "${group}"`;
                        } else {
                            types += ` || properties.group == "${group}"`;
                        }
                    }
                });
                objectManager.setFilter(types);

                for (let i = 0; i < btnSwitch.length; i++) {
                    btnSwitch[i].classList.remove('active');
                }
            });
        });
    }

    contacts() {
        const initContactsMap = () => {
            const btnTab = [].slice.call(document.querySelectorAll('.contacts_tab'));
            let pinActive = undefined;
            let pin = undefined;
            nameMap.geoObjects.remove(district);

            const coordinates = (coordinatesActive_lat, coordinatesActive_lng, coordinates_lat, coordinates_lng) => {
                pinActive = new ymaps.Placemark([coordinatesActive_lat, coordinatesActive_lng], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "img/home.png",
                    iconImageSize: [121, 147],
                    iconImageOffset: [-60, -150]
                });
                pin = new ymaps.Placemark([coordinates_lat, coordinates_lng], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "img/pin.png",
                    iconImageSize: [50, 61]
                });
                nameMap.geoObjects.add(pinActive).add(pin);
            };

            const sizeMarker = () => {
                if (elHTML.clientWidth < 767) {
                    pinActive.options.set({
                        iconImageSize: [85, 103],
                        iconImageOffset: [-42, -110]
                    });
                    pin.options.set({
                        iconImageSize: [35, 43]
                    });
                } else {
                    pinActive.options.set({
                        iconImageSize: [121, 147],
                        iconImageOffset: [-60, -150]
                    });
                    pin.options.set({
                        iconImageSize: [50, 61]
                    });
                }
            };

            coordinates(55.834729, 37.316798, 55.834977, 37.317508);

            if (elHTML.clientWidth < 767) {
                sizeMarker();
            }

            btnTab.forEach(el => {
                el.addEventListener('click', () => {
                    nameMap.geoObjects.remove(pinActive).remove(pin);

                    if (el.getAttribute('data-position') === 'object') {
                        coordinates(55.834977, 37.317508, 55.834729, 37.316798);
                        sizeMarker();
                    } else if (el.getAttribute('data-position') === 'office') {
                        coordinates(55.834729, 37.316798, 55.834977, 37.317508);
                        sizeMarker();
                    }
                });
            });
        };

        ymaps.ready(initContactsMap);
    }

}

const mapContainer = document.getElementById('map');
let map = new Map('infrastructureMap', 15, mapContainer, 'data-markers');
map.switchDisplayMarkers();
map.filtration();
