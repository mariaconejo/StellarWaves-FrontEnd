import {
  linkArtits,
} from './js/util.js';
import {artistApi}  from './js/api.js';

const api = await artistApi(linkArtits);

function addArtist() {
  for (let i = 0; i < api.length; i++) {
    const artistLi = document.getElementById('artist-list');
    const html = `
      <li>
        <img src="${api[i].image}" alt="${api[i].name}">
        <a href="artist.html?artistId=${api[i].id}">${api[i].name}</a>
      </li>
      `;

    artistLi.innerHTML += html;
  }
}
addArtist();
