import { openModal } from './modal';
// Нахожу контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');

// Нахожу шаблон фотографии
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

let localPhotos;

export const renderCards = (photos) => {
  // Создаю коробочку, в которую я буду складывать отображённые фотографии
  const similarListFragment = document.createDocumentFragment();
  localPhotos = [...photos];

  localPhotos.forEach(({ id, url, description, likes, comments }) => {
    const cloneItem = photoTemplate.cloneNode(true);
    const pictureImage = cloneItem.querySelector('.picture__img');
    const pictureLikes = cloneItem.querySelector('.picture__likes');
    const pictureComments = cloneItem.querySelector('.picture__comments');
    cloneItem.dataset.id = id;
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;
    similarListFragment.append(cloneItem);
  });

  picturesContainer.append(similarListFragment);
};

picturesContainer.addEventListener('click', (evt) => {

  const picture = evt.target.closest('.picture');
  const pictureId = Number(picture.dataset.id);
  if(picture) {
    const findPicture = localPhotos.find((item) => item.id === pictureId);
    openModal(findPicture);
  }
});
