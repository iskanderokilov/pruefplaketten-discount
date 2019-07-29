const countCssColours = 5; // Количество вариаций цвета

const h = document.querySelector('.hero-caption p');
// Создаём элементы для каждой буквы
let spans = [];
h.innerText.split('').forEach(ch => {
  const el = document.createElement('span');
  el.innerText = ch;
  const colorIndex = Math.floor(Math.random() * countCssColours + 1);
  el.classList.add(`color-${colorIndex}`);
  spans.push(el);
})
// Добавляем элементы
h.innerHTML = '';
h.append(...spans);

// sticky nav und header scripts
 window.onscroll = function() {fixTopElements()};
      var header = document.getElementById("fix-on-scroll-header");
      var nav = document.getElementById("navigation");
      
      function fixTopElements() {
        if (window.pageYOffset > 33) { // 33px ist die Höhe vom header-top - Leiste
          header.classList.add("sticky-header");
          nav.classList.add("sticky-nav");
          } else {
          header.classList.remove("sticky-header");
          nav.classList.remove("sticky-nav");
        }
      }