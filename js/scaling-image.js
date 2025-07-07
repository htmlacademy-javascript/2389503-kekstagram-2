import { uploadForm } from './form';
import { minScaleValue, maxScaleValue, stepScaleValue } from './constants';

export const imgPreview = uploadForm.querySelector('.img-upload__preview') ;
const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');
const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = uploadForm.querySelector('.scale__control--value');

let scaleValue = maxScaleValue;

const increaseScaleValue = () => {
  if(scaleValue > minScaleValue) {
    imgPreview.style.transform = `scale(${scaleValue - stepScaleValue})`;
    scaleValue -= stepScaleValue;
    scaleControlInput.value = `${scaleValue * 100}%`;
  }
};

const decreaseScaleValue = () => {
  if(scaleValue < maxScaleValue) {
    imgPreview.style.transform = `scale(${scaleValue + stepScaleValue})`;
    scaleValue += stepScaleValue;
    scaleControlInput.value = `${scaleValue * 100}%`;
  }
};

zoomOutButton.addEventListener('click', () => {
  increaseScaleValue();
});

zoomInButton.addEventListener('click', () => {
  decreaseScaleValue();
});
