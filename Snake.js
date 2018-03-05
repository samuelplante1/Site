

function Snake() {
			this.x = 0;
			this.y = 0;
			this.xspeed = 1;
			this.yspeed = 0;
			this.tail = [];
			this.score = 0;


			this.dir = function(x, y) {
						this.xspeed = x;
						this.yspeed = y;
			}

			this.update = function(){
									for (var i = 0; i < this.tail.length - 1; i++) {
										this.tail[i] = this.tail[i+1];
									}
									this.tail[this.tail.length-1] = createVector(this.x, this.y);
							this.x = this.x + this.xspeed*scl;
							this.y = this.y + this.yspeed*scl;
							this.x = constrain(this.x, 0, width - scl);
							this.y = constrain(this.y, 0, height - scl);
				}

				this.show = function(){
									fill(220);
							for (var i = 0; i < this.tail.length; i++){
								rect(this.tail[i].x, this.tail[i].y, scl, scl);
							}
							rect(this.x, this.y, scl, scl);
				}



			 this.eat = function(pos) {
										 var d = dist(this.x, this.y, pos.x, pos.y);
										 if (d < 1){
											this.tail[this.tail.length] = this.tail[this.tail.length-1];
											this.score += 5 * this.tail.length;
											var points = document.getElementById("points").innerHTML = "Score: " + this.score;
									return true;
									} else {
										return false;
									}
			}



			this.validlocation = function(px, py){
						//if (px === this.x && py === this.y){
						//	return false;
						//} else {
							for (var i = 0; i < this.tail.length; i++){
								if (px === this.tail[i].x && py === this.tail[i].y){
									return false;
							//	  }
								}
							}
									return true;
			}
}
