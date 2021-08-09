import {
  home, mediaplayer, artist, profile, userId,
} from './util.js';

import { getUserInfo } from './api.js';

const userName = document.querySelector('.user');

async function welcomeUser() {
  const getUser = await getUserInfo();
  userName.innerHTML = `@${getUser.data.name}`;
}

welcomeUser();
home.setAttribute('href', `home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`);
