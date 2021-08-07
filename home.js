import {
  linkArtits, userId, home, mediaplayer, artist, profile,
} from './js/util.js';
import {artistApi, getUserInfo}  from './js/api.js';

const api = await artistApi(linkArtits);
const nameUser = document.getElementById('name-user');


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
  const getUser = await getUserInfo()
  nameUser.innerHTML = `Welcome, @${getUser.data.name}`

}

welcomeUser()



home.setAttribute('href',`home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`)

