// Modal
const modal = document.getElementById('modal__Songs');
const btnAddSong = document.getElementById('btn__addSong');
const close = document.getElementById('close');

// Tabs
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const artistParametresUrl = params.get('artistId');
const userId = params.get('userId');

// Links API
const linkArtits = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const linkSong = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs';
const urlUsers = 'https://stellarwaves.herokuapp.com/users';
const ulrUser = 'https://stellarwaves.herokuapp.com/user';
const loginUrl = 'https://stellarwaves.herokuapp.com/user/login';
const getUser = `https://stellarwaves.herokuapp.com/user/${userId}`;
const getRecent = 'https://stellarwaves.herokuapp.com/rectmusic';

// Music

const playListParam = params.get('playList');
const songParam = params.get('song');
const artistPlaylistParam = params.get('artistPlaylist');

// link del header

const home = document.querySelector('.id__user--home--js');
const mediaplayer = document.querySelector('.id__user--mediaplayer--js');
const artist = document.querySelector('.id__user--artist--js');
const profile = document.querySelector('.id__user--profile--js');

export {
  urlUsers,
  ulrUser,
  linkArtits,
  linkSong,
  url,
  params,
  artistParametresUrl,
  playListParam,
  songParam,
  artistPlaylistParam,
  loginUrl,
  getUser,
  userId,
  home,
  mediaplayer,
  artist,
  profile,
  getRecent,
};
