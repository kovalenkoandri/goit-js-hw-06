// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0; 
let incr = document.querySelector(`[data-action*="incr"]`);
let decr = document.querySelector(`[data-action*="decr"]`);
let display = document.querySelector('#value');

incr.addEventListener('click', () => {
    counterValue += 1;
    display.textContent = counterValue; 
});
decr.addEventListener('click', () => {
    counterValue -= 1;
    display.textContent = counterValue; 
});