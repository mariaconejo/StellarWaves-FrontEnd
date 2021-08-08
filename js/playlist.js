import {
  upsertRecentSongs, upsertFavSongs, createPlaylistUser, artistApi,
} from './api.js';
import {
  userId, playListParam, songParam, artistPlaylistParam, linkSong,
} from './util.js';

import controller from './mediaplayer.js';

const title = document.getElementById('title-song');
const select = document.getElementById('existing__playlist');

// se crea las playlist se utilizo esta forma que se asemeja a como probamos el backend en postman

async function addRecents() {
  const songId = title.dataset.id;
  const recent = {
    userId,
    listSongs: [songId],
  };
  const data = await upsertRecentSongs(recent);
  return data;
}

async function addFavorites() {
  const songId = title.dataset.id;
  const fav = {
    userId,
    listSongs: [songId],
  };
  const data = await upsertFavSongs(fav);
  return data;
}

async function addPlaylist(value, id) {
  const playlist = {
    userId: id,
    listSongs: [],
    name: value,
  };
  const data = await createPlaylistUser(playlist);

  return data;
}

async function selectPlaylist() {
  if (playListParam === 'artist') {
    const songsLink = `${linkSong}/${artistPlaylistParam}`;
    const view = await artistApi(songsLink);
    for (let i = 0; i < view.length; i++) {
      if (view[i].id === songParam) {
        controller(i, view);
      }
    }
  }
}

export {
  addRecents, addFavorites, addPlaylist, select, selectPlaylist,
};
