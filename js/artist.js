import {artistApi} from './api.js';

import { artistParametresUrl, linkArtits, linkSong } from './util.js';

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

function tabsInfo() {
  for (let i = 0; i < valueArtist.length; i++) {
    const contentInfo = document.getElementById('artist-name--info');
    const tabs = document.createElement('div');
    tabs.setAttribute('id', `tab-${i}`);
    tabs.setAttribute('class', 'tab-content-info js-content-hidden');
    contentInfo.appendChild(tabs);
    const html = `
        <img src="${valueArtist[i].image}" alt="${valueArtist.name}">
        <p>${valueArtist[i].description}</p>
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
  div.appendChild(songList)
  contentTabs.appendChild(div);
  for (let i = 0; i < valueSong.length; i++) {
    const html = `
    <li>
      <img src="${valueSong[i].image}" alt="${valueSong[i].name}">
      <p>${valueSong[i].name}</p>
      <p>${valueSong[i].album}</p>
      <a href="mediaplayer.html?playList=artist&&song=${valueSong[i].id}&&artistPlaylist=${valueArtist}">${valueSong[i].name}</a>
    </li>
    `
  songList.innerHTML += html;


    // const songsLi = document.createElement('li');
    // const image = document.createElement('img');
    // image.setAttribute('src', `${valueSong[i].image}`)
    // songsLi.appendChild(image)
    // const nameSong = document.createElement('p');
    // nameSong.innerHTML = `${valueSong[i].name}`
    // songsLi.appendChild(nameSong);
    // const albumName = document.createElement('p')
    // albumName.innerHTML = `${valueSong[i].album}`
    // songsLi.appendChild(albumName);
    // const link = document.createElement('a');
    // const html = `
    //   <p>${valueSong[i].name}</p>
    // `
    // link.innerHTML += html;
    // link.setAttribute('href', `mediaplayer.html?playList=artist&&song=${valueSong[i].id}&&artistPlaylist=${valueArtist}`)
    // songsLi.appendChild(link);

  }
}



function getId(items, content) {
  if (artistParametresUrl) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].dataset.id == artistParametresUrl) {
        items[i].classList.add('js-active');
        const id = items[i].getAttribute('href').substring(1);
        if (content[i].getAttribute('id') === id) {
          content[i].classList.remove('js-content-hidden');
        }
      }
    }
  } else {
    content[0].classList.remove('js-content-hidden');
    items[0].classList.add('js-active');
  }
}

function tabsController(items, content) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < content.length; i++) {
        content[i].classList.add('js-content-hidden');
        if (content[i].getAttribute('id') === id) {
          content[i].classList.remove('js-content-hidden');
        }
      }
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('js-active');
      }
      event.currentTarget.classList.add('js-active');
    });
  }
}

function changeStatus() {
  const items = document.querySelectorAll('.tabs__item');
  const content = document.querySelectorAll('.tab-content-info');
  tabsController(items, content);
  getId(items, content);
}
changeStatus();
