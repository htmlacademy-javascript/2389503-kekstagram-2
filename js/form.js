import { resetScale } from './scaling-image.js';
import { isValid, resetValidation } from './validation.js';
import { resetEffects } from './image-effects.js';
import { sendData } from './api.js';
import { showMessage } from './notifications.js';
import { SubmitButtonText } from './constants.js';
import { renderPreview } from './image-preview.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const uploadField = uploadForm.querySelector('.img-upload__input');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const textDescriptionField = uploadForm.querySelector('.text__description');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

export const showModal = (isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');

    uploadForm.reset();
    resetScale();
    resetValidation();
    resetEffects();
  }
};

const canCloseModal = () => !(document.activeElement === hashtagsField || document.activeElement === textDescriptionField);

const onUploadFieldChange = () => {
  showModal(true);
  renderPreview();
  setEscapeControl(() => {
    showModal(false);
  }, canCloseModal);
};

uploadField.addEventListener('change', onUploadFieldChange);

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  showModal(false);
  removeEscapeControl();
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
          removeEscapeControl();
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
