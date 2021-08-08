import {
  home, mediaplayer, artist, profile, userId,
} from './util.js';
import Canvas from './canvas.js';
import ObserverMediaPlayer from './observer.js';
import { artistApi } from './api.js';
import {
  addFavorites, addRecents, select, selectPlaylist,
} from './playlist.js';
import {
  modalFunction, btnAddSong,
} from './modal.js';

const audio = document.querySelector('#audio');
const musicTitle = document.getElementById('title-song');

const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const favBtn = document.getElementById('btn-fav');

const startObv = new ObserverMediaPlayer(startBtn, 'click');
const stopObv = new ObserverMediaPlayer(stopBtn, 'click');
const prevObv = new ObserverMediaPlayer(prevBtn, 'click');
const nextObv = new ObserverMediaPlayer(nextBtn, 'click');
const favObv = new ObserverMediaPlayer(favBtn, 'click');
const addObv = new ObserverMediaPlayer(btnAddSong, 'click');

const canvas = new Canvas();

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);
const audioAnalyser = audioCtx.createAnalyser();
const bufferLength = audioAnalyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function animateCanvas() {
  audioCtx.resume();
  audioSrc.connect(audioAnalyser);
  audioAnalyser.connect(audioCtx.destination);
  audioAnalyser.fftSize = 1024;
  audioAnalyser.smoothingTimeConstant = 0;
  audioAnalyser.getByteTimeDomainData(dataArray);
  canvas.clearCanvas();

  canvas.drawCanvas(dataArray, bufferLength);

  if (audio.play) {
    window.requestAnimationFrame(animateCanvas);
  }
}

function mediaplayerPlay() {
  audio.play();
  animateCanvas();
}

function mediaplayerPause() {
  audio.pause();
}

// inspirado en este video el codigo de los botenes next y previus https://www.youtube.com/watch?v=QTHRWGn_sJw&t=2094s&ab_channel=TraversyMedia

function controller(i, array) {
  let song = i;
  audio.src = array[song].audio;
  musicTitle.innerHTML = `You are listening to: ${array[song].name}`;
  musicTitle.dataset.id = array[song].id;
  function nextSong() {
    song++;
    if (song > array.length - 1) {
      song = 0;
    }
    audio.pause();
    controller(song, array);
    audio.load();
    audio.play();
  }
  function prevSong() {
    song--;
    if (song < 0) {
      song = array.length - 1;
    }
    controller(song, array);
    audio.load();
    audio.play();
  }
  nextObv.addObserver(nextSong);
  prevObv.addObserver(prevSong);
}

window.onload = selectPlaylist();
startObv.addObserver(mediaplayerPlay);
stopObv.addObserver(mediaplayerPause);
startObv.addObserver(addRecents);
nextObv.addObserver(addRecents);
prevObv.addObserver(addRecents);
favObv.addObserver(addFavorites);
addObv.addObserver(modalFunction);

home.setAttribute('href', `home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`);

export default controller;
