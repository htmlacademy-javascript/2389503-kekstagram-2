import { isEscapeKey } from './util';
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadField = uploadForm.querySelector('.img-upload__input');
const imgUploadModal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    imgUploadModal.classList.add('hidden');
  }
};

const showModal = (isShown = true) => {
  if (isShown) {
    imgUploadModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  } else {
    imgUploadModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const onImgUploadFieldChange = () => {
  showModal(true);
};

imgUploadField.addEventListener('change', onImgUploadFieldChange);

closeButton.addEventListener('click', () => {
  showModal(false);
});
