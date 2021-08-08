// URL PARAMETERS
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const artistParametresUrl = params.get('artistId');
const userId = params.get('userId');
const playListParam = params.get('playList');
const songParam = params.get('song');
const artistPlaylistParam = params.get('artistPlaylist');

// Links API
const linkArtits = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const linkSong = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs';
const urlUsers = 'https://stellarwaves.herokuapp.com/users';
const ulrUser = 'https://stellarwaves.herokuapp.com/user';
const loginUrl = 'https://stellarwaves.herokuapp.com/user/login';
const getUser = `https://stellarwaves.herokuapp.com/user/${userId}`;
const upsertRecent = 'https://stellarwaves.herokuapp.com/rectmusic';
const upsertFav = 'https://stellarwaves.herokuapp.com/favmusic';
const createPlaylist = 'https://stellarwaves.herokuapp.com/playlist';
const getRecent = `https://stellarwaves.herokuapp.com/rectmusic/${userId}`;
const listSongInfo = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/';
const getPlaylist = `https://stellarwaves.herokuapp.com/playlists/${userId}`;
const addPlaylistSongs = `https://stellarwaves.herokuapp.com/playlist/${userId}`;

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
  upsertRecent,
  upsertFav,
  createPlaylist,
  getRecent,
  listSongInfo,
  getPlaylist,
  addPlaylistSongs,
};
