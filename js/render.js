import { modal } from './modal.js';
import { isEscapeKey } from './util.js';
// Нахожу контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');
// Нахожу шаблон фотографии
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const renderCards = (photos) => {
  // Создаю коробочку, в которую я буду складывать отображённые фотографии
  const similarListFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const cloneItem = photoTemplate.cloneNode(true);
    const pictureImage = cloneItem.querySelector('.picture__img');
    const pictureLikes = cloneItem.querySelector('.picture__likes');
    const pictureComments = cloneItem.querySelector('.picture__comments');
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;
    cloneItem.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.addEventListener('keydown', (evt) => {
        if(isEscapeKey(evt)) {
          modal.classList.add('hidden');
        }
      });
    });
    similarListFragment.appendChild(cloneItem);
  });

  picturesContainer.appendChild(similarListFragment);

};
