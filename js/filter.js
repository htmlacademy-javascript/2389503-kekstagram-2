import { Filters, imageFiltersButtonActive, RandomFilterSettings, RENDER_DELAY } from './constants';
import { renderCards } from './render';
import { debounce } from './util';

const imgFilters = document.querySelector('.img-filters--inactive');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

let localPhotos;

const debouncedRender = debounce(renderCards, RENDER_DELAY);

export const initFilters = (pictures) => {
  localPhotos = [...pictures];
  imgFilters.classList.remove('img-filters--inactive');
};

const FilterSettings = {
  [Filters.DEFAULT] : () => localPhotos,
  [Filters.RANDOM] : () => [...localPhotos].sort(() => Math.random() - RandomFilterSettings.MATH_VALUE).splice(RandomFilterSettings.START, RandomFilterSettings.END),
  [Filters.DISCUSSED] : () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
};

const setActiveButton = (button) => {
  imgFiltersForm.querySelector(`.${imageFiltersButtonActive}`).classList.remove(imageFiltersButtonActive);
  button.classList.add(imageFiltersButtonActive);
};

imgFiltersForm.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if(button) {
    setActiveButton(button);
    debouncedRender(FilterSettings[button.id]());
  }
});
