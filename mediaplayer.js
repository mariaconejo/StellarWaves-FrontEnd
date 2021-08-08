import { audio, stopBtn, startBtn, prevBtn } from './js/util.js';
import {
  playListParam, songParam, artistPlaylistParam, linkSong,
} from './js/util.js';
import Canvas from './js/canvas.js';
import ObserverMediaPlayer from './js/observer.js';
import { artistApi } from './js/api.js';

const audio = document.querySelector('#audio');

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
  console.log(index);
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
