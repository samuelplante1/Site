var s;
var scl = 20;
var food0;
//var food1;
//var food2;
//var food3;
var boxes = 25;
var fps = 12;


function setup() {
				 createCanvas (scl * boxes, scl * boxes);
				s = new Snake();
				food0 = pickLocation();
				//food1 = pickLocation();
				//food2 = pickLocation();
				//food3 = pickLocation();
				frameRate(fps);
				var points = document.getElementById("points").innerHTML = "Score: " + s.score;
}


function draw(){
				background(61);
				fill(255, 255, 150);
	rect(food0.x, food0.y, scl, scl)
	//rect(food1.x, food1.y, scl, scl)
	//rect(food2.x, food2.y, scl, scl)
	//rect(food3.x, food3.y, scl, scl)
				if (s.eat(food0)){
					food0 = pickLocation();
				}
				//if (s.eat(food1)){
				//	food1 = pickLocation();
				//}
				//if (s.eat(food2)){
				//	food2 = pickLocation();
				//}
				//if (s.eat(food3)){
				//	food3 = pickLocation();
				//}
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
				var location = createVector(scl * floor(random(boxes)), scl * floor(random(boxes)));
				if (location.x == s.x &&  location.y === s.y){
					pickLocation();
				}
				if (!(s.validlocation(location.x, location.y))){
					pickLocation();
				} else{
				return location;
				}
}
