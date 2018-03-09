var s;
var f;
var scl = 27;
var boxes = 20;
var fps = 10;
var highscore = 0;

function setup() {
				 createCanvas (scl * boxes, scl * boxes);
				s = new Snake();
				f = new Food();
				f.placefood();
				frameRate(fps);
				document.getElementById("points").innerHTML = "Score: " + s.score;
				document.getElementById("highscore").innerHTML = "highscore: " + s.score;
}


function draw(){
				if (!(s.validlocation(s.x, s.y)) || s.x === (boxes - 1) * scl &&s.xspeed === 1 || s.x === (0) * scl && s.xspeed === -1 ||s.y === (boxes - 1) * scl && s.yspeed === 1  || s.y === (0) * scl && s.yspeed === -1 ){
				if (highscore < s.score){
					highscore = s.score;
					document.getElementById("highscore").innerHTML = "highscore: " + s.score;
				}
				s = new Snake();
				}
				background(51);
				for (var i = 0; i < f.cell.length; i++){
							if (f.color[i] === 1){
							fill(150, 150, 255);
							} else  if (f.color[i] === 0){
							fill (255, 255, 150);
							} else if (f.color[i] === 2){
							fill (255, 200, 200);
							} else if (f.color[i] === 4){
							fill (150, 255, 150);
							} else if (f.color[i] === 3){
							fill (255, 100, 100);
							}

							if (s.eat(f.cell[i], f.color[i])){
									f.color[i] = f.pickcolor();
									f.cell[i] = f.pickLocation();
									rect(f.cell[i].x, f.cell[i].y, scl, scl, 5);
							} else {
								rect(f.cell[i].x, f.cell[i].y, scl, scl, 5);
							}
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
