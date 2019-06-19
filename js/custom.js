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