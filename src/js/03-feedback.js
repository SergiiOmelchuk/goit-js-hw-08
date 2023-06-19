import { throttle } from 'lodash';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textarea: document.querySelector('[name="message"]'),
  emailEl: document.querySelector('[name="email"]'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formDatas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

refs.formEl.addEventListener('input', throttle(onTAreaInput, 500));
refs.formEl.addEventListener('submit', submitForm);

fillTextarea();

function onTAreaInput(event) {
  formDatas[event.target.name] = event.target.value;
  const strigifyData = JSON.stringify(formDatas);
  localStorage.setItem(LOCAL_STORAGE_KEY, strigifyData);
}

function submitForm(event) {
  event.preventDefault();
  console.log(formDatas);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
  formDatas = {};
}

function fillTextarea() {
  if (formDatas === null) {
    return;
  }
  refs.textarea.value = formDatas.message || '';
  refs.emailEl.value = formDatas.email || '';
}
