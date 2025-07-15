import { isEmptyString } from './util.js';
import { REGEXP, MAX_COUNT_HASHTAGS, COMMENT_LENGTH } from './constants.js';

const uploadForm = document.querySelector('.img-upload__overlay');
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
// Получаем ошибку, если не проходим валидацию именования хэштега
const getNameHashtagsErrorMessage = () => 'Хэштег состоит из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи';
// Валидация именования хэштега
pristine.addValidator(hashtagsField, validateNameHashtagsField, getNameHashtagsErrorMessage);

const validateCountHashtags = (value) => {
  // Если у нас строка пустая или одни пробелы то валидацию проходим
  if(isEmptyString(value)) {
    return true;
  }
  // Получаю "очищенный" массив со строками
  const hashtags = getHashtags(value);
  // Количество хэштегов не более MAX_COUNT_HASHTAGS
  return hashtags.length <= MAX_COUNT_HASHTAGS;
};
// Если количество хэштегов превышено, то выводится данное сообщение об ошибке
const getCountHashtagsErrorMessage = () => `Максимальное допустимое количество хэштегов ${MAX_COUNT_HASHTAGS}`;
// Валидация количества хэштегов
pristine.addValidator(hashtagsField, validateCountHashtags, getCountHashtagsErrorMessage);

const validateUniquenessHashtags = (value) => {
  // Получаю "очищенный" массив со строками
  const hashtags = getHashtags(value);
  const uniqueHashtags = [... new Set(hashtags)];

  return hashtags.length === uniqueHashtags.length;
};
// Вадиция уникальности имён хэштегов
pristine.addValidator(hashtagsField, validateUniquenessHashtags, 'Хэштеги повторяются');

const getTextDescriptionErrorMessage = () => `Превышено допустимое количество символов: не более ${COMMENT_LENGTH}`;

const validateTextDescriptionField = (value) => {
  // Если у нас строка пустая или одни пробелы то валидацию проходим
  if(isEmptyString(value)) {
    return true;
  }
  return value.length <= COMMENT_LENGTH;
};

// Валидация длины комментария, не больше 140 символов
pristine.addValidator(textDescriptionField, validateTextDescriptionField, getTextDescriptionErrorMessage);

uploadForm.addEventListener('submit', (evt) => {
  if(!pristine.validate()) {
    evt.preventDefault();
  }
});

export const resetValidation = () => {
  pristine.reset();
};
