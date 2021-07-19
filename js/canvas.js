const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const P = 10;
const A = 10;

class Canvas{
	constructor(width, height, color){
		this.width = width;
		this.height = height;
		this.color = color;
		
	}

	draw(shift) {
		this.width = canvas.width;
		this.height = canvas.height;
		shift = shift >= 500 * Math.PI ? shift - 100 * Math.PI : shift;
		ctx.clearRect(0, 0, this.width, this.height);
		this.color= ctx.createLinearGradient(0, 0, this.width, this.height);
		this.color.addColorStop(0, "#FFE4AD");
		this.color.addColorStop(1, "#119DA4");
		ctx.strokeStyle = this.color;
		ctx.lineCap = "round";
		for (let i = 0; i < this.width;) {
			let _A = Math.abs(A * Math.cos(2 * i));
			ctx.beginPath();
			let pos = Math.exp(-_A * i / this.width) * Math.sin(P * Math.PI * (i + shift) /this.width);
			pos *= this.height / 2;
			let lw = Math.exp(-_A * i / this.width) * Math.sin(3 * Math.PI * (i - shift) / this.width) * 2;
			ctx.lineWidth = (lw) + 1;
			ctx.lineTo(i, this.height / 2 - pos);
			ctx.closePath();
			ctx.stroke();
			i += 1;
		}
	
	}
	
}

let canvasPlayer = new Canvas()
canvasPlayer.draw(0);

