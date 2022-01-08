// Счетчик состоит из спана и кнопок,
// которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// 1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3. Обновляй интерфейс новым значением переменной counterValue.

const btn = {
    decr: document.querySelector("[data-action='decrement']"),
    incr: document.querySelector("[data-action='increment']"),
    span: document.querySelector('#value'),
};

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    btn.span.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    btn.span.textContent = counterValue;
};

btn.decr.addEventListener('click', decrement);
btn.incr.addEventListener('click', increment);
