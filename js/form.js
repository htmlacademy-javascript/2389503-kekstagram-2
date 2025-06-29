// Данный модуль отвечает за работу с формой
// Нахожу форму
const uploadForm = document.querySelector('.img-upload__form');
// Нахожу поле для загрузки файла
const imgUploadField = uploadForm.querySelector('.img-upload__input');
console.log(imgUploadField);
// Подключаю к полю для загрузки файла слушатель события "change"
imgUploadField.addEventListener('click', () => {
  console.log('Click!');
});
