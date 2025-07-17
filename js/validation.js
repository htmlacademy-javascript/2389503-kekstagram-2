import { isEmptyString } from './util.js';
import { REGEXP, MAX_COUNT_HASHTAGS, COMMENT_LENGTH, ServerAddresses } from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const textDescriptionField = uploadForm.querySelector('.text__description');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const getHashtags = (value) => value
  .toLowerCase()
  .split(' ')
  .filter((item) => item.length);

const validateNameHashtagsField = (value) => {
  if(isEmptyString(value)) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => REGEXP.test(item));
};
const getNameHashtagsErrorMessage = () => 'Хэштег состоит из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи';
pristine.addValidator(hashtagsField, validateNameHashtagsField, getNameHashtagsErrorMessage);

const validateCountHashtags = (value) => {
  if(isEmptyString(value)) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_COUNT_HASHTAGS;
};
const getCountHashtagsErrorMessage = () => `Максимальное допустимое количество хэштегов ${MAX_COUNT_HASHTAGS}`;

pristine.addValidator(hashtagsField, validateCountHashtags, getCountHashtagsErrorMessage);

const validateUniquenessHashtags = (value) => {
  const hashtags = getHashtags(value);
  const uniqueHashtags = [... new Set(hashtags)];

  return hashtags.length === uniqueHashtags.length;
};
pristine.addValidator(hashtagsField, validateUniquenessHashtags, 'Хэштеги повторяются');

const getTextDescriptionErrorMessage = () => `Превышено допустимое количество символов: не более ${COMMENT_LENGTH}`;

const validateTextDescriptionField = (value) => {
  if(isEmptyString(value)) {
    return true;
  }
  return value.length <= COMMENT_LENGTH;
};

pristine.addValidator(textDescriptionField, validateTextDescriptionField, getTextDescriptionErrorMessage);

uploadForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if(isValid) {
    const formData = new FormData(evt.target);

    fetch(
      ServerAddresses.SENDING,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

  }
});

export const resetValidation = () => {
  pristine.reset();
};
