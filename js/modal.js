import { isEscapeKey } from './util.js';

// Нахожу модальное окно в DOM и записываю в переменную
// Экспортирую, чтобы при клике окно открывалось
export const modal = document.querySelector('.big-picture');

// Нахожу кнопку закрытия на модальном окне
const closeButton = modal.querySelector('.big-picture__cancel');

// Подключаю обработчик клика на кнопку закрытия
closeButton.addEventListener('click', ()=> {
  // При клике модальное окно закрывается
  modal.classList.add('hidden');
});

// Подключаю обработчик нажатия на клавишу
document.addEventListener('keydown', (evt) => {
  // При нажатии на клавишу ESC модальное окно закрывается
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
  }
});
