
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  let hr = hour();
let mn = minute();
let sc = second()

strokeWeight(7)
stroke(252,5,229)
noFill()


  let scAngle = map(sc,0,60,0,360)
arc(0,0,300,300,0,scAngle)
stroke(5,252,109)
let mnAngle = map(mn,0,60,0,360)
arc(0,0,280,280,0,mnAngle)
stroke(171,5,252)
let hrAngle = map(hr%12,0,12,0,360)
arc(0,0,260,260,0,hrAngle)



  push()
  rotate(scAngle)
  stroke(252,5,229)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(10,252,109)
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  
  push()
  rotate(hrAngle)
  stroke(171,5,252)
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  
  stroke(255);
  point(0, 0);

  push();
  fill(255);
  noStroke();
  rotate(90);
  textSize(30);
  textAlign(CENTER);
  textFont("algerian")
  text(hr + ':' + mn + ':' + sc , 10, 190);
  pop();
}