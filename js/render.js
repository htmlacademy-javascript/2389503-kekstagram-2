const renderCards = (photos) => {
  // Нахожу контейнер для изображений от других пользователей
  const picturesContainer = document.querySelector('.pictures');
  // Нахожу шаблон фотографии
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  console.log(photoTemplate);
  // Создаю коробочку, в которую я буду складывать отображённые фотографии
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    console.log(photo.likes);
    const cloneItem = photoTemplate.cloneNode(true);
    const pictureImage = cloneItem.querySelector('.picture__img');
    const pictureLikes = cloneItem.querySelector('.picture__likes');
    pictureImage.src = photo.url;
    pictureImage.alt = photo.description;
    pictureLikes.textContent = photo.likes;
    console.log(cloneItem);
  });
};

export { renderCards };
