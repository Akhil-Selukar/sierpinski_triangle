let vertex1;
let vertex2;
let vertex3;
let area;

function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  translate(0, 600);
  scale(1, -1);
  vertex1 = new Pin(300, 500);
  vertex2 = new Pin(100, 100);
  vertex3 = new Pin(500, 100);

  area = areaCalculator(vertex1.x, vertex1.y
    , vertex2.x, vertex2.y
    , vertex3.x, vertex3.y);

  vertex1.drawPin();
  vertex2.drawPin();
  vertex3.drawPin();

  let pin = PinGenerator();
 
  for(let i = 1 ; i < 25000; i++){
    let vertex = random([vertex1, vertex2, vertex3]);
    let midPoint = getMidpoint(pin, vertex);
    midPoint.drawPin();
    pin = midPoint;
  }
}

function PinGenerator(){
  let inside = false;
  do{
    let x = random(600);
    let y = random(600);
  
    let inside = isInside(x, y);
    if(inside){
      return( new Pin(x, y));
    }
  }while(!inside);
}

function isInside(x, y){
  let A1 = areaCalculator(x, y, vertex2.x, vertex2.y, vertex3.x, vertex3.y);
  let A2 = areaCalculator(vertex1.x, vertex1.y, x, y, vertex3.x, vertex3.y);
  let A3 = areaCalculator(vertex1.x, vertex1.y, vertex2.x, vertex2.y, x, y);
	
  return (area == A1 + A2 + A3);
}

function areaCalculator(x1, y1, x2, y2, x3, y3){
  return Math.abs(((x1*(y2-y3))+(x2*(y3-y1))+(x3*(y1-y2)))/2);
}

function getMidpoint(pin1, pin2){
  return new Pin(((pin1.x + pin2.x)/2), ((pin1.y + pin2.y)/2));
}
