import { openModal } from './modal.js';

const picturesContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

let localPhotos;

const clear = () => {
  picturesContainer.querySelectorAll('.picture').forEach((item) => item.remove());
};


export const renderCards = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  clear();
  localPhotos = [...photos];
  localPhotos
    .forEach(({ id, url, description, likes, comments }) => {
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

  if(picture) {
    const pictureId = Number(picture.dataset.id);
    const findPicture = localPhotos.find((item) => item.id === pictureId);
    openModal(findPicture);
  }

});
