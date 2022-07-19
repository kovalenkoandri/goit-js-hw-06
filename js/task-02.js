const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// В HTML есть пустой список ul#ingredients
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients
const mappedLi = ingredients.map((e, i) => {
    e = document.createElement('li');
    e.textContent = ingredients[i];
    e.classList.add('item');
  return e;
}); 
document.getElementById('ingredients').append(...mappedLi);
// const potatoes = document.createElement('li');
// potatoes.textContent = ingredients[0];
// potatoes.classList.add('item');
// const mushrooms = document.createElement('li');
// mushrooms.textContent = ingredients[1];
// mushrooms.classList.add('item');
// const garlic = document.createElement('li');
// garlic.textContent = ingredients[2];
// garlic.classList.add('item');
// const tomatos = document.createElement('li');
// tomatos.textContent = ingredients[3];
// tomatos.classList.add('item');
// const herbs = document.createElement('li');
// herbs.textContent = ingredients[4];
// herbs.classList.add('item');
// const condiments = document.createElement('li');
// condiments.textContent = ingredients[5];
// condiments.classList.add('item');
// document.getElementById('ingredients').append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
