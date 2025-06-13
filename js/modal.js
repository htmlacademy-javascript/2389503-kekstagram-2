import { isEscapeKey } from './util.js';

const modal = document.querySelector('.big-picture');
const closeButton = modal.querySelector('.big-picture__cancel');
const photoPreview = modal.querySelector('.big-picture__img').querySelector('img');
const likesCount = modal.querySelector('.likes-count');
const commentShownCount = modal.querySelector('.social__comment-shown-count');
const commentTotalCount = modal.querySelector('.social__comment-total-count');
const shownComments = modal.querySelector('.social__comments');
// Функция-обработчик нажатия клавиши ESCAPE
const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
  }
};

export const openModal = (id, url, description, likes, comments) => {
  // 1. Показать окно (Нужно удалить какой-то класс hidden)
  modal.classList.remove('hidden');
  // 2. Добавить обработчики для закрытия (как только окно появилось на документик нужно повесить обработчик)
  document.addEventListener('keydown', onDocumentKeydown);
  // 3. Прочая логика (Если будет)
  photoPreview.src = url;
  likesCount.textContent = likes;
  commentShownCount.textContent = shownComments.children.length;
  commentTotalCount.textContent = comments.length;

};

const closeModal = () => {
  // 1. Скрыть окно (Добавить класс hidden)
  modal.classList.add('hidden');
  // 2. Удалить обработчики для закрытия (на всяком документе)
  document.removeEventListener('keydown', onDocumentKeydown);
  // 3. Прочая логика
};

// Подключаю обработчик клика на кнопку закрытия
closeButton.addEventListener('click', ()=> {
  // При клике модальное окно закрывается
  closeModal();
});
