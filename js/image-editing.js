import { uploadForm } from './form';

const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');
const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
const scaleControlInput = uploadForm.querySelector('.scale__control--value');

zoomOutButton.addEventListener('click', () => {
// Клик по кнопке должен уменьшать значение scaleControlInput
});

zoomInButton.addEventListener('click', () => {
  // Клик по кнопке должен увеличивать значение scaleControlInput
});

scaleControlInput.addEventListener('click', () => {
  // Здесь отображается актуальное значение масштаба
});
