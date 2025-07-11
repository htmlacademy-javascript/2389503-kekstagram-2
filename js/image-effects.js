import { EffectsSettings } from './constants.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const effectsContainer = uploadForm.querySelector('.effects');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
// 2. Мы передали `noUiSlider` элемент, в который просим отрисовать слайдер, а также минимальное и максимальное значение и шаг.
noUiSlider.create(sliderElement, {
  range : {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

// 3. Добавим слайдеру слушатель события `update`, которое будет вызвано при изменении положения слайдера, и выводить в консоль параметры колбэка.
sliderElement.noUiSlider.on('update',() => console.log());

const showSlider = (isShown = true) => {
  if(isShown) {
    sliderContainer.classList.remove('hidden');
    sliderElement.classList.remove('hidden');
  } else {
    sliderContainer.classList.add('hidden');
    sliderElement.classList.add('hidden');
  }
};


effectsContainer.addEventListener('change', ({ target }) => {

  const { slider } = EffectsSettings[target.value];
  console.log(slider);
  const { style, units } = EffectsSettings[target.value];
  console.log(style);
  console.log(units);
  imgPreview.style.filter = `${style}(${slider.range.max}${units})`;

});


export const resetEffects = () => {
  showSlider(false);
};

resetEffects();
