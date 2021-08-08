const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// clase del canvas
class Canvas {
  constructor() {
    this.width = canvas.width;
    this.height = canvas.height;
  }

  clearCanvas() {
    ctx.clearRect(0, 0, this.width, this.height);
  }
  // Se uso una gradiente
  drawCanvas(dataArray, bufferLength) {
    const gradient = ctx.createLinearGradient(10, 100, 200, 300);
    gradient.addColorStop('0', '#F7F1DE');
    gradient.addColorStop('0.5', '#FFE4AD');
    gradient.addColorStop('0.8', '#F7F1DE');
    gradient.addColorStop('1.0', '#F7F1DE');

    ctx.beginPath();
    ctx.moveTo(0 , dataArray[0]);
    for (let i = 0; i < bufferLength; i++){
      ctx.lineTo(i, dataArray[i]);
    }
    ctx.stroke();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;

}
}

export default Canvas;
