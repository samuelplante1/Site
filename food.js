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
			var chance = random(100)
			if (chance < 2){
				return 3;
				} else if (chance < 7) {
				return 2;
			} else if (chance < 12) {
				return 4;
			} else if (chance < 14) {
			return 10;
		} else if (chance < 27) {
		return 1;
				} else {
				return 0;
			 }

		}

		this.notFood = function(px, py) {
			for (var i = 0; i <this.cell.length; i++){
				if (px === this.cell[i].x && py === this.cell[i].y){
					return false;
				}
			  }
					return true;

		}
}
