import {ArtistView, ArtistsSongs} from "./render.js";

function fetchArtist() {
    fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
        const artistInfo = new ArtistView(data);
        artistInfo.addArtitsName();
        artistInfo.addArtistInfo();
});
}


function fetchSongs(){
    fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead')
    .then((response) => response.json())
    .then((data) => {
        const songs = new ArtistsSongs(data);
        songs.addSong();

});
}

export {fetchArtist, fetchSongs}