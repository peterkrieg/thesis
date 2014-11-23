
// function sayHello(){
// 	console.log('hello world again');
// 	this.name = "something";
// 	this.age = 22;
// }

// sayHello();

// console.log(sayHello.name);


//   here I will start the part involving the canvas

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width=screen.width;

context.strokeStyle = '#0000ff'; 
context.lineWidth = 5; 

// context.beginPath() ; 
// context.moveTo(20, 100); 
// context.lineTo(250, 400); 
// context.stroke();

// context.moveTo(250, 400);
// context.lineTo(500, 500);
// context.stroke();



// context.moveTo(300, 300);
// context.lineTo(300, 600);
// context.stroke();









var x = 0;
var y = 500;

function init(){
	setInterval(onEachStep, 500);
}


context.moveTo(0, 500);

function onEachStep(){
	context.lineTo(x, y);
	context.stroke()
	x+=72;
	
 
	

}

init();


console.log('screen widht is  ' + screen.width);










