import {
  linkArtits, userId, home, mediaplayer, artist, profile, listSongInfo, linkSong,
} from './js/util.js';
import {artistApi, getUserInfo, getRecentSong}  from './js/api.js';

const api = await artistApi(linkArtits);
const nameUser = document.getElementById('name-user');
const nameSong = document.getElementById('name-song');


function addArtist() {
  for (let i = 0; i < api.length; i++) {
    const artistLi = document.getElementById('artist-list');
    const html = `
      <li>
        <img src="${api[i].image}" alt="${api[i].name}" class="artist__home">
        <a class="name__artist" href="artist.html?artistId=${api[i].id}&&userId=${userId}"><h2>${api[i].name}</h2></a>
      </li>
      `;

    artistLi.innerHTML += html;
  }
}
addArtist();

async function welcomeUser() {
  const getUser = await getUserInfo();
  const getRecent = await getRecentSong();
  nameUser.innerHTML = `Welcome, @${getUser.data.name}`;
  const lastSong = getRecent.data[0].listSongs[0];
  const songName = await artistApi(`${listSongInfo}${lastSong}`);
  nameSong.innerHTML = songName.name;
}

welcomeUser()



home.setAttribute('href',`home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`)

