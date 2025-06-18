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

const renderComments = (comments) => {
  comments.forEach(({ avatar, name, message }) => {
    const cloneComment = comment.cloneNode(true);
    const cloneCommentAvatar = cloneComment.querySelector('.social__picture');
    const cloneCommentText = cloneComment.querySelector('.social__text');
    cloneCommentAvatar.src = avatar;
    cloneCommentAvatar.alt = name;
    cloneCommentText.textContent = message;
    listOfComments.append(cloneComment);
  });

};

const renderModal = (id, url, description, likes, comments) => {
  photoPreview.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  renderComments(comments);
  commentShownCount.textContent = listOfComments.children.length;
  // При открытии модального окна должно быть отображено 5 комментариев
  commentsLoader.addEventListener('click', () => {
    console.log(`Количество отображённых комментариев - ${commentShownCount.textContent} из ${commentTotalCount.textContent}`);


  });
};

const clearListOfComments = () => {
  listOfComments.innerHTML = '';
};

clearListOfComments();

export const openModal = ({ id, url, description, likes, comments }) => {
  showModal();
  renderModal(id, url, description, likes, comments);
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
