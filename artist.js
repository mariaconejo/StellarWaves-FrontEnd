// import Artist from "./js/artist.js";
// import Song from "./js/song.js";
// import { fetchArtist, fetchSongs} from "./js/api.js";
// const artist = new Artist(fetchArtist());
// const song = new Song(fetchSongs());

import { clic } from './home.js';

const idArtist = clic();

function songs(clic) {
  fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/${clic}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function imprimirInfo(idArtist) {
  const title = document.querySelector('.info__artist');
  const img = document.querySelector('.info__artist');
  const description = document.querySelector('.info__artist');
  console.log(idArtist);

  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (idArtist === data[i].id) {
          console.log(data[i].image);
          title.innerText = data[i].name;
          img.setAttribute('src', `${data[i].image}`);
          description.innerText = data[i].description;
        }
      }
    });

  songs(idArtist);
}

imprimirInfo(idArtist);
