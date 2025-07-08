import { uploadForm } from './form';
import { imgPreview } from './scaling-image';


const effects = uploadForm.querySelectorAll('.effects__radio');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const slider = uploadForm.querySelector('.effect-level__slider');

const showSlider = (isShown = true) => {
  if(isShown) {
    sliderContainer.classList.remove('hidden');
    slider.classList.remove('hidden');
  } else {
    sliderContainer.classList.add('hidden');
    slider.classList.add('hidden');
  }
};

showSlider(false);

effects.forEach((item) => {
  item.addEventListener('change', () => {
    showSlider();
    if(item.value === 'chrome') {
      imgPreview.style.filter = `grayscale(${0.5})`;
    } else if (item.value === 'sepia') {
      imgPreview.style.filter = `sepia(${0.5})`;
    } else if (item.value === 'marvin') {
      imgPreview.style.filter = `invert(${100}%)`;
    } else if (item.value === 'phobos') {
      imgPreview.style.filter = `blur(${3}px)`;
    } else if (item.value === 'heat') {
      imgPreview.style.filter = `brightness(${3})`;
    } else {
      imgPreview.style.filter = 'none';
      showSlider(false);
    }
  });
});
