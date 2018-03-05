var foodnumber = 5;

function Food() {
    this.cell = [];
		this.color = [];

    this.pickLocation = function() {
              var location = createVector(scl * floor(random(boxes)), scl * floor(random(boxes)));
              while((location.x === s.x &&  location.y === s.y) || (!(s.validlocation(location.x, location.y))) || !(this.notFood(location.x, location.y))) {
              var location = createVector(scl * floor(random(boxes)), scl * floor(random(boxes)));
              }
              return location;
            }


    this.placefood = function() {
              for (var i = 0; i < foodnumber; i++){
                this.cell[i] = this.pickLocation();
								this.color[i] = this.pickcolor();
              }
    }

		this.pickcolor = function() {
			 if (random(10) < 1){
				 return 1;
			 } else {
				 return 0;
			 }

		}

		this.notFood = function(px, py) {
			for (var i = 0; i <this.cell.length; i++){
				if (px === this.cell[0].x && py === this.cell[0].y){
					return false;
				}
			  }
					return true;

		}
}

function cell(plocation, pcolor) {
	 this.lolcation = plocation;
	 this.c = pcolor;


}
