var hr , mn , sc;

function setup() {
  createCanvas(200,200);
}

function draw() {
  background("black");
  translate(width/2 , height/2);
  rotate(-90);
  angleMode(DEGREES);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc , 0 , 60 , 0 , 360);
  mnAngle = map(mn , 0 , 60 , 0 , 360);
  hrAngle = map(hr % 12 , 0 , 12 , 0 , 360);


  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(3);
  line(0 , 0 , 30 , 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(2 , 248 , 1);
  strokeWeight(3);
  line(0 , 0 , 45 , 0);
  pop();

  push();
  rotate(scAngle);
  stroke(248 , 0 , 4);
  strokeWeight(3);
  line(0 , 0 , 55 , 0);
  pop();

  strokeWeight(3);
  noFill();

  stroke(255 , 0 , 0);
  arc(0 , 0 , 150 , 150 , 0 , scAngle);

  stroke(2 , 248 , 1);
  arc(0 , 0 , 140 , 140 , 0 , mnAngle);

  stroke("blue");
  arc(0 , 0 , 130 , 130 , 0 , hrAngle);

}