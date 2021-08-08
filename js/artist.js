import {artistApi} from './api.js';

import {linkArtits, linkSong, home, mediaplayer, artist, profile, userId, artistParametresUrl } from './util.js';



// Crea los tabs con la info de los artistas

const valueArtist = await artistApi(linkArtits);

function tabsName() {

  for (let i = 0; i < valueArtist.length; i++) {
    const nameArtistli = document.getElementById('artist-name-list');
    const html = `
      <li>
        <a data-id="${valueArtist[i].id}" href="#tab-${i}" class="tabs__item">${valueArtist[i].name}</a>
      </li>
      `;
    nameArtistli.innerHTML += html;
  }
}

tabsName();

// Codigo reutilizado del ejercicio de tabs : https://github.com/mariaconejo/js2-componente-tabs

function tabsInfo() {
  for (let i = 0; i < valueArtist.length; i++) {
    const contentInfo = document.getElementById('artist-name--info');
    const tabs = document.createElement('div');
    tabs.setAttribute('id', `tab-${i}`);
    tabs.setAttribute('class', 'tab-content-info js-content-hidden ');
    contentInfo.appendChild(tabs);
    const html = `
        <img src="${valueArtist[i].image}" alt="${valueArtist.name}" class="artist__image">
        <p class="artist__description">${valueArtist[i].description}</p>
      `;
    tabs.innerHTML += html;
    songs(valueArtist[i].id, tabs);
  }
}
tabsInfo();

async function songs(valueArtist, contentTabs) {
  const linkSongs = `${linkSong}/${valueArtist}`;
  const valueSong = await artistApi(linkSongs);
  const div = document.createElement('div');
  const songList = document.createElement('ul');
  songList.setAttribute('class', 'list__artist--song')
  div.appendChild(songList)
  contentTabs.appendChild(div);
  for (let i = 0; i < valueSong.length; i++) {
    const html = `
    <li>
      <img src="${valueSong[i].image}" alt="${valueSong[i].name}" class="image_album">
      <p class="name__song">${valueSong[i].name}</p>
      <p class="name__album">${valueSong[i].album}</p>
      <a data-id="${valueSong[i].id}" href="mediaplayer.html?playList=artist&&song=${valueSong[i].id}&&artistPlaylist=${valueArtist}&&userId=${userId}"><img src="../img/play.svg" alt="btn"></a>
    </li>
    `
  songList.innerHTML += html;

  }
}

// Crea el funcionamiento de los tabs y el uso de url parameters

// Codigo reutilizado del ejercicio de tabs : https://github.com/mariaconejo/js2-componente-tabs

function getId(names, contentInfo) {
  if (artistParametresUrl) {
    for (let i = 0; i < names.length; i++) {
      if (names[i].dataset.id === artistParametresUrl) {
        names[i].classList.add('js-active');
        const id = names[i].getAttribute('href').substring(1);
        if (contentInfo[i].getAttribute('id') === id) {
          contentInfo[i].classList.remove('js-content-hidden');
        }
      }
    }
  } else {
    contentInfo[0].classList.remove('js-content-hidden');
    names[0].classList.add('js-active');
  }
}

function tabsView(names, contentInfo) {
  for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      for (let i = 0; i < contentInfo.length; i++) {
        contentInfo[i].classList.add('js-content-hidden');
        if (contentInfo[i].getAttribute('id') === id) {
          contentInfo[i].classList.remove('js-content-hidden');
        }
      }
      for (let i = 0; i < names.length; i++) {
        names[i].classList.remove('js-active');
      }
      event.currentTarget.classList.add('js-active');
    });
  }
}
const names = document.querySelectorAll('.tabs__item');
const contentInfo = document.querySelectorAll('.tab-content-info');

tabsView(names, contentInfo);
getId(names, contentInfo);

// pasar el id del usuario por URL PARAMETERS

home.setAttribute('href', `home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`);
