import { addArtistSongs, ArtistsSongs } from ".render";
addArtistSongs();
ArtistsSongs();

class PlaylistStructure {
  constructor(data){
    this.data = data;
  }
  addPlaylistSong(){
    for (let i = 0; i < this.data.length; i++) {
        const list = document.querySelector('.playlist__name--list');
        const li = document.createElement('li');
        li.setAttribute('class', 'songs__list');
        list.appendChild(li);
        // portada
        const imageAlbum = document.createElement('img');
            imageAlbum.setAttribute('src', `${this.data[i].image}`);
            imageAlbum.setAttribute('class', 'album__img');
            songs.appendChild(imageAlbum);
        // artista
        const nameArtist = document.createElement('h3');
            nameArtist.setAttribute('class', 'artist__name');
            songs.appendChild(nameArtist)
            nameArtist.innerHTML = `${this.data[i].name}`
        // canción
        const nameSong = document.createElement('h3');
            nameSong.setAttribute('class', 'song__name');
            songs.appendChild(nameSong)
            nameSong.innerHTML = `${this.data[i].song}`
        // álbum
        const nameAlbum = document.createElement('h3');
            nameAlbum.setAttribute('class', 'album__name');
            songs.appendChild(nameAlbum)
            nameAlbum.innerHTML = `${this.data[i].album}`
    }
  }
}
export{PlaylistStructure}
