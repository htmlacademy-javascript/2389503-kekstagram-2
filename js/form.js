import { isEscapeKey } from './util';

export const uploadForm = document.querySelector('.img-upload__form');
const uploadField = uploadForm.querySelector('.img-upload__input');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
export const hashtagsField = uploadForm.querySelector('.text__hashtags');
// Нахожу поле для комментария в DOM
export const textDescriptionField = uploadForm.querySelector('.text__description');
// const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');
// const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
// const scaleControlInput = uploadForm.querySelector('.scale__control--value');

// Очищает поля
const clearFields = () => {
  uploadField.value = '';
  hashtagsField.value = '';
  textDescriptionField.value = '';
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
    clearFields();
  }
};

const onFocusFieldKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const showModal = (isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    hashtagsField.addEventListener('keydown', onFocusFieldKeydown);
    textDescriptionField.addEventListener('keydown', onFocusFieldKeydown);
  } else {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    hashtagsField.removeEventListener('keydown', onFocusFieldKeydown);
    textDescriptionField.removeEventListener('keydown', onFocusFieldKeydown);
  }
};

const onUploadFieldChange = () => {
  showModal(true);
};

uploadField.addEventListener('change', onUploadFieldChange);


closeButton.addEventListener('click', () => {
  showModal(false);
  clearFields();
});
