import { COMMENTS_PORTION, START_VALUE_COUNTER, START } from './constants.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const modal = document.querySelector('.big-picture');
const closeButton = modal.querySelector('.big-picture__cancel');
const photoPreview = modal.querySelector('.big-picture__img').querySelector('img');
const caption = modal.querySelector('.social__caption');
const likesCount = modal.querySelector('.likes-count');
const commentShownCount = modal.querySelector('.social__comment-shown-count');
const commentTotalCount = modal.querySelector('.social__comment-total-count');
const listOfComments = modal.querySelector('.social__comments');
const comment = modal.querySelector('.social__comment');
const commentsLoader = modal.querySelector('.social__comments-loader');

let localComments;
let renderedCommentsCount = START_VALUE_COUNTER;

const clearListOfComments = () => {
  listOfComments.innerHTML = '';
};

const showModal = (isShown = true) => {
  if (isShown) {
    document.body.classList.add('modal-open');
    modal.classList.remove('hidden');
  } else {
    document.body.classList.remove('modal-open');
    modal.classList.add('hidden');
  }
};

const renderStatistic = () => {
  commentShownCount.textContent = renderedCommentsCount;
};

const renderLoader = () => {
  if(localComments.length){
    commentsLoader.classList.remove('hidden');
  }else{
    commentsLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  localComments.splice(START, COMMENTS_PORTION).forEach(({ avatar, name, message }) => {
    const cloneComment = comment.cloneNode(true);
    const cloneCommentAvatar = cloneComment.querySelector('.social__picture');
    const cloneCommentText = cloneComment.querySelector('.social__text');
    cloneCommentAvatar.src = avatar;
    cloneCommentAvatar.alt = name;
    cloneCommentText.textContent = message;
    fragment.append(cloneComment);
    renderedCommentsCount++;
  });

  listOfComments.append(fragment);
  renderStatistic();
  renderLoader();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

const renderModal = ({ url, description, likes, comments }) => {
  photoPreview.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  localComments = [...comments];
  renderedCommentsCount = START_VALUE_COUNTER;
  renderComments();
};

const closeModal = () => {
  showModal(false);
  clearListOfComments();
};

export const openModal = (currentPhoto) => {
  showModal();
  renderModal(currentPhoto);
  setEscapeControl(closeModal);
};


closeButton.addEventListener('click', () => {
  closeModal();
  removeEscapeControl();
});
