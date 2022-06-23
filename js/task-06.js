// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
const input = document.getElementById('validation-input');
function validation() {
    input.classList.add('invalid');
    input.value.length === 6
      ? input.classList.replace('invalid', 'valid')
      : input.classList.replace('valid', 'invalid');
    console.log(input.classList);
    
};
input.addEventListener('blur', validation);