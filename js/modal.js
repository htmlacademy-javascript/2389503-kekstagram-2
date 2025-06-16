import { isEscapeKey } from './util.js';

const modal = document.querySelector('.big-picture');
const closeButton = modal.querySelector('.big-picture__cancel');
const photoPreview = modal.querySelector('.big-picture__img').querySelector('img');
const caption = modal.querySelector('.social__caption');
const likesCount = modal.querySelector('.likes-count');
const commentCount = modal.querySelector('.social__comment-count');
const commentShownCount = modal.querySelector('.social__comment-shown-count');
const commentTotalCount = modal.querySelector('.social__comment-total-count');
const listOfComments = modal.querySelector('.social__comments');
const comment = modal.querySelector('.social__comment');
const commentsLoader = modal.querySelector('.social__comments-loader');
const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
  }
};

export const openModal = (id, url, description, likes, comments) => {
  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  photoPreview.src = url;
  caption.textContent = description;
  commentCount.classList.add('hidden');
  likesCount.textContent = likes;
  commentShownCount.textContent = listOfComments.children.length;
  commentTotalCount.textContent = comments.length;
  commentsLoader.classList.add('hidden');
  for (let i = 0; i < comments.length; i++) {
    const cloneComment = comment.cloneNode(true);
    const cloneCommentAvatar = cloneComment.querySelector('.social__picture');
    const cloneCommentText = cloneComment.querySelector('.social__text');
    cloneCommentAvatar.src = comments[i].avatar;
    cloneCommentAvatar.alt = comments[i].name;
    cloneCommentText.textContent = comments[i].message;
    listOfComments.append(cloneComment);
  }
};

const closeModal = () => {
  // 1. Скрыть окно (Добавить класс hidden)
  modal.classList.add('hidden');
  // 2. Удалить обработчики для закрытия (на всяком документе)
  document.removeEventListener('keydown', onDocumentKeydown);
  // 3. Прочая логика
  document.body.classList.remove('modal-open');
};

// Подключаю обработчик клика на кнопку закрытия
closeButton.addEventListener('click', ()=> {
  // При клике модальное окно закрывается
  closeModal();
});
