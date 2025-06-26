import { isEscapeKey } from './util.js';

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
// Выношу переменную в модальную область видимости
// В ней будут храниться данные для отображения комментариев
let localComments;
// Счётчик отображённых комментариев
let counterOfRenderedComments = 0;

const renderComments = (comments) => {

  const fragment = document.createDocumentFragment();
  // Делаю копию массива, который я получаю на вход
  localComments = [...comments];
  // Использую метод splice, который возвращает "вырезанный" кусочек комментариев
  // И по нему итерирусь и заполняю комментарии содержимым
  localComments.splice(0, 5).forEach(({ avatar, name, message }) => {
    const cloneComment = comment.cloneNode(true);
    const cloneCommentAvatar = cloneComment.querySelector('.social__picture');
    const cloneCommentText = cloneComment.querySelector('.social__text');
    cloneCommentAvatar.src = avatar;
    cloneCommentAvatar.alt = name;
    cloneCommentText.textContent = message;
    fragment.append(cloneComment);
    // После добавления наполненного данными комментария во фрагмент увеличиваю счётчик на 1
    counterOfRenderedComments++;
  });
  // Подставляю актуальное значение счётчика отображённых комментариев
  commentShownCount.textContent = counterOfRenderedComments;

  listOfComments.append(fragment);
  // Важный момент.
  // Как мне определить, что показаны все комментарии?
  // При использовании метода splice я выкусываю кусочек из массива localComments
  // Соответственно длина входящего массива comments уменьшается на количество элементов,
  // которое я выкусил
  // Но я не понимаю почему так происходит

  if(comments.length > 5) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderModal = ({ url, description, likes, comments}) => {
  photoPreview.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  renderComments(comments);
};

commentsLoader.addEventListener('click', () => {
  renderComments(localComments);
});

const clearListOfComments = () => {
  listOfComments.innerHTML = '';
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
    clearListOfComments();
    counterOfRenderedComments = 0;
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

export const openModal = (currentPhoto) => {
  showModal();
  renderModal(currentPhoto);
};

const closeModal = () => {
  showModal(false);
  clearListOfComments();
  // При закрытии модального окна сбрасываю счётчик до 0
  counterOfRenderedComments = 0;
};

// Подключаю обработчик клика на кнопку закрытия
closeButton.addEventListener('click', ()=> {
  // При клике модальное окно закрывается
  closeModal();
});
