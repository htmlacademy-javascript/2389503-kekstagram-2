import { imageFiltersButtonActive } from './constants';

const imgFilters = document.querySelector('.img-filters--inactive');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

export const initFilters = () => imgFilters.classList.remove('img-filters--inactive');

const setActiveButton = (button) => {
  imgFiltersForm.querySelector(`.${imageFiltersButtonActive}`).classList.remove(imageFiltersButtonActive);
  button.classList.add(imageFiltersButtonActive);
};

imgFiltersForm.addEventListener('click', ({ target }) => {

  const button = target.closest('.img-filters__button');
  if(button) {
    setActiveButton(button);
  }

});
