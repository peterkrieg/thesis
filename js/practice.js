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

context.strokeStyle = '#0000ff'; 
context.lineWidth = 10; 
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
context.fillRect(20, 40, 10, 50);

