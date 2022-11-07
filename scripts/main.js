//var myHeading = document.querySelector('h1');
// myHeading.textContent = 'TRIX';

/*Итак, ваш заголовок текста был изменён c "ТРИКС" на "TRIX" с помощью JavaScript. 
Мы сделали это с помощью вызова функции querySelector(), захватив ссылку на наш 
заголовок и сохранив её в переменной, названной myHeading. Это очень похоже на то, 
что мы делали в CSS с помощью селекторов. Если вы хотите что-то сделать с элементом, 
то для начала вам нужно его выбрать.
После этого, вы устанавливаете значение переменной myHeading в textContent свойство 
(которое представляет собой контент заголовка) "TRIX".*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/trix1.png') {
    myImage.setAttribute ('src','images/trix2.png');
  } else {
    myImage.setAttribute ('src','images/trix1.png');
  }
}


// Добавление персонального приветственного сообщения

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Пожалуйста, введите своё имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Страница для тебя, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Доброго времени суток, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  
