var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 
var canvas_bg = document.getElementById('canvas_bg');
var context_bg = canvas_bg.getContext('2d');

var planet;
var sun;
var m = 1; // planet's mass
var M = 10000000; // sun's mass
var G = 1;
var t0,dt;
var i =0;

window.onload = init; 




function init() {
	// create a stationary sun
	sun = new Ball(70,'orange',M);
	sun.pos2D = new Vector2D(475,250);	
	sun.draw(context_bg);
	// create a moving planet			
	planet = new Ball(2,'blue',m);
	planet.pos2D = new Vector2D(180,270);
	planet.oldpos2D = new Vector2D(planet.x, planet.y)
	planet.velo2D = new Vector2D(100, -180);
	// planet.velo2D = new Vector2D(70,-40);
	// planet.velo2D = new Vector2D(85,-40);
	// planet.velo2D = new Vector2D(80,0);
	// planet.velo2D = new Vector2D(100,0);
	// planet.velo2D = new Vector2D(195,0);		
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
	i++;

	moveObject(planet);
	calcForce();
	updateAccel();
	updateVelo(planet);
	if(i<960){
		if(i%30===0){
			console.log(i);
			context.strokeStyle = 'black';
			context.moveTo(planet.x, planet.y);
			context.lineTo(sun.x, sun.y);
			context.stroke();
			// console.log('%d  and    %d', planet.x, planet.y);
			// console.log('distance is %f', Vector2D.distance(planet.pos2D, sun.pos2D));
			// console.log(Vector2D.distance(planet.pos2D, planet.oldpos2D));
			var dr = Vector2D.distance(planet.pos2D, planet.oldpos2D);
			var r =  Vector2D.distance(planet.pos2D, sun.pos2D);
			// console.log('%f     %f', dr, r)
			console.log('dA is equal to:  %f', .5*r*dr);
			planet.oldpos2D=planet.pos2D;



		}
	}
}

function moveObject(obj){
	obj.pos2D = obj.pos2D.addScaled(obj.velo2D,dt);	
	// context.clearRect(0, 0, canvas.width, canvas.height);
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