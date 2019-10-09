var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map($('.map')[0], {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.939008, 30.321048], 
        zoom: 17,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938657, 30.323273], {

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [231, 190],
        iconImageOffset: [-59, -208]
    });

myMap.geoObjects.add(myPlacemark); 

}