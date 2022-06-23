// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
const input = document.querySelector('#font-size-control');
const size = document.getElementById('text');
input.addEventListener('input', (e) => {
    console.log(e.target.value);
    size.style.fontSize = `${e.target.value}px`;
    console.log(size);
})