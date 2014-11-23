var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ctx = canvas.getContext('2d');

canvas.height=screen.height-200;
canvas.width=screen.width-200;

var x = 40;
var y =40;
var vy = 0;
var ay = 0;
var m = 100;
var r = 20; 
var C_r = .5;  // Coefficient of restitution (tennis ball would be .8)
var rho = 1.2;    // density of air would be 1.2, water would be 1000
var dt = 0.015;  // Time Step
var C_d = 0.47; //Coefficient of drag for ball
var A = Math.PI * r * r / 10000;
var color = 'red';


window.onload = init();
  
function init(){
	setInterval(onEachStep, 1000/60);
}


function onEachStep(){ 
  var fy = 0;
  fy += m * 90.81;   // weight force
  if (vy>=0){
  	fy -= 1* 0.5 *rho * C_d *A *vy *vy; 
	} 
  else {
  	fy += 1*0.5 *rho *C_d *A *vy *vy;

  }

  // fy += 1 * 0.5 * rho * C_d * A * vy * vy;  // air resistance force
  ay = fy / m;
  vy += ay * dt;
  y += vy;

  
  if (y + r > canvas.height){ // simple collision detection for floor only
  	console.log('vy is ' +vy);
    vy *= -C_r; 
    y = canvas.height - r;  
    // console.log('fy is ' +fy);
    // console.log('ay is ' +ay);
    console.log('vy is ' +vy);
  }
  drawBall();
}

function drawBall() {
  with (context){
    clearRect(0, 0, canvas.width, canvas.height); 
    fillStyle = color;
    beginPath();
    arc(x, y, r, 0, 2*Math.PI, true);
    closePath();
    fill();
  };
};
   

