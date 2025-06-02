const renderCards = (photos) => {
  // Нахожу контейнер для изображений от других пользователей
  const picturesContainer = document.querySelector('.pictures');
  // Нахожу шаблон фотографии
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  // Создаю коробочку, в которую я буду складывать отображённые фотографии
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const cloneItem = photoTemplate.cloneNode(true);
    const pictureImage = cloneItem.querySelector('.picture__img');
    const pictureLikes = cloneItem.querySelector('.picture__likes');
    const pictureComments = cloneItem.querySelector('.picture__comments');
    pictureImage.src = photo.url;
    pictureImage.alt = photo.description;
    pictureLikes.textContent = photo.likes;
    pictureComments.textContent = photo.comments.length;
    similarListFragment.appendChild(cloneItem);
  });

  return picturesContainer.appendChild(similarListFragment);

};

export { renderCards };
