import { createUser, loginUser } from './api.js';

const register = document.getElementById('create');

const login = document.getElementById('login');

// const userId = params.get('userId');

register.addEventListener('submit', async (e) => {
  e.preventDefault();
  const passwords = register.elements[2].value;
  const userName = register.elements[0].value;
  const userEmail = register.elements[1].value;
  const users = {
    name: userName,
    email: userEmail,
    password: passwords,
  };
  const data = await createUser(users);
  window.location.replace(`home.html?userId=${data.newUser._id}`);
  console.log(data);
});

login.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userEmail = login.elements[0].value;
  const passwords = login.elements[1].value;
  const users = {
    email: userEmail,
    password: passwords,
  };
  const data = await loginUser(users);
  if (data.data) {
    window.location.replace(`home.html?userId=${data.data.id}`);
  }
});
