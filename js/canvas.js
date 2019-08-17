// var doc = document.getElementById("drawing");
// var dibujo = doc.getContext("2d");
// var numLines = 20;
// var color="#4dbd92";

// function makeDrawing() {
//     "use strict";
//     drawLine(color,0,0,0,200);
//     drawLine(color,0,0,200,0);
//     drawLine(color,0,200,200,200);
//     drawLine(color,200,200,200,0);


//     for(i=0; i<numLines;i++) {
//         y1 = i*10;
//         x2 = 10*(i+1);
//         drawLine(color,0,y1,x2,200);
//     }

//     for(i=0; i<numLines;i++) {
//         y1 = 200-(i*10);
//         x2 = 200-(10*(i+1));
//         drawLine(color,200,y1,x2,0);
//     }
// }

// function drawLine(color, x1, y1, x2, y2) {
//     "use strict";
//     dibujo.beginPath();
//     dibujo.strokeStyle = color;
//     dibujo.moveTo(x1,y1);
//     dibujo.lineTo(x2,y2);
//     dibujo.stroke();
//     dibujo.closePath();
// }



