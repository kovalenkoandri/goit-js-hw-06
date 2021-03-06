// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
const btn = document.querySelector('.change-color');
const spn = document.querySelector('.color');
btn.addEventListener('click', onClick);
function onClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spn.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
