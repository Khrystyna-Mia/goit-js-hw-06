// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// 1. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2. Если введено подходящее количество символов, то
// border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.getElementById("validation-input");

input.onblur = function () {
    console.log(input.value.length);
    
    if (input.getAttribute('data-length') < input.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
};
