// Данный модуль отвечает за работу с формой
//
// Нахожу форму
const uploadForm = document.querySelector('.img-upload__form');
// Нахожу поле для загрузки файла
const imgUploadField = uploadForm.querySelector('.img-upload__input');
// Нахожу элемент формы для редактирования изображения - модальное окно
const imgUploadModal = uploadForm.querySelector('.img-upload__overlay');
// Функция-обработчик
const onImgUploadFieldChange = () => {
  // Открываю модальное окно
  imgUploadModal.classList.remove('hidden');
  // Выключаю прокрутку в фоне
  document.body.classList.add('modal-open');
};
// Подключаю к полю для загрузки файла слушатель события "change"
imgUploadField.addEventListener('change', onImgUploadFieldChange);
