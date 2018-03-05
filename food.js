var foodnumber = 5;

function Food() {
    this.cell = [];


    this.pickLocation = function() {
              var location = createVector(scl * floor(random(boxes)), scl * floor(random(boxes)));
              while((location.x === s.x &&  location.y === s.y) || (!(s.validlocation(location.x, location.y)))) {
              var location = createVector(scl * floor(random(boxes)), scl * floor(random(boxes)));
              }
              return location;
            }


    this.placefood = function() {
              for (var i = 0; i < foodnumber; i++){
                this.cell[i] = this.pickLocation();
              }
    }


}
