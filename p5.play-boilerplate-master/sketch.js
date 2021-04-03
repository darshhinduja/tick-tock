var hr,mn,sc;

var scAngle;
var hrAngle;
var mnAngle;





function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();
  translate(200,200);
  rotate (-90);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);
  


  //drawing seconds hand
   push();
    rotate(scAngle);

    //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  
  push();
  rotate(mnAngle);

  //rotate the hand based on angle calculated
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop()


push();
rotate(hrAngle);

//rotate the hand based on angle calculated
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop()


 
}