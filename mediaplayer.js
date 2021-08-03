import { audio, stopBtn, startBtn } from './js/util.js';
import Canvas from './js/canvas.js';
import Observer from './js/Observer.js';

const startObv = new Observer(startBtn);
const stopObv = new Observer(stopBtn);
const canvas = new Canvas();
const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);
const audioAnalyser = audioCtx.createAnalyser();
const bufferLength = audioAnalyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function animateCanvas() {
  audioSrc.connect(audioAnalyser);
  audioAnalyser.connect(audioCtx.destination);
  audioAnalyser.fftSize = 1024;
  audioAnalyser.smoothingTimeConstant = 0;
  audioAnalyser.getByteTimeDomainData(dataArray);
  canvas.clearCanvas();
  for (let i = 0; i < bufferLength; i++) {
    canvas.drawCanvas(i, dataArray);
    console.log(dataArray);
  }
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

// function prevSong() {
//   songIndex--;

//   if (songIndex < 0) {
//     songIndex = songs.length - 1;
//   }

//   loadSong(songs[songIndex]);
//   mediaplayer();
// }

startObv.addObserver(mediaplayerPlay);
stopObv.addObserver(mediaplayerPause);

startObv.button.addEventListener('click', () => {
  startObv.notifyObservers();
});

stopObv.button.addEventListener('click', () => {
  stopObv.notifyObservers();
});
