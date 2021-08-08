import { createUser, loginUser } from './api.js';

const register = document.getElementById('create');

const login = document.getElementById('login');

register.addEventListener('submit', (e) => {
  e.preventDefault();
  const passwords = register.elements[2].value;
  const userName = register.elements[0].value;
  const userEmail = register.elements[1].value;
  const users = {
    name: userName,
    email: userEmail,
    password: passwords,
  };
  const data = createUser(users);
  console.log(data);
});

login.addEventListener('submit', (e) => {
  e.preventDefault();
  const userEmail = register.elements[1].value;
  const passwords = register.elements[2].value;
  const user = {
    email: userEmail,
    password: passwords,
  };
  const data = loginUser(user);
  window.location.href = 'home.html';

  console.log(data);
});
