var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

canvas.height = screen.height-200;
canvas.width = screen.width -100;

var g = 0.1635;
var balls;
var numBalls = prompt('how many balls would you like to have bounce?'); 
var C_d = .8;
 
window.onload = init; 
 
function init() {
	balls = []; // creates empty array
	for (var i=0; i<numBalls; i++){
		radius = Math.random()*20+5;
		var ball = new Ball();	
		ball.x = 50;
		ball.y = 75;
		ball.radius =  radius;
		ball.vx = Math.random()*15;
		ball.vy = (Math.random()-0.5)*10;
		ball.color = getRandomColor();
		ball.draw(context);
		balls.push(ball);
	}  
	setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
	context.clearRect(0, 0, canvas.width, canvas.height); 
	for (var i=0; i<numBalls; i++){
		var ball = balls[i];
		ball.vy += g;     

		if (ball.vx >0){   // while vx is still positive, decrease it incrementally to represent air resistance/friction
    ball.vx -= .001;
  } else{
    ball.vx === 0;   // the instant vx is 0 or negative, it is set to 0 to stop the movement in x direction
  }
		ball.x += ball.vx; 
		ball.y += ball.vy; 
			
		if (ball.y > canvas.height - ball.radius){ 
			ball.y = canvas.height - ball.radius; 
			ball.vy *= -C_d; 
		}
		if (ball.x + ball.radius > canvas.width){
			ball.x = canvas.width - ball.radius; 
			ball.vx *= -C_d;
		}
		if (ball.x < ball.radius){
			ball.x = ball.radius;
			ball.vx *= -C_d;
		}
		ball.draw(context); 
	} 
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}