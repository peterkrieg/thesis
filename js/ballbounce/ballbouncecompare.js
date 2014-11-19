var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 


canvas.height = screen.height-200;
canvas.width = screen.width -100;



var C_r = .75;
var rho = 1.2;
var C_d = .47;


var dt = 0.015;
var color = 'red';
var radius = 20;
var balls;
var numBalls = prompt('how many balls would you like to have bounce?'); 
 
window.onload = init; 
 
function init() {
	balls = new Array();
	for (var i=0; i<numBalls; i++){
		var ball = new Ball(radius,color);	
		ball.x = (canvas.width/numBalls)*i +canvas.width/(numBalls*2);
		ball.y = 75;
		ball.vx = 0;
		ball.vy = 0;

		ball.ay = 0;
		ball.m = prompt('what would you like to be mass of ball #' +(i+1) +'?');
		ball.r = radius;
		ball.A = Math.PI * ball.r *ball.r /10000;


		ball.color = color;
		ball.draw(context);
		balls.push(ball);
	}  
	setInterval(onEachStep, dt*1000); // 60 fps
};
 
function onEachStep() {
	context.clearRect(0, 0, canvas.width, canvas.height); 
	for (var i=0; i<numBalls; i++){
		var ball = balls[i];
		ball.fy = 0;
		ball.fy += ball.m * 90.81;
		ball.fy += -1*0.5* rho*C_d * ball.A *ball.vy*ball.vy;

		ball.dy = ball.vy *dt +(0.5 * ball.ay* dt * dt);
		ball.y = ball.dy *100;
		ball.ay = ball.fy/ball.m;
		ball.vy += ball.ay *dt;


		ball.x += ball.vx; 
		ball.y += ball.vy; 

			
		if (ball.y + ball.r > canvas.height){ 
			ball.y = canvas.height - ball.r; 
			ball.vy *= -C_r; 
		}
		ball.draw(context); 
	} 
};
 