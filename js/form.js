import { isEscapeKey } from './util';
const uploadForm = document.querySelector('.img-upload__form');
const uploadField = uploadForm.querySelector('.img-upload__input');
const modal = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
// const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');
// const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
// const scaleControlInput = uploadForm.querySelector('.scale__control--value');

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

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const validateNameHashtagsField = (value) => {
  // введён невалидный хэштег
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  // Разбиваю строку на хэштеги с помощью шаблона " " - пробела и помещаю из в массив
  const array = value.split(' ');
  // Итерируюсь по полученному массиву с хэштэгами и проверяю соответствуют ли все хэштеги regexp - ругулярному выражению
  // Если хотя бы один хэштег не соответствует regexp, то поле не проходит валидацию
  return array.every((item) => regexp.test(item));
};

pristine.addValidator(hashtagsField, validateNameHashtagsField, 'Введён невалидный хэштег');

const validateNumberOfHashtags = (value) => {
  const array = value.split(' ');
  return array.length <= 5;
};

pristine.addValidator(hashtagsField, validateNumberOfHashtags, 'Превышено количество хэштегов');

const validateRepeatingHashtags = (value) => {
  const array = value.split(' ');

};

pristine.addValidator(hashtagsField, validateRepeatingHashtags, 'Хэштеги повторяются');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

