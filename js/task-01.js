// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const listItems = document.body.querySelectorAll('.item');
console.log('Number of categories:', listItems.length, '\n '); 
console.log('Category:', document.body.querySelectorAll('ul'));
listItems.forEach((element) => {
  console.log('Category:', element.children[0].textContent);
  console.log('Category:', element.children[1].querySelectorAll('li').length, '\n\n');
});
// listItems.forEach((e, i) => {
//   console.log('Category:', document.body.querySelectorAll('h2')[i].textContent);
//   console.log('Category:', document.body.querySelectorAll('ul')[i+1].querySelectorAll('li').length, '\n\n');
// });
// console.log('Category:', document.body.querySelectorAll('h2')[0].textContent);
// console.log('Category:', document.body.querySelectorAll('ul')[1].getElementsByTagName('li').length, '\n\n');
// console.log('Category:', document.body.querySelectorAll('h2')[1].textContent);
// console.log('Category:', document.body.querySelectorAll('ul')[2].querySelectorAll('li').length, ' \n ');
// console.log('Category:', document.body.querySelectorAll('h2')[2].textContent);
// console.log('Category:', document.body.querySelectorAll('ul')[3].children.length);

