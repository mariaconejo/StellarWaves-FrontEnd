// Links API
const linkArtits = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const linkSong = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs';
const linkSongInfo = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/{song id}';

// Modal
const modal = document.getElementById('modal__Songs');
const btnAddSong = document.getElementById('btn__addSong');
const close = document.getElementById('close');

// Tabs
const urlArtist = new URL(window.location);
const params = new URLSearchParams(urlArtist.search);
const getParam = params.get('artistId');

// Canvas

const audio = document.querySelector('#audio');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// mediaplayer

const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const prevBtn = document.getElementById('btn-prev');

export {
  linkArtits,
  linkSong,
  linkSongInfo,
  urlArtist,
  params,
  getParam,
  canvas,
  ctx,
  audio,
  startBtn,
  stopBtn,
  prevBtn,
};
