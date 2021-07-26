import { fetchArtist, fetchSongs } from "./api.js";
fetchArtist();
fetchSongs();

class ArtistView {
    constructor(data){
        this.data = data;
    }
    addArtitsName(){
        for (let i = 0; i < this.data.length; i++) {
            const list = document.querySelector('.artist__name--list');
            const li = document.createElement('li');
            li.setAttribute('class', 'artist__list--li');
            list.appendChild(li);

            const enlaceName = document.createElement('a');
            enlaceName.setAttribute('href', `#${this.data[i].id}`)
            enlaceName.setAttribute('class', `artist-links`)
            li.appendChild(enlaceName);
            

            const nameArtist = document.createElement('h3');
            nameArtist.setAttribute('class', 'artist__name--h3');
            enlaceName.appendChild(nameArtist)
            nameArtist.innerHTML = `${this.data[i].name}`

        }
    }

    addArtistInfo(){
        for (let i = 0; i < this.data.length; i++) {
            const div = document.querySelector('.artist__name--img');
            const container = document.createElement('div');
            container.setAttribute('class', 'artist__info');
            container.setAttribute('id', `${this.data[i].id}`);
            div.appendChild(container);

            const imageArtist = document.createElement('img');
            imageArtist.setAttribute('src', `${this.data[i].image}`);
            imageArtist.setAttribute('class', 'artist__img--cover');
            container.appendChild(imageArtist);

            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'artist__description');
            container.appendChild(paragraph)
            paragraph.innerHTML = `${this.data[i].description}`

        }
    }

    addArtistSongs(){
        for (let i = 0; i < this.data.length; i++) {
            const div = document.querySelector('.songs__container');
            const divInfo = document.createElement('div');
            divInfo.setAttribute('class', 'artist__content--info');
            div.appendChild(divInfo);

            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'song__name');
            divInfo.appendChild(paragraph)
            paragraph.innerHTML = `${this.data[i].name}`

            const album = document.createElement('p');
            album.setAttribute('class', 'album__name--song');
            divInfo.appendChild(paragraph)
            paragraph.innerHTML = `${this.data[i].album}`
        }

    }

    
}



class ArtistsSongs{
    constructor(data){
        this.data = data;
    }
    addSong(){
        for (let i = 0; i < this.data.length; i++) {
            const songs = document.querySelector('.songs__container');
            const listaSongs = document.createElement('li');
            listaSongs.setAttribute('class', 'artist__songs');
            songs.appendChild(listaSongs);

            const imageAlbum = document.createElement('img');
            imageAlbum.setAttribute('src', `${this.data[i].image}`);
            imageAlbum.setAttribute('class', 'album__img');
            songs.appendChild(imageAlbum);

            const nameArtist = document.createElement('h3');
            nameArtist.setAttribute('class', 'artist__name');
            songs.appendChild(nameArtist)
            nameArtist.innerHTML = `${this.data[i].name}`

            const nameAlbum = document.createElement('h3');
            nameAlbum.setAttribute('class', 'album__name');
            songs.appendChild(nameAlbum)
            nameAlbum.innerHTML = `${this.data[i].album}`
        }
    }
}

export {ArtistView,  ArtistsSongs}