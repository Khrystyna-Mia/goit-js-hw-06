// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.


const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});

