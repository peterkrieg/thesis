var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 


canvas.height = screen.height-200;
canvas.width = screen.width -100;


var g = 0.1;
var radius;
var color = 'red';
var balls;
var numBalls = prompt('how many balls would you like to have bounce?'); 
 
window.onload = init; 
 
function init() {
	balls = new Array();
	for (var i=0; i<numBalls; i++){
		radius=Math.random()*20+5;
		var ball = new Ball(radius,color);	
		ball.x = 50;
		ball.y = 75;
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
			
		if (ball.y > canvas.height - radius){ 
			ball.y = canvas.height - radius; 
			ball.vy *= -0.8; 
		}
		if (ball.x > canvas.width + radius){ 
			ball.x = -radius; 
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
 