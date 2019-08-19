
var doc = document.getElementById('drawing')
var dibujo = doc.getContext('2d')

var doc2 = document.getElementById('drawing-2')
var dibujo2 = doc2.getContext('2d')

var doc3 = document.getElementById('drawing-3')
var dibujo3 = doc3.getContext('2d')

// eslint-disable-next-line no-unused-vars
function draw () {
  'use strict'
  var numLines = 20
  var color1 = '#4dbd92'
  var color2 = '#258a63'
  var color3 = '#FF0000'
  var color4 = '#f06795'

  var color5 = '#50337a'
  var color6 = '#ba95cc'

  drawLine1(color1, 0, 0, 0, 200)
  drawLine1(color1, 0, 0, 200, 0)
  drawLine1(color1, 0, 200, 200, 200)
  drawLine1(color1, 200, 200, 200, 0)

  for (var i = 0; i < numLines; i++) {
    var y1 = i * 10
    var x2 = 10 * (i + 1)
    if (i % 2 === 0) {
      drawLine1(color1, 0, y1, x2, 200)
      drawLine2(color3, 0, y1, x2, 200)
      drawLine3(color5, 0, y1, x2, 200)
    } else {
      drawLine1(color2, 0, y1, x2, 200)
      drawLine2(color4, 0, y1, x2, 200)
      drawLine3(color6, 0, y1, x2, 200)
    }
  }

  for (i = 0; i < numLines; i++) {
    y1 = 200 - (i * 10)
    x2 = 200 - (10 * (i + 1))
    if (i % 2 === 0) {
      drawLine1(color1, 200, y1, x2, 0)
      drawLine2(color3, 200, y1, x2, 0)
      drawLine3(color5, 200, y1, x2, 0)
    } else {
      drawLine1(color2, 200, y1, x2, 0)
      drawLine2(color4, 200, y1, x2, 0)
      drawLine3(color6, 200, y1, x2, 0)
    }
  }

  for (i = 0; i < numLines; i++) {
    y1 = 200 - (i * 10)
    x2 = 10 * (i + 1)
    if (i % 2 === 0) {
      drawLine1(color1, 0, y1, x2, 0)
      drawLine2(color3, 0, y1, x2, 0)
      drawLine3(color5, 0, y1, x2, 0)
    } else {
      drawLine1(color2, 0, y1, x2, 0)
      drawLine2(color4, 0, y1, x2, 0)
      drawLine3(color6, 0, y1, x2, 0)
    }
  }

  for (i = 0; i < numLines; i++) {
    y1 = i * 10
    x2 = 200 - (10 * (i + 1))
    if (i % 2 === 0) {
      drawLine1(color1, 200, y1, x2, 200)
      drawLine2(color3, 200, y1, x2, 200)
      drawLine3(color5, 200, y1, x2, 200)
    } else {
      drawLine1(color2, 200, y1, x2, 200)
      drawLine2(color4, 200, y1, x2, 200)
      drawLine3(color6, 200, y1, x2, 200)
    }
  }
}

function drawLine1 (color, x1, y1, x2, y2) {
  'use strict'
  dibujo.beginPath()
  dibujo.strokeStyle = color
  dibujo.moveTo(x1, y1)
  dibujo.lineTo(x2, y2)
  dibujo.stroke()
  dibujo.closePath()
}

function drawLine2 (color, x1, y1, x2, y2) {
  'use strict'
  dibujo2.beginPath()
  dibujo2.strokeStyle = color
  dibujo2.moveTo(x1, y1)
  dibujo2.lineTo(x2, y2)
  dibujo2.stroke()
  dibujo2.closePath()
}

function drawLine3 (color, x1, y1, x2, y2) {
  'use strict'
  dibujo3.beginPath()
  dibujo3.strokeStyle = color
  dibujo3.moveTo(x1, y1)
  dibujo3.lineTo(x2, y2)
  dibujo3.stroke()
  dibujo3.closePath()
}
