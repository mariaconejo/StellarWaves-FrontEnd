import {linkArtits, linkSong, linkSongInfo, urlArtist, params, getParam } from './util.js'

class Artist{
  constructor(id, name, image, description){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }
    addNameArtist(){
      const list = document.getElementById("artist-name-list");
        const html = `
        <li class="artist__list--li--js">
          <a data-id="${this.id}"class="name__artist--js" href="#${this.id}">${this.name}</a>
        </li>
        `
      list.innerHTML += html;
      console.log(this.name)
    }

    addInfoArtist(){
      const list = document.getElementById("artist__name--info");
      const html = `
      <li  class="artist__list--img--js">
        <div id="${this.id}" class="info__artist">
          <img src="${this.image}" alt="${this.name}">
          <p>${this.description}</p>
        </div>
      </li>
      `
      list.innerHTML += html;
    }
  }







export default Artist;

