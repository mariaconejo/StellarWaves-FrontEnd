import { canvas, ctx } from './util.js';

class Canvas {
  constructor() {
    this.width = canvas.width;
    this.height = canvas.height;
  }

  clearCanvas() {
    ctx.clearRect(0, 0, this.width, this.height);
  }

  drawCanvas(i, dataArray) {
    // const gradient = ctx.createLinearGradient(10, 100, 200, 300);
    // gradient.addColorStop('0', '#F7F1DE');
    // gradient.addColorStop('0.5', '#FFE4AD');
    // gradient.addColorStop('0.8', '#F7F1DE');
    // gradient.addColorStop('1.0', '#F7F1DE');

    ctx.beginPath();
    ctx.moveTo(0, dataArray[0]);
    ctx.lineTo(i, dataArray[i]);

    ctx.stroke();
    // ctx.strokeStyle = gradient;
    // ctx.lineWidth = 2;

}
}

export default Canvas;
