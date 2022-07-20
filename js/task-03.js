const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
// Используй массив объектов images для создания элементов < img > вложенных в < li >.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const imgLi = document.querySelector('.gallery');
const mappedImg = images
  .map(
    e =>
      `<li class='hero__li'><img class="hero__img" src="${e.url}" alt="${e.alt}"></li>`
  )
  .join('');
imgLi.insertAdjacentHTML(
  'afterbegin',
  mappedImg
);
imgLi.style.cssText = `
  list-style: none;
	padding: 0;
  max-width: 2560px;
  background-color: LightGray;
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20px, 2560px));
	margin-right: auto;
	margin-left: auto;`;
const img = imgLi.querySelectorAll('.hero__img');
img.forEach(e => e.style.cssText = `
  display: block;  
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: cover;`);