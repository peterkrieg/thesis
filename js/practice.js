


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

setInterval(function(){context.clearRect(0, 0, 200, 500); }, 1000);

context.clearRect(0, 0, canvas.width, canvas.height);

context.moveTo(0, 0);

for(var i = 0; i<1000; i++){
  setInterval(function(){
  	var x = 0;
		var y = 0;
		x+=2;
		y+=2;
		context.lineTo(x, y);
		context.stroke();
  }, 10);
	

}






