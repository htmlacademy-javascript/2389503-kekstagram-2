import { resetScale } from './scaling-image.js';
import { isEscapeKey } from './util.js';
import { resetValidation } from './validation.js';
import { resetEffects } from './image-effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadField = uploadForm.querySelector('.img-upload__input');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const textDescriptionField = uploadForm.querySelector('.text__description');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');


const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
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

    uploadForm.reset();
    resetScale();
    resetValidation();
    resetEffects();
  }
};

const onUploadFieldChange = () => {
  showModal(true);
};

uploadField.addEventListener('change', onUploadFieldChange);

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  showModal(false);
});
