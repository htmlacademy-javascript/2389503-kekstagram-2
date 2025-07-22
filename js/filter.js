const imageFilters = document.querySelector('.img-filters');
const filterDefaultButton = imageFilters.querySelector('#filter-default');
const filterRandomButton = imageFilters.querySelector('#filter-random');
const filterDiscussedButton = imageFilters.querySelector('#filter-discussed');

export const showFilters = () => imageFilters.classList.remove('img-filters--inactive');

export const setDefaultFilter = () => {
  filterDefaultButton.addEventListener('click', () => {

  });
};

export const setRandomFilter = () => {
  filterRandomButton.addEventListener('click', () => {

  });
};

export const setDiscussedFilter = () => {
  filterDiscussedButton.addEventListener('click', () => {

  });
};
