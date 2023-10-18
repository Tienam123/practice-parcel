import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-msg';

populateTextArea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000));

/*
* - Останавливаем поведение по умолчанию
* - Убираем сообщение из хранилища
* - Очишаем форму
*/
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
* - Получаем значение поля
* - Сохраняем его в хранилище
* - Можно добавить throttle
*/
function onTextAreaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);

}

/*
* - Получаем значение из хранилища
* - Если там что-то было, обновляем DOM
*/
function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
