var cols=6;
var rows=16;
var squarecreateCanvas=50;
var speed = 1;
var speed2 = 1 ;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent(mySketch);
  noStroke();
}

function draw() {
  background('#0B3351');
  speed = speed + 1;
  for (var i=0; i<rows; i=i+2) {
    for (var j=0; j<cols; j=j+2) {
      var x=i*squarecreateCanvas;
      var y=j*squarecreateCanvas;
      if (j%2==0) {
        fill('#0197F6');
        rect(x+speed, y, squarecreateCanvas, squarecreateCanvas);
        fill('#69CDFF');
        rect((x+13)+speed, y+13, squarecreateCanvas/2, squarecreateCanvas/2);
      }
      if(speed>width){
        speed=-800;
      }
    }
  }
  for (var k=0; k<rows; k=k+2) {
    for (var l=0; l<cols; l=l+2) {
      var n=k*squarecreateCanvas;
      var m=l*squarecreateCanvas;
      speed2=speed-1;
      if (l%2==0) {
        fill('#F4447F');
        rect((n+squarecreateCanvas)-speed2, m+squarecreateCanvas, squarecreateCanvas, squarecreateCanvas);
        fill('#FF8FBA');
        rect((n+63)-speed2, m+63, squarecreateCanvas/2, squarecreateCanvas/2);
      }
      if(speed2>width){
        speed2=-800;
      }
    }
  }
}





/* var cols=6;
var rows=16;
var squaresize=50;
var speed;
var speed2;

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent(mySketch);
    noStroke();

}
function draw() {
    background('#0B3351');
    speed=speed+3;
    for (var i=0; i<rows; i=i+2) {
        for (var j=0; j<cols; j=j+2) {
            var x=i*squaresize;
            var y=j*squaresize;
            if (j%2==0) {
                fill('#F4447F');
                rect(x+speed, y, squaresize, squaresize);
                fill('#FF8FBA');
                rect((x+13)+speed, y+13, squaresize/2, squaresize/2);
            }
            
            if(speed>width){
            speed=-800;
            }
        }
    }
    for (var k=0; k<rows; k=k+2) {
        for (var l=0; l<cols; l=l+2) {
            var n=k*squaresize;
            var m=l*squaresize;
            speed2=speed-3;
            if (l%2==0) {
                fill('#0197F6');
                rect((n+squaresize)-speed2, m+squaresize, squaresize, squaresize);
                fill('#69CDFF');
                rect((n+63)-speed2, m+63, squaresize/2, squaresize/2);
            }
            if(speed2>width){
                speed2=-800;
            }   
        }
    }
}  */