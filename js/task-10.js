// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//1. Размеры самого первого <div> - 30px на 30px.
//2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//3. Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


const btnCrt = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

btnCrt.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const divSize = 30;
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const size = divSize + i * 10;
    const div = document.createElement("div");
    
    div.style.cssText += `width: ${size}px; height: ${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(div);
  };

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

