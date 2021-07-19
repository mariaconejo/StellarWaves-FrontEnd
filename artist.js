import {ArtistView, ArtistsSongs} from "./js/render.js";
import { fetchArtist, fetchSongs } from "./js/api.js";
const artist = new ArtistView(fetchArtist);
const songs = new ArtistsSongs(fetchSongs);

songs.addSong();


artist.addArtitsName();
artist.addArtistInfo();

export default artist;


