var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

canvas.height = screen.height-200;
canvas.width = screen.width -100;

var radius = 20;
var color = "red";
var g = .15; // acceleration due to gravity
var x = 50;  // initial horizontal position
var y = 50;  // initial vertical position
var vx = 2;  // initial horizontal speed
var vy = 0;  // initial vertical speed
 
window.onload = init; 
 
function init() {
  setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
  vy += g; // gravity increases the vertical speed

  if (vx >0){   // while vx is still positive, decrease it incrementally to represent air resistance/friction
    vx -= .001;
  } else{
    vx === 0;   // the instant vx is 0 or negative, it is set to 0 to stop the movement in x direction
  }

  x += vx; // horizontal speed increases horizontal position 
  y += vy; // vertical speed increases vertical position
 
  if (y > canvas.height - radius){ // if ball hits the ground
    y = canvas.height - radius; // reposition it at the ground
    vy *= -0.9; // then reverse and reduce its vertical speed
  }
  if (x > canvas.width + radius){ // if ball goes beyond canvas
    x = -radius; // wrap it around 
  }
  drawBall(); // draw the ball
};
 
function drawBall() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};