var a = prompt("enter the first value/variable:");
var b = prompt("enter the second value/variable:");


function setup(){
  createCanvas(400,400);

  var c = createButton("click me to swap");
  c.mousePressed(swap);
}

function draw(){
  background("brown");
}

function swap(){
  [a,b] = [b,a];

  console.log("the value before we swap=" + a);
  console.log("the value after swapping = " + b);
}