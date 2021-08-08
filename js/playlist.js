import {
  upsertRecentSongs, upsertFavSongs, createPlaylistUser, addSongsPlaylist, getPlaylistUser,
} from './api.js';
import { userId } from './util.js';

const title = document.getElementById('title-song');
const select = document.getElementById('existing__playlist');
const optionSelect = document.getElementById('option-add');
const modalForm = document.getElementById('modal-form');
const inputPlaylist = document.getElementById('input-playlist');

async function addRecents() {
  const musicId = title.dataset.id;
  const recent = {
    userId,
    listSongs: [musicId],
  };
  const data = await upsertRecentSongs(recent);
  console.log(data);
}

async function addFavorites() {
  const musicId = title.dataset.id;
  const fav = {
    userId,
    listSongs: [musicId],
  };
  const data = await upsertFavSongs(fav);
  console.log(data);
}

async function addPlaylist(value, id) {
  const playlist = {
    userId: id,
    listSongs: [],
    name: value,
  };
  const data = await createPlaylistUser(playlist);
  console.log(data);
  return data;
}

function addSong() {
  const musicId = title.dataset.id;
  if (select.value !== 'Add to playlist') {
    const optionSelected = document.querySelector('option:checked');
    console.log(optionSelected);
    const add = {
      listSongs: [musicId],
    };
    addSongsPlaylist(add, optionSelected.dataset.id);
  }
}

function selectModal() {
  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (inputPlaylist.value !== '') {
      const playlist = await addPlaylist(inputPlaylist.value, userId);
      const option = document.createElement('option');
      option.innerHTML = playlist.data.name;
      option.dataset.id = playlist.data._id;
      optionSelect.after(option);
      optionSelect.selected = true;
      console.log(playlist);
    }
  });
}
async function selectPlaylists() {
  const allPlaylist = await getPlaylistUser();
  if (allPlaylist.data.length > 0) {
    allPlaylist.data.forEach((element) => {
      const option = document.createElement('option');
      option.innerHTML = element.name;
      option.dataset.id = element._id;
      optionSelect.after(option);
    });
  }
}

export {
  addRecents, addFavorites, addPlaylist, addSong, selectModal, selectPlaylists, select,
};
