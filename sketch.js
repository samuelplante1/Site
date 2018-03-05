var s;
var scl = 20;
var food;
var boxes = 5;
var fps = 12;

function setup() {
				 createCanvas (scl * boxes, scl * boxes);
				s = new Snake();
				pickLocation();
				frameRate(fps);
}


function draw(){
				background(61);
				fill(255, 255, 150);
				rect(food.x, food.y, scl, scl)
				if (s.eat(food)){
					pickLocation();
				}
				if (!(s.validlocation(s.x, s.y))){
				//location = location;
				}
				s.update();
				s.show();

}


function keyPressed() {
					if (keyCode === UP_ARROW || keyCode === 87){
						if (!(s.yspeed === 1)){
					s.dir(0, -1);
					}
				} else if (keyCode === DOWN_ARROW || keyCode === 83){
						if (!(s.yspeed === -1)){
							s.dir(0, 1);
						}
					}else if (keyCode === RIGHT_ARROW || keyCode === 68){
						if (!(s.xspeed === -1)){
							s.dir(1, 0);
						}
					}else if (keyCode === LEFT_ARROW || keyCode === 65){
						if (!(s.xspeed === 1)){
							s.dir(-1, 0);
						}
					}
}

function pickLocation() {
				var col = floor(width / scl);
				var row = floor(height / scl);
				var foodtemp = createVector( floor(random(row)), floor( random(col)));
				foodtemp.mult(scl)
				if (!(s.validlocation(foodtemp.x, foodtemp.y))){
					pickLocation();
				} else{
				food = foodtemp
				}
}
