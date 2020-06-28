function bgFill() {
  const bg = document.getElementById('Slogan');
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log(width, height);

  var html = '';
  var text = ''

  for(var i=0; i<50; i++) {
    for (var j = 0; j < 50; j++) {
      text += '#art'
    }
      html += `<p>${text}</p>`;
  }
  bg.innerHTML = html
}

bgFill();

const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
const rainbow = document.getElementById('rainbow')
// const widthInput = document.getElementById('width__control');

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let raindbowOn = false
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  if (raindbowOn) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  }
  hue++;
}

function changeWidth(e) {
  ctx.lineWidth = e.target.value;
}

function changeColor(e) {
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

rainbow.addEventListener('change', function() {
  if (this.checked) {
    raindbowOn = true;
  } else {
    raindbowOn = false;
  }
});

function download(){
  var download = document.getElementById("download");
  var image = document.getElementById("draw").toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}
