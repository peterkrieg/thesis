console.log('hello world!!!');

function sayHello(){
	console.log('hello world again');
	this.name = "something";
	this.age = 22;
}

sayHello();

console.log(sayHello.name);

