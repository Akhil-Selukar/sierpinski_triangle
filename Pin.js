class Pin{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
  
    drawPin(){
      strokeWeight(1);
      // stroke('purple');
      point(this.x, this.y);
    }
  }