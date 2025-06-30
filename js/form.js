import { isEscapeKey } from './util';
// Данный модуль отвечает за работу с формой
//
// Нахожу форму
const uploadForm = document.querySelector('.img-upload__form');
// Нахожу поле для загрузки файла
const imgUploadField = uploadForm.querySelector('.img-upload__input');
// Нахожу элемент формы для редактирования изображения
const imgUploadModal = uploadForm.querySelector('.img-upload__overlay');
// Нахожу кнопку для закрытия формы для редактирования изображения
const closeButton = uploadForm.querySelector('.img-upload__cancel');
// Подключаю прослушиватель события нажатия клавиши на всю область документа
document.addEventListener('keydown', (evt) => {
  // При нажатии на клавишу Escape
  if(evt.key === 'Escape') {
    // Закрываю форму для редактирования изображения
    imgUploadModal.classList.add('hidden');
  }
});

// Функция-обработчик
const onImgUploadFieldChange = () => {
  // Открываю модальное окно формы
  imgUploadModal.classList.remove('hidden');
  // Выключаю прокрутку в фоне
  document.body.classList.add('modal-open');
};
// Подключаю к полю для загрузки файла слушатель события "change"
imgUploadField.addEventListener('change', onImgUploadFieldChange);
// Подключаю к кнопке для закрытия формы для редактирования изображения прослушиватель события click
closeButton.addEventListener('click', () => {
  // Закрываю форму для редактирования изображения
  imgUploadModal.classList.add('hidden');
  // Включаю прокрутку в фоне
  document.body.classList.remove('modal-open');
});
