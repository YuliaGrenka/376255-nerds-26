var myMap;
var writeLink = document.querySelector(".button-write");
var writeOverlay = document.querySelector(".modal-overlay");
var writePopup = document.querySelector(".modal");
var writeClose = writePopup.querySelector(".modal-close");
var writeLogin = writePopup.querySelector("[name=login]");
var writeEmail = writePopup.querySelector("[name=email]");
var writeMessage = writePopup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
var writeForm = writePopup.querySelector("form");

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



writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  writePopup.classList.add("modal-animation");
  writeOverlay.classList.add("modal-show");
  if (storage) {
    writeLogin.value = storage;
    writeEmail.focus();
  } else {
    writeLogin.focus();  
  }
  
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-animation");
  writeOverlay.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeOverlay.addEventListener("click", function (evt) {
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-animation");  
  writeOverlay.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
 
  if (!writeLogin.value || !writeEmail.value || !writeMessage.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");  
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", writeLogin.value);
    }
  }  
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopup.classList.contains("modal-show")){
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-animation");
      writeOverlay.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});
