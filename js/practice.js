


console.log('hello world!!!');

function sayHello(){
	console.log('hello world again');
	this.name = "something";
	this.age = 22;
}

sayHello();

console.log(sayHello.name);


//   here I will start the part involving the canvas

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width=screen.width;

context.strokeStyle = '#0000ff'; 
context.lineWidth = 5; 
context.beginPath() ; 
context.moveTo(20, 100); 
context.lineTo(250, 400); 
context.stroke();

context.beginPath();
context.moveTo(250, 400);
context.lineTo(500, 500);
context.stroke();

context.strokeStyle= '#ff0000';
context.fillStyle = 'red';
context.fillRect(20, 40, 1370, 50);


context.fillStyle=''
context.moveTo(300, 300);
context.lineTo(300, 600);
context.stroke();


context.clearRect(0, 0, canvas.width, canvas.height);







context.moveTo(0, 0);
var x = 0;
var y = 0;

function init(){
	setInterval(onEachStep, 1000/60);
}



function onEachStep(){
	context.lineTo(x, y);
	context.stroke()
	x+=2;
	if(y<100){
		y+= .0003*(x*x);
	}
	else if (y<200){
		y+= 1;
 	}
 	else if (y<600){
 		y+= 2.5;
 	}
 
	

}

init();









