slots = [];
let slotmachine;
let display;

let t = "Push the button to start!"
let ts;

let mySound;
let mySound2;
var x;
var changeDirection;

var isPlaying = false;

function preload() {
  slots[0] = loadImage("images/1.png");
  slots[1] = loadImage("images/2.png");
  slots[2] = loadImage("images/3.png");
  slots[3] = loadImage("images/4.png");
  slots[4] = loadImage("images/7.png");
  sm = loadImage("images/5.png");
  cg = loadImage("images/6.png");
  bg = loadImage("images/Pixel Casino.png")
  tb = loadImage("images/TextBox.png")
  myFont = loadFont("font/PressStart2P-Regular.ttf")
  mySound = loadSound('sounds/1.mp3')
  mySound2 = loadSound('sounds/2.mp3')
}

function setup() {
  canvas = createCanvas(windowWidth / 1.1, windowHeight);
  canvas.parent('myCanvas');


  rectMode(CENTER);
  x = 1;
	changeDirection = false;

  background(bg, windowWidth, windowHeight, windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  textResize();
  frameRate(5);

  button = createButton('START');
  button.parent('button2');
  button.mousePressed(roll);


}

function draw() {
image(sm, windowWidth * 0.455, windowHeight * 0.5, windowWidth * 0.325, windowHeight);





  jackPot();
  textBox();
}

function roll() {

  t = "No luck, try again!";

  fill(0, 0, 0);
  rect(windowWidth * 0.454, windowHeight * 0.435, windowWidth * 0.19, windowHeight * 0.17);
  slotResult1 = int(random(slots.length));
  slotResult2 = int(random(slots.length));
  slotResult3 = int(random(slots.length));

  if (slotResult1 == 0 && slotResult2 == 0 && slotResult3 == 0) {
    t = "BewmBoom, originally a hero I conceptualized that has explosive capabilities depending on what he ate, he loves spicy food!";
    mySound2.play();

  } else if (slotResult1 == 1 && slotResult2 == 1 && slotResult3 == 1) {
    t = "Burgers?! I love burgers! Not much else to say about them!";
    mySound2.play();

  } else if (slotResult1 == 2 && slotResult2 == 2 && slotResult3 == 2) {
    t = "Father Duck! Calm and collected family man of his wife and daughter. But little do they know he is secretely the leader of a criminal syndicate! (Orignal concept done by my girlfriend)";
    mySound2.play();

  } else if (slotResult1 == 3 && slotResult2 == 3 && slotResult3 == 3) {
    t = "WOAH LUCKY STRAIGHT! CONGRATULATIONS!!! No info this time, but enjoy your coins!";
    mySound2.play();

  } else if (slotResult1 == 4 && slotResult2 == 4 && slotResult3 == 4) {
    t = "WOAH JACKPOT! THATS ME!!! Im a original character designed specifically for this project! Im said to give people the best luck when playing! Although I can't say the same for myself-";
    mySound2.play();

  }
  image(slots[slotResult1], windowWidth * 0.39, windowHeight * 0.43, windowWidth * 0.06, windowHeight * 0.08);
  image(slots[slotResult2], windowWidth * 0.455, windowHeight * 0.43, windowWidth * 0.06, windowHeight * 0.08);
  image(slots[slotResult3], windowWidth * 0.52, windowHeight * 0.43, windowWidth * 0.06, windowHeight * 0.08);

  console.log(slotResult1);
  console.log(slotResult2);
  console.log(slotResult2);



}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  image(bg, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function textResize() {
  if (windowWidth > 1500) {
    ts = 20;
  } else if (windowWidth > 1200) {
    ts = 10;
  } else if (windowWidth > 900) {
    ts = 5;
  } else if (windowWidth > 500)
    ts = 2;
}
function jackPot(){
  push();


  translate(x,0, 0);

  image(cg, width * 0.8, windowHeight / 2.3, width * 0.3, height * 0.6);

 if(x>5){
   changeDirection=true}
 else if (x<=0){
   changeDirection=false}
 if (x>=0 && changeDirection == false){
   x=x+1}
 else if(changeDirection == true){
   x=x-1
}
console.log (windowHeight);

  pop();
}
function textBox(){
  push();
  image(tb, windowWidth / 1.4, windowHeight / 1.2, windowWidth / 2.1, windowHeight / 1.9);
  textFont(myFont);
  textSize(ts);
  text(t, windowWidth / 1.4, windowHeight / 0.98, windowWidth / 2.7, windowHeight / 1.9);
pop();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  play();
} else if(keyCode === RIGHT_ARROW) {
  pause();

  }
}

function pause(){
  if (mySound.isPlaying() === true ) { // .isPlaying() returns a boolean
    mySound.pause();
}
}
function Music(){
      mySound.play();
}
function keyPressed() {
  if (keyCode === 49) {
  Music();
} else if(keyCode === 50) {
  pause();

  }
}
