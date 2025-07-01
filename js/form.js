import { isEscapeKey } from './util';
const uploadForm = document.querySelector('.img-upload__form');
const uploadField = uploadForm.querySelector('.img-upload__input');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    modal.classList.add('hidden');
  }
};

const showModal = (isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  } else {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const onUploadFieldChange = () => {
  showModal(true);
};

uploadField.addEventListener('change', onUploadFieldChange);

closeButton.addEventListener('click', () => {
  showModal(false);
  uploadField.value = '';
});
