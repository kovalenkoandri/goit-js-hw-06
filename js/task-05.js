// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
let input = document.getElementById('name-input');
let output = document.getElementById('name-output');
input.addEventListener('input', fan => {
   input.value.length === 0
    ? (output.textContent = 'Anonymous')
    : (output.textContent = fan.target.value);
});
//target vs currentTarget