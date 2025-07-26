import { ALERT_SHOW_TIME } from './constants';
import { removeEscapeControl, setEscapeControl } from './escape-control';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const closeErrorMessageButton = errorMessage.querySelector('.error__button');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const closeSuccessMessageButton = successMessage.querySelector('.success__button');

export const showMessage = (isShown = true, messageElement) => {
  if(isShown) {
    document.body.append(messageElement);
    setEscapeControl(() => {
      messageElement.remove();
    });
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

errorMessage.addEventListener('click', ({ target }) => {
  if (target === closeErrorMessageButton || target === errorMessage) {
    showMessage(false, errorMessage);
    removeEscapeControl();
  }
});

successMessage.addEventListener('click', ({ target }) => {
  if(target === closeSuccessMessageButton || target === successMessage) {
    showMessage(false, successMessage);
    removeEscapeControl();
  }
});
