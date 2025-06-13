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
