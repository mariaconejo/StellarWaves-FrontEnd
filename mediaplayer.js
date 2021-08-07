import {
  playListParam,
  songParam, artistPlaylistParam, linkSong, home, mediaplayer, artist, profile, userId,
} from './js/util.js';
import Canvas from './js/canvas.js';
import ObserverMediaPlayer from './js/observer.js';
import { artistApi } from './js/api.js';
import { addRecents } from './js/playlist.js';

const audio = document.querySelector('#audio');
const musicTitle = document.getElementById('title-song');

const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

const startObv = new ObserverMediaPlayer(startBtn, 'click');
const stopObv = new ObserverMediaPlayer(stopBtn, 'click');
const prevObv = new ObserverMediaPlayer(prevBtn, 'click');
const nextObv = new ObserverMediaPlayer(nextBtn, 'click');

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

function songPlay(i, array) {
  let index = i;
  audio.src = array[index].audio;
  musicTitle.innerHTML = `You are listening to: ${array[index].name}`;
  musicTitle.dataset.id = array[index].id;
  function nextsong() {
    index++;
    if (index > array.length - 1) {
      index = 0;
    }
    audio.pause();
    songPlay(index, array);
    audio.load();
    audio.play();
  }
  function prevsong() {
    index--;
    if (index < 0) {
      index = array.length - 1;
    }
    songPlay(index, array);
    audio.load();
    audio.play();
  }
  nextObv.addObserver(nextsong);
  prevObv.addObserver(prevsong);
}

async function selectPlaylist() {
  if (playListParam === 'artist') {
    const songsLink = `${linkSong}/${artistPlaylistParam}`;
    console.log(songsLink);
    const viewSongs = await artistApi(songsLink);
    console.log(viewSongs);
    for (let i = 0; i < viewSongs.length; i++) {
      if (viewSongs[i].id === songParam) {
        songPlay(i, viewSongs);
      }
    }
  }
}

window.onload = selectPlaylist();
startObv.addObserver(mediaplayerPlay);
stopObv.addObserver(mediaplayerPause);
startObv.addObserver(addRecents);

home.setAttribute('href', `home.html?userId=${userId}`);
mediaplayer.setAttribute('href', `mediaplayer.html?userId=${userId}`);
artist.setAttribute('href', `artist.html?userId=${userId}`);
profile.setAttribute('href', `profile.html?userId=${userId}`);
