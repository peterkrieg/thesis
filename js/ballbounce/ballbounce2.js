var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ctx = canvas.getContext('2d');

canvas.height=screen.height-300;
canvas.width=screen.width-100;

var i =0;
var x = 40;
var y =40;
var vy = 0;
var ay = 0;
var m = .001;
var r = 20;
// var rSI = 2;
var rSI = r* 0.0002309090909;  // radius SI, conversion between pixels to meters
                               // optimized for macbook pro (110 dpi)
var C_r = .8;  // Coefficient of restitution (tennis ball would be .8)
var rho = 1.2;    // density of air would be 1.2, water would be 1000
var dt = 60/1000;  // Time Step
var C_d = 0.47; //Coefficient of drag for ball
var A = Math.PI * rSI * rSI;
var color = 'red';

var lookreal = 1/3.105;  // this makes the simulation look more realistic, looks too fast before


window.onload = init();
  
function init(){
  console.log(vy);
  setInterval(onEachStep, 1000/60);
}


function onEachStep(){ 
  var fy = 0;

  fy += m * 9.81;   // weight force
  if (vy>=0){
    fy -= 1* 0.5 *rho * C_d *A *vy *vy; 
  } 
  else {
    fy += 1*0.5 *rho *C_d *A *vy *vy;

  }

  ay = fy / m;
  vy += ay * dt *lookreal;
  y += vy;
  if(i%30===0){
    console.log(i/30 +'  sec up!!');
    console.log(vy);
    console.log(ay);
  }

  
  if (y + r > canvas.height){ // simple collision detection for floor only
    vy *= -C_r; 
    y = canvas.height - r;  
    // console.log('fy is ' +fy);
    // console.log('ay is ' +ay);
  }
  drawBall();
  i++;
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
   

