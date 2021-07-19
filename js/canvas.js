function App() {
	var audioElement = document.getElementById('audioElement');
	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var analyser = audioCtx.createAnalyser();

	var file = 'https://iondrimbafilho.me/ready_player_one.mp3';
	var playing = false;

	audioElement.volume = .5;

	var source = audioCtx.createMediaElementSource(audioElement);

	source.connect(analyser);
	source.connect(audioCtx.destination);

	var bufferLength = analyser.frequencyBinCount;
	var frequencyData = new Uint8Array(bufferLength);

	analyser.smoothingTimeConstant = .5;

	var canvas = document.getElementById('wave');

	drawCanvasWidth();
	drawCanvasHeight();

	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 10;

	audioElement.addEventListener('playing', function () {
		playing = true;
	});

	audioElement.addEventListener('pause', function () {
		playing = false;
	});

	audioElement.addEventListener('ended', function () {
		playing = false;
	});

	window.onresize = function () {
		canvasWidth = document.body.clientWidth;
		drawCanvasWidth();
	};

	this.loadSound = function () {
		var request = new XMLHttpRequest();

		request.open('GET', file, true);

		request.onload = function () {
			audioElement.src = file;
			audioElement.load();

			document.querySelector('.btn-play').addEventListener('click', function () {
				audioCtx.resume();
				audioElement.play();
			});

			document.querySelector('.btn-pause').addEventListener('click', function () {
				audioElement.pause();
			});
		}
		request.send();
	}

	function drawCanvasWidth() {
		canvas.style.width = (document.getElementsByTagName('section')[0].getBoundingClientRect().width) + 'px';
		canvas.width = parseInt(canvas.style.width);
	}

	function drawCanvasHeight() {
		canvas.style.height = '300px';
		canvas.height = parseInt(canvas.style.height);
	}

	function drawBar(left, top, width, height, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(left, height, 10, 0, 6 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
	}

	function play() {
		audioElement.resume();
		audioElement.play();
	}

	function drawWave() {
		if (playing) {
			analyser.getByteFrequencyData(frequencyData)

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			var width = 10;

			for (var j = 0; j < canvas.width; j++) {
				var left = (width + 10) * j;
				var topByte = (frequencyData[j]);
				var y = (topByte);

				if ((y > 10) && (y < 30)) {
					drawBar(left, y + y, width, y + 26, '#F7F1DE');
				}
			}
		}

		setTimeout(function () {
			requestAnimationFrame(drawWave);
		}, 30);
	}

	drawWave();
}

document.addEventListener('DOMContentLoaded', function () {
	window.app = new App();
	app.loadSound();

})