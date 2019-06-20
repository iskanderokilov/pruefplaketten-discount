var countCssColours = 5; // Количество вариаций цвета
var h = document.querySelector('.hero-caption p');

var spans = "";
h.innerText.split('').forEach(function (ch) {
  var colorIndex = Math.floor(Math.random() * countCssColours + 1);
  spans += '<span class="color-'+colorIndex+'">'+ch+'</span>';
});

// Добавляем элементы
h.innerHTML = spans;