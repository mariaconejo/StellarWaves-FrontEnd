import { getRecentSongs } from './api.js';
import { userId } from './util.js';

const title = document.getElementById('title-song');

async function addRecents() {
  const musicId = title.dataset.id;
  const recent = {
    userId,
    listSongs: [musicId],
  };
  const data = await getRecentSongs(recent);
  console.log(data);
}

async function addFavorites() {
  // const musicId = title.dataset.id;
  // const infoBody = {
  //   userId,
  //   listSongs: [musicId],
  // };
  // const hi = await getBackendBody(infoBody, 'PUT', `${backendLink}/favmusic`);
  // console.log(hi);
}

export { addRecents, addFavorites };
