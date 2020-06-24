const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
// const widthInput = document.getElementById('width__control');

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeWidth(e) {
  console.log(e.target.value);
  ctx.lineWidth = e.target.value;
}

function changeColor(e) {
  console.log(e.target.value);
  ctx.strokeStyle = `${e.target.value}`;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

width__control.addEventListener('input', changeWidth)
color__control.addEventListener('input', changeColor)
