class Song{
  constructor(id, name, album, image, audio){
    this.id = id;
    this.name = name;
    this.album = album;
    this.image = image;
    this.audio = audio;
  }

  songRenderDom(){
    const songList = document.getElementById('song__list');

    const content = `
    <li id="${this.id}" class="songList__li">
      <div class="songList__info">
        <img src="${this.image}" alt="${this.name}">
        <p>${this.name}</p>
        <p>${this.album}</p>
        <button class="songList__btn"><img></button>
      </div>
    </li>
    `;

    songList.innerHTML += content;
  }
}


export default Song;

