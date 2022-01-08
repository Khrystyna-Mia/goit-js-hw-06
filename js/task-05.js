// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.getElementById("name-input");

input.oninput = function () {
    document.getElementById("name-output").innerHTML = input.value || "Anonymous";
};

/* Другой вариант решения задачи */ 

// const input = document.getElementById("name-input");
// const output = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//         output.textContent = 'Anonymous';
//     } else {
//         output.textContent = input.value;
//     }
// };