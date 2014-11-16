var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

canvas.height = screen.height-200;
canvas.width = screen.width -100;

var radius = 20;
var color = "red";
var g = .20; // acceleration due to gravity
var x = 40;  // initial horizontal position
var y = 40;  // initial vertical position
var vx = prompt('what is the initial horizontal speed of ball you would like?  (recommended values of 1-20');  // initial horizontal speed 
var vy = 0;  // initial vertical speed
 
window.onload = init; 
 
function init() {
  setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
  vy += g; // gravity increases the vertical speed

  if(y=== canvas.height - radius){
    vx *= -.1
  }

  x += vx; // horizontal speed increases horizontal position 
  y += vy; // vertical speed increases vertical position
 
  if (y > canvas.height - radius){ // if ball hits the ground
    y = canvas.height - radius; // reposition it at the ground
    vy *= -0.9; // then reverse and reduce its vertical speed
  }
  if (x > canvas.width - radius){ // if ball hits right wall
    x = canvas.width - radius; // reposition it right at wall 
    vx *= -0.8;  // then reduce and reverse horizontal speed
  }
  if (x < radius){  // if ball hits left wall
    x = radius;  // reposition it right at wall
    vx *= -0.8  // then reverse and reduce horizontal speed

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