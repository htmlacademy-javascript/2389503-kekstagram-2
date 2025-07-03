import { isEscapeKey, isEmptyString } from './util';
import { REGEXP, MAX_COUNT_HASHTAGS } from './constants';
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

// Функция принимает строку/введённый текст пользователем
// 1. Переводит текст в нижний регистр (можно и вверхний тут неважно)
// Для чего? Для того чтобы далее реализовать проверку на уникальность хэштегов
// Потому что JavaScript регистрозависимый язык. ('а' и 'А' - это разные символы)
// 2. Собирает массив, состоящий из строчных элементов, разбитых по шаблону - пробел (' ')
// 3. Полученный массив, который содержит строчные элементы, и очищает (фильтрует) его от строчных элементов,
// у которых длина отсутствует, то есть пустых строк (' ')
const getHashtags = (value) => value
  .toLowerCase()
  .split(' ')
  .filter((item) => item.length);

// Функция-обработчик - определяет правильность ввода хэштега
const validateNameHashtagsField = (value) => {
  // Если у нас строка пустая или одни пробелы то валидацию проходим
  if(isEmptyString(value)) {
    return true;
  }
  // Получаю "очищенный" массив со строками
  const hashtags = getHashtags(value);
  // Итерируюсь по полученному массиву со строками и проверяю их на соответствие  regexp - ругулярному выражению
  // Если хотя бы один строчный элемент не соответствует regexp, то поле не проходит валидацию
  return hashtags.every((item) => REGEXP.test(item));
};

pristine.addValidator(hashtagsField, validateNameHashtagsField, 'Введён невалидный хэштег');

const validateCountHashtags = (value) => {
  // Если у нас строка пустая или одни пробелы то валидацию проходим
  if(isEmptyString(value)) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_COUNT_HASHTAGS;
};

const getCountHashtagsErrorMessage = () => `Максимальное допустимое количество хэштегов ${MAX_COUNT_HASHTAGS}`;

pristine.addValidator(hashtagsField, validateCountHashtags, getCountHashtagsErrorMessage);

// const validateRepeatingHashtags = (value) => {
//   const array = value.split(' ');

// };

// pristine.addValidator(hashtagsField, validateRepeatingHashtags, 'Хэштеги повторяются');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

