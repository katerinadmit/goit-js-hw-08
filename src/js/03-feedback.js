import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),

  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

unsavedInfo();

function onFormInput(evt) {
  if (evt.target.value) {
    formData[evt.target.name] = evt.target.value;
  }
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();

  const formElements = evt.target.elements;
  if (formElements.email.value === '' || formElements.message.value === '') {
    return alert('Please check all field!');
  }
  evt.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = {};
}

function unsavedInfo() {
  let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (data) {
    refs.input.value = !!data.email ? data.email : '';
    refs.textarea.value = !!data.message ? data.message : '';
    formData = data;
  }
}