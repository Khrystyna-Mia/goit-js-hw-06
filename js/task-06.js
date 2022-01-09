// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// 1. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2. Если введено подходящее количество символов, то
// border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// const input = document.getElementById("validation-input");
// const totalLength = input.getAttribute("data-length");
// const otherTotalLength = parseInt(totalLength, 16);

// input.addEventListener('blur', event => {
//     if (event.value.lengt === otherTotalLength) {
//         event.classList.add('valid');
//         event.classList.remove('invalid');
//     }

//     if (event.value.length === 0) {
//         event.classList.remove("valid");
//         event.classList.remove("invalid");
//     }

//     if (event.value.lengt !== otherTotalLength && event.value.lengt !== 0) {
//         event.classList.add("invalid");
//     }
// });
