const errorMessage = document.querySelector('#error').content.querySelector('.error');
const closeErrorMessageButton = errorMessage.querySelector('.error__button');
export const showErrorMessage = (isShown = true) => {
  if(isShown) {
    const cloneErrorMessage = errorMessage.cloneNode(true);
    document.body.append(cloneErrorMessage);
  } else {
    const cloneErrorMessage = errorMessage.cloneNode(true);
    cloneErrorMessage.remove();
  }
};

export const closeErrorMessage = () => {
  closeErrorMessageButton.addEventListener('click', () => {
    console.log('Click!');
    showErrorMessage(false);
  });
};

