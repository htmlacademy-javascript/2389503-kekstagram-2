import { ALERT_SHOW_TIME } from './constants';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const closeErrorMessageButton = errorMessage.querySelector('.error__button');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const closeSuccessMessageButton = successMessage.querySelector('.success__button');

export const showMessage = (isShown = true, messageElement) => {
  if(isShown) {
    document.body.append(messageElement);
  } else {
    messageElement.remove();
  }
};

export const showAlert = () => {
  document.body.append(dataError);

  setTimeout (() => {
    dataError.remove();
  }, ALERT_SHOW_TIME);
};

closeErrorMessageButton.addEventListener('click', () => {
  showMessage(false, errorMessage);
});

closeSuccessMessageButton.addEventListener('click', () => {
  showMessage(false, successMessage);
});
