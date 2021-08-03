
import Artist from "./artist.js";
import Song from "./song.js";
import { prueba } from "../home.js";

function fetchArtist() {
    fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      prueba(data);
      // for(let i = 0; i < data.length;  i++){
      //     const artist = new Artist(data[i].id, data[i].name, data[i].image, data[i].description)
      //       artist.addNameArtist();
      //       artist.addInfoArtist()

      //       console.log(artist)
      //   }
  });
  // callSongs();
}


function fetchSongs(){
    const url = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/aurora`
    fetch(`${url}`,{
      method: "GET"
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      for(let i = 0; i < data.length;  i++){
          const song = new Song(data[i].id, data[i].name, data[i].album, data[i].image, data[i].audio)
          song.songRenderDom()

      }
    })
    .catch((error) => {
      console.log("error", error);
    })
}

// function callSongs(){
//   const clickSong = document.querySelector('.songs__container');
//   clickSong.addEventListener('click', (event) => {
//     const target = event.target;
//     if(target.className === 'name__artist--js') {
//       const idSong = target.getAttribute('href')
//       fetchSongs(idSong)
//     }
//   })
// }

export {fetchArtist, fetchSongs}
