const renderCards = (photos) => {
  // Нахожу контейнер для изображений от других пользователей
  const picturesContainer = document.querySelector('.pictures');
  // Нахожу шаблон фотографии
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  // console.log(photoTemplate);
  // Создаю коробочку, в которую я буду складывать отображённые фотографии
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    // console.log(photo);
  });
};

export { renderCards };
