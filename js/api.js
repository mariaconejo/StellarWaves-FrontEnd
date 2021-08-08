import { ulrUser, loginUrl } from './util.js';

async function artistApi(link) {
  const result = await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function createUser(user) {
  const link = await fetch(ulrUser, {
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
  return link;
}

async function loginUser(user) {
  const link = await fetch(loginUrl, {
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
  return link;
}
export { artistApi, createUser, loginUser };
