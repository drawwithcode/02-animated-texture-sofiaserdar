const colorList = ["yellow",
  "red",
  "blue",
  "violet",
  "pink",
  "green"
];


function preload() {}

function setup() {


  createCanvas(windowWidth, windowHeight)

}





function draw() {

background("black");

  for (let x = -100; x < 1700; x += 7)

  {



      if (mouseIsPressed==true) {

        stroke(color(random(colorList)));
      } else {
        stroke(color("white"));
      }

      line(x, 0, x + 100, windowHeight)





  }



}
