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

const showModal = (isShown = true) => {
  console.log('Выполняется функция показа модального окна - showModal');
  if (isShown) {
    document.body.classList.add('modal-open');
    modal.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
  } else {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
    document.body.classList.remove('modal-open');
  }
};


const renderPartComments = (arr, start = 0, end = 5) => {
  const partComments = arr.slice(start , end);
  return partComments;
};

const renderComments = (comments) => {

  const fragment = document.createDocumentFragment();

  const initialRenderedComments = renderPartComments(comments);
  commentShownCount.textContent = initialRenderedComments.length;

  if(comments.length <= 5) {
    commentsLoader.classList.add('hidden');
  }

  initialRenderedComments.forEach(({ avatar, name, message }) => {
    const cloneComment = comment.cloneNode(true);
    const cloneCommentAvatar = cloneComment.querySelector('.social__picture');
    const cloneCommentText = cloneComment.querySelector('.social__text');
    cloneCommentAvatar.src = avatar;
    cloneCommentAvatar.alt = name;
    cloneCommentText.textContent = message;
    fragment.append(cloneComment);
  });

  listOfComments.append(fragment);

};

const renderModal = ({ url, description, likes, comments}) => {

  photoPreview.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  // commentShownCount.textContent = listOfComments.children.length;
  commentTotalCount.textContent = comments.length;

  renderComments(comments);
};

// Функция для отрисовки следующей части комментариев
const renderNextPartOfComments = () => {
  console.log('Отрисовать следующую порцию комментариев');
};

// Функция которая обновляет статистику
const refreshStatistics = () => {
  console.log('Обновить статистику');
};

// Функция которая отвечает за отображение кнопки
const showButton = () => {
  console.log('Прячем или показываем кнопку Загрузить ещё');
};

commentsLoader.addEventListener('click', () => {
// На кнопку нажали и у вас будет три действия:
// 1. Отрисовали следующую порцию комментариев. Либо сколько есть.
  renderNextPartOfComments();
  // 2. Далее обновляется статистика.
  refreshStatistics();
  // 3.  И принимается решение по кнопке: прятать её или показывать.
  showButton();
});

const clearListOfComments = () => {
  listOfComments.innerHTML = '';
};

clearListOfComments();

export const openModal = (currentPhoto) => {
  showModal();

  renderModal(currentPhoto);
};

const closeModal = () => {
  showModal(false);
  clearListOfComments();
};

// Подключаю обработчик клика на кнопку закрытия
closeButton.addEventListener('click', ()=> {
  // При клике модальное окно закрывается
  closeModal();
});
