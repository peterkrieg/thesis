var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 
var canvas_bg = document.getElementById('canvas_bg');
var context_bg = canvas_bg.getContext('2d');

var planet;
var sun;
var m = 1; // planet's mass
var M = 1000000; // sun's mass
var G = 1;
var t0,dt;
var i = 0;


window.onload = init; 

function init() {
	// create a stationary sun
	sun = new Ball(400,'orange',M);
	sun.pos2D = new Vector2D(500,2900);	
	sun.draw(context_bg);
	// create a moving planet			
	planet = new Ball(10,'blue',m);
	planet.pos2D = new Vector2D(500,2490);
	// planet.velo2D = new Vector2D(0, -74);
	// planet.velo2D = new Vector2D(0,-68);
	planet.velo2D = new Vector2D(0,-70);
	console.log(planet.velo2D.length())

	planet.draw(context);
	// make the planet orbit the sun
	t0 = new Date().getTime(); 
	animFrame();
};

function animFrame(){
	animId = requestAnimationFrame(animFrame,canvas);
	onTimer(); 
}
function onTimer(){
	var t1 = new Date().getTime(); 
	dt = 0.001*(t1-t0); 
	t0 = t1;	
	if (dt>0.1) {dt=0;};	
	move();
}
function move(){			
	moveObject(planet);
	calcForce();
	updateAccel();
	updateVelo(planet);
	i++;
	if(i%15 ===0){console.log(planet.velo2D.length());}
}

function moveObject(obj){
	obj.pos2D = obj.pos2D.addScaled(obj.velo2D,dt);	
	context.clearRect(0, 0, canvas.width, canvas.height);
	obj.draw(context);	
}
function calcForce(){
	force = Forces.gravity(G,M,m,planet.pos2D.subtract(sun.pos2D));	
}	
function updateAccel(){
	acc = force.multiply(1/m);
}	
function updateVelo(obj){
	obj.velo2D = obj.velo2D.addScaled(acc,dt);				
}