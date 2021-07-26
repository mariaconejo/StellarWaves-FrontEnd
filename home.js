import ArtistsHome from "./js/render.js";
import { fetchArtist } from "./js/api.js";
const profileArtist = new ArtistsHome(fetchArtist);
profileArtist.addArtitstHome();


export default profileArtist;