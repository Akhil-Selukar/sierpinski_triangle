class Pin{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
  
    drawPin(){
      strokeWeight(2);
      // stroke('purple');
      point(this.x, this.y);
    }
  }