import { ulrUser } from './util.js';

function create(user) {
  fetch(ulrUser, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

export default create;

const register = document.getElementById('create');

register.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = validation.elements[2].value;
  const passwordConfirm = validation.elements[3].value;
  const userName = validation.elements[0].value;
  const userEmail = validation.elements[1].value;

