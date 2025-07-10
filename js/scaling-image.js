import { Scale, SCALE_FACTOR } from './constants.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');
const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = uploadForm.querySelector('.scale__control--value');

let scaleValue = Scale.MAX;

const renderScale = () => {
  imgPreview.style.transform = `scale(${scaleValue * SCALE_FACTOR})`;
  scaleControlInput.value = `${scaleValue}%`;

};

const increaseScaleValue = () => {
  scaleValue = Math.min(scaleValue + Scale.STEP, Scale.MAX);
  renderScale();
};

const decreaseScaleValue = () => {
  scaleValue = Math.max(scaleValue - Scale.STEP, Scale.MIN);
  renderScale();
};

zoomOutButton.addEventListener('click', () => {
  decreaseScaleValue();
});

zoomInButton.addEventListener('click', () => {
  increaseScaleValue();
});

export const resetScale = () => {
  scaleValue = Scale.MAX;
  renderScale();
};

resetScale();
