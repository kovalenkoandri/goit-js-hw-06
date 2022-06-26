function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
(function createBoxes(amount) {
  const input = document.querySelector('[type="number"]');
  const boxes = document.querySelector('#boxes');
  const create = document.querySelector('[data-create]');
  const destroy = document.querySelector('[data-destroy]');
  create.addEventListener('click', onClickCreate);
  function onClickCreate() {
    amount = Number(input.value);
    if ((amount === 0) || (amount < 0) || (amount > 100) || (!Number.isInteger(amount)))  {
      alert('enter number from 1 to 100');
      return;
    }
    const el = [],
      ar = [];
    for (let i = 0; i < amount; i += 1) ar.push(i);
    let acum = `30px`;
    for (let i = 0; i < ar.length; i += 1) {
      let divN = document.createElement('div');
      divN.style.width = acum;
      divN.style.height = acum;
      divN.style.backgroundColor = getRandomHexColor();
      el.push(divN);
      acum = `calc(${acum} + 10px)`;
    }
    boxes.append(...el);
  }
  destroy.addEventListener('click', onClickDestroy);
  function onClickDestroy(event) {
    boxes.replaceChildren();
    input.value = '';
  }
})();
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
