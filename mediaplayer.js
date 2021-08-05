import { audio, stopBtn, startBtn } from './js/util.js';
import Canvas from './js/canvas.js';
import ObserverMediaPlayer from './js/observer.js';

const startObv = new ObserverMediaPlayer(startBtn, 'click');
const stopObv = new ObserverMediaPlayer(stopBtn, 'click');
const canvas = new Canvas();
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
  // console.log(dataArray);

  // if (audio.play) {
  window.requestAnimationFrame(animateCanvas);
  // }
}

function mediaplayerPlay() {
  audio.play();
  animateCanvas();
}

function mediaplayerPause() {
  audio.pause();
}

startObv.addObserver(mediaplayerPlay);
stopObv.addObserver(mediaplayerPause);
