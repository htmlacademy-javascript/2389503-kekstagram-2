import { DEFAULT_EFFECT, EffectsSettings } from './constants.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const effectsContainer = uploadForm.querySelector('.effects');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');

let currentEffect = DEFAULT_EFFECT;
let valueElement;

const isEffectDefault = () => currentEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range : {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

const renderSliderEffects = () => {
  const { units, style } = EffectsSettings[currentEffect];
  imgPreview.style.filter = `${style}(${valueElement}${units})`;
};

sliderElement.noUiSlider.on('update',() => {
  valueElement = sliderElement.noUiSlider.get();
  renderSliderEffects();
});

const showSlider = (isShown = true) => {
  if(isShown) {
    sliderContainer.classList.remove('hidden');
    sliderElement.classList.remove('hidden');
  } else {
    sliderContainer.classList.add('hidden');
    sliderElement.classList.add('hidden');
  }
};

export const resetEffects = () => {
  showSlider(false);
  imgPreview.style.filter = '';
};

const addSliderOptions = () => {
  const { slider } = EffectsSettings[currentEffect];
  sliderElement.noUiSlider.updateOptions(slider);
  sliderElement.noUiSlider.set(slider.range.max);
};


effectsContainer.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if(isEffectDefault()) {
    resetEffects();
  } else {
    showSlider();
    addSliderOptions();
    renderSliderEffects();
  }
});

resetEffects();
