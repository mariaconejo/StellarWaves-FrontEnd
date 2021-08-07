import {
  ulrUser, loginUrl, getUser, getRecent,
} from './util.js';

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
    .then((data) => data);
  return link;
}

async function loginUser(log) {
  const link = await fetch(loginUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(log),
  })

    .then((response) => response.json())
    .then((data) => data);
  return link;
}

async function getUserInfo(user) {
  const link = await fetch(getUser, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    body: JSON.stringify(user),
  })

    .then((response) => response.json())
    .then((data) => data);
  return link;
}

async function getRecentSongs(recent) {
  const link = await fetch(getRecent, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    body: JSON.stringify(recent),
  })

    .then((response) => response.json())
    .then((data) => data);
  return link;
}

export {
  artistApi, createUser, loginUser, getUserInfo, getRecentSongs,
};
