// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulList = document.querySelector('#ingredients');
const ulList = document.getElementById("ingredients");

const foodIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    ulList.appendChild(itemEl);
    
    // console.log(itemEl);

    return itemEl;
  });
};

const ingredientsEl = foodIngredientsEl(ingredients);
ulList.append(...ingredientsEl);

console.log(ingredientsEl);


//  const ingredientsEl = ingredients.map(ingredient => {
//    const itemEl = document.createElement('li');
//    itemEl.textContent = ingredient;
//    itemEl.classList.add('item');
//    ulList.append(itemEl);

//    return itemEl;
//  });

//  console.log(ingredientsEl);
//  ulList.append(...ingredientsEl);

