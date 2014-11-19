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
var C_r = .75;  // Coefficient of restitution (tennis ball would be .8)
var rho = 1.2;    // density of air would be 1.2
var dt = 0.015;  // Time Step
var C_d = 0.47 //Coefficient of drag for ball
var A = Math.PI * r * r / 10000;
var color = 'red';


window.onload = init();
  
function init(){
  setInterval(onEachStep, dt * 1000);
}


function onEachStep(){ 
  var fy = 0;
  fy += m * 9.81;   // weight force
  fy += -1 * 0.5 * rho * C_d * A * vy * vy;  // air resistance force
  dy = vy * dt + (0.5 * ay * dt * dt);  // verlet integration
  y += dy * 100;  // scaling, math assumes meters, but actually we're using pixels
  ay = fy / m;
  vy += ay * dt;
  
  if (y + r > canvas.height){ // simple collision detection for floor only
    console.log(vy);
    vy *= -C_r; 
    y = canvas.height - r;  
    console.log(vy);
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
   











































// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d'); 

// canvas.height = screen.height-200;
// canvas.width = screen.width -100;

// var radius = 20; // radius of ball in cm, aka pixels
// var color = "red";
// var g = 0.1635; // acceleration due to gravity
// var x = 40;  // initial horizontal position
// var y = 40;  // initial vertical position
// var vx = parseFloat(prompt('what is the initial horizontal speed of ball you would like?(recommended values of 1-20'));  // initial horizontal speed 
// var vy = 0;  // initial vertical speed
// var m = 0.1;  // mass of ball, in kg
// var ay = 0; // initialize ay to be 0, even though it won't be later
// var ax = 0;
// var Cx = 0.8;
// var rho = 1.2; // density of air.  Water, ie would be 1000
// var Cd = 0.47; // coefficient of drag for a ball
// var A = Math.PI*radius*radius/10000; //Frontal area of ball, divided by 10000 for the 1px/1cm conversion
 
// window.onload = init; 
 
// function init() {
//   setInterval(onEachStep, 1000/.5); // 60 fps
// };
 
// function onEachStep() {
//   var fy = 0;  // initialize net force in y dir as 0
//   fy += m*9.81; // mg in positive y direction
//   fy += -1 * 0.5 * rho * Cd * A * vy * vy;  //air drag in negative y direction
//   fx = -1 *0.5 *rho * Cd * A *vx * vx; // air drag in negative x direction


//   ay = fy/m; 
//   ax = fx/m;
//   console.log(fy);


//   vy += ay; // gravity increases the vertical speed
//   vx += ax;
//   x += vx; // horizontal speed increases horizontal position 
//   y += vy; // vertical speed increases vertical position

//   // if(y > canvas.height -radius*1.01 && y < canvas.height - radius*.99){
//   //   vx *= .99; // friction between floor and ball
//   // }
//   if (y > canvas.height - radius){ // if ball hits the ground
//     y = canvas.height - radius; // reposition it at the ground
//     vy *= -Cx; // then reverse and reduce its vertical speed
//   }
//   if (x > canvas.width - radius){ // if ball hits right wall
//     x = canvas.width - radius; // reposition it right at wall 
//     vx *= -Cx;  // then reduce and reverse horizontal speed
//   }
//   if (x < radius){  // if ball hits left wall
//     x = radius;  // reposition it right at wall
//     vx *= -Cx  // then reverse and reduce horizontal speed
//   }
//   drawBall(); // draw the ball
// };
 
// function drawBall() {
//     with (context){
//         clearRect(0, 0, canvas.width, canvas.height); 
//         fillStyle = color;
//         beginPath();
//         arc(x, y, radius, 0, 2*Math.PI, true);
//         closePath();
//         fill();
//     };
// };