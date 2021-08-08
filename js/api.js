import {
  ulrUser, loginUrl, getUser, upsertRecent, upsertFav, createPlaylist, getRecent, addPlaylistSongs,
  getPlaylist,
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

async function upsertRecentSongs(recent) {
  const link = await fetch(upsertRecent, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(recent),
  })

    .then((response) => response.json())
    .then((data) => data);
  return link;
}

async function getRecentSong(recent) {
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

async function upsertFavSongs(fav) {
  const link = await fetch(upsertFav, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(fav),
  })

    .then((response) => response.json())
    .then((data) => data);
  return link;
}

async function createPlaylistUser(playlist) {
  const link = await fetch(createPlaylist, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(playlist),
  })

    .then((response) => response.json())
    .then((data) => data);
  console.log(link);
  return link;
}

async function getPlaylistUser(playlistGet) {
  const link = await fetch(getPlaylist, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    body: JSON.stringify(playlistGet),
  })

    .then((response) => response.json())
    .then((data) => data);
  console.log(link);
  return link;
}

async function addSongsPlaylist(playlistPut) {
  const link = await fetch(addPlaylistSongs, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(playlistPut),
  })

    .then((response) => response.json())
    .then((data) => data);
  console.log(link);
  return link;
}

export {
  artistApi, createUser, loginUser, getUserInfo, upsertRecentSongs, upsertFavSongs,
  createPlaylistUser, getRecentSong, getPlaylistUser, addSongsPlaylist,
};
