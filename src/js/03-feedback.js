import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

fillFormData();

function fillFormData() {
  if (localStorage.getItem(LS_KEY)) {
    const savedData = JSON.parse(localStorage.getItem(LS_KEY));
    console.log(savedData);
    for (const key in savedData) {
      form[key].value = savedData[key];
    }
  }
}

function onFormInput(e) {
  let formData = localStorage.getItem(LS_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
}
