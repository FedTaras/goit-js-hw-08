import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const inputData = {};
const STORAGE_KEY = 'feedback-form-state';
const storageData = localStorage.getItem(STORAGE_KEY);

refs.form.addEventListener('input', throttle(onFormMessage, 500));
refs.form.addEventListener('submit', onButtonSubmit);

loadPage();

function onFormMessage(ev) {
  inputData[ev.target.name] = ev.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onButtonSubmit(ev) {
  ev.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
  ev.currentTarget.reset();
}

function loadPage() {
  if (storageData) {
    refs.email.value = JSON.parse(storageData).email;
    refs.message.value = JSON.parse(storageData).message;
  }
}
