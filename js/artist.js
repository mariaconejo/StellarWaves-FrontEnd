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
      <a data-id="${valueSong[i].id}" href="mediaplayer.html?playList=artist&&song=${valueSong[i].id}&&artistPlaylist=${valueArtist}&&userId=${userId}">
        <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i)">
        <path d="M45.4557 21.3864C47.9667 14.2682 58.0333 14.2682 60.5443 21.3864L63.7518 30.4789C64.856 33.6089 67.7783 35.7321 71.0964 35.815L80.735 36.0558C88.2807 36.2443 91.3915 45.8182 85.3976 50.406L77.7414 56.2662C75.1057 58.2836 73.9895 61.7189 74.936 64.9002L77.6855 74.1415C79.838 81.3762 71.6939 87.2932 65.4785 83.0104L57.5392 77.5398C54.8061 75.6565 51.1939 75.6565 48.4608 77.5398L40.5215 83.0104C34.3061 87.2932 26.162 81.3762 28.3145 74.1415L31.064 64.9002C32.0105 61.7189 30.8943 58.2836 28.2586 56.2662L20.6024 50.406C14.6085 45.8182 17.7193 36.2443 25.265 36.0558L34.9036 35.815C38.2217 35.7321 41.144 33.6089 42.2482 30.4789L45.4557 21.3864Z" fill="#FFE4AD"/>
        </g>
        <path d="M49.6152 39.9486C47.6182 38.6728 45 40.107 45 42.4767V62.19C45 64.5597 47.6182 65.9939 49.6152 64.7181L65.043 54.8614C66.8894 53.6817 66.8894 50.9849 65.043 49.8052L49.6152 39.9486Z" fill="#119DA4"/>
        <defs>
        <filter id="filter0_i" x="17.4512" y="16.0479" width="74.0984" height="72.4074" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="3" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.745098 0 0 0 0 0.568627 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>
      </a>
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
