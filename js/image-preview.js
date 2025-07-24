import { FILE_TYPES } from './constants.js';

const uploadField = document.querySelector('.img-upload__input');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

export const renderPreview = () => {
  const file = uploadField.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if(matches) {
    imageUploadPreview.src = URL.createObjectURL(file);
    document.querySelectorAll('.effects__preview')
      .forEach((item) => {
        item.style.backgroundImage = `URL('${URL.createObjectURL(file)}')`;
      });
  }
};
