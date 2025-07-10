const uploadForm = document.querySelector('.img-upload__overlay');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');

const effects = uploadForm.querySelectorAll('.effects__radio');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
// 1. Находим элемент, в котором мы будем отрисовывать слайдер
const sliderElement = uploadForm.querySelector('.effect-level__slider');
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
sliderElement.noUiSlider.on('update',(...rest) => console.log(rest));

const showSlider = (isShown = true) => {
  if(isShown) {
    sliderContainer.classList.remove('hidden');
    sliderElement.classList.remove('hidden');
  } else {
    sliderContainer.classList.add('hidden');
    sliderElement.classList.add('hidden');
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
