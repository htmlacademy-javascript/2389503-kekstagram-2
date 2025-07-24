import { resetScale } from './scaling-image.js';
import { isEscapeKey } from './util.js';
import { isValid, resetValidation } from './validation.js';
import { resetEffects } from './image-effects.js';
import { sendData } from './api.js';
import { showMessage } from './notifications.js';
import { SubmitButtonText } from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const uploadField = uploadForm.querySelector('.img-upload__input');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const textDescriptionField = uploadForm.querySelector('.text__description');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');


const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
    uploadForm.reset();
  }
};

const onFocusFieldKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

export const showModal = (isShown = true) => {
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
  const file = uploadField.files[0];
  console.log(file.name);
};

uploadField.addEventListener('change', onUploadFieldChange);

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  showModal(false);
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(isValid()) {
    blockSubmitButton();
    const formData = new FormData(evt.target);

    sendData(formData)
      .then((response) => {
        if(response.ok) {
          showModal(false);
          showMessage(true, successMessage);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        showMessage(true, errorMessage);
      })
      .finally(() => unblockSubmitButton());
  }
});
