const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const ALERT_SHOW_TIME = 5000;

export const showAlert = () => {
  document.body.append(dataError);

  setTimeout (() => {
    dataError.remove();
  },ALERT_SHOW_TIME);
};
