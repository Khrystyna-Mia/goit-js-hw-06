// Обработка отправки формы form.login-form должна быть по событию submit.
// 1. При отправке формы страница не должна перезагружаться.
// 2. Если в форме есть незаполненные поля,
//выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 3. Если пользователь заполнил все поля и отправил форму,
//собери значения полей в обьект, где имя поля будет именем свойства,
//а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
//4. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preverentDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//        return alert("Please fill in all the fields!");
//     }
  
//     console.log(`Email: ${email.value}, 
//     Password: ${password.value}`);
//     event.currentTarget.reset();
// }

