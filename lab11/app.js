var sideCount = 4;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.fillStyle = randomColor();

var PI2 = Math.PI * 2;
var cx = 150;
var cy = 150;
var radius = 100;

var xx = function (a) {
  return cx + radius * Math.cos(a);
};
var yy = function (a) {
  return cy + radius * Math.sin(a);
};
var lerp = function (a, b, x) {
  return a + x * (b - a);
};

var sides = [];
for (var i = 0; i < sideCount; i++) {
  sides.push(makeSide(i, sideCount));
}

var percent = 0;
var percentDirection = 0.5;

$("#toShape").click(function () {
  percentDirection = -0.5;
});

$("#toCircle").click(function () {
  percentDirection = 0.5;
});
$("#stop").click(function () {
  percentDirection = 0;
});
animate();

function animate() {
  requestAnimationFrame(animate);
  drawSides(percent);
  percent += percentDirection;
  if (percent > 100) {
    percent = 100;
  }
  if (percent < 0) {
    percent = 0;
  }
}

function drawSides(pct, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (pct == 100) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, PI2);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(sides[0].x0, sides[0].y0);
    for (var i = 0; i < sideCount; i++) {
      var side = sides[i];
      var cpx = lerp(side.midX, side.cpX, pct / 100);
      var cpy = lerp(side.midY, side.cpY, pct / 100);
      ctx.quadraticCurveTo(cpx, cpy, side.x2, side.y2);
    }
    ctx.fill();
  }
}

function makeSide(n, sideCount) {
  var sweep = PI2 / sideCount;
  var sAngle = sweep * (n - 1);
  var eAngle = sweep * n;

  var x0 = xx(sAngle);
  var y0 = yy(sAngle);
  var x1 = xx((eAngle + sAngle) / 2);
  var y1 = yy((eAngle + sAngle) / 2);
  var x2 = xx(eAngle);
  var y2 = yy(eAngle);

  var dx = x2 - x1;
  var dy = y2 - y1;
  var a = Math.atan2(dy, dx);
  var midX = lerp(x0, x2, 0.5);
  var midY = lerp(y0, y2, 0.5);
  var cpX = 2 * x1 - x0 / 2 - x2 / 2;
  var cpY = 2 * y1 - y0 / 2 - y2 / 2;

  return {
    x0: x0,
    y0: y0,
    x2: x2,
    y2: y2,
    midX: midX,
    midY: midY,
    cpX: cpX,
    cpY: cpY,
    color: randomColor(),
  };
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

$(document).ready(function () {
  var flag,
    dot_flag = false,
    prevX,
    prevY,
    currX,
    currY = 0,
    color = "black",
    thickness = 2;
  var $canvas = $("#canvas1");
  var ctx = $canvas[0].getContext("2d");

  $canvas.on("mousemove mousedown mouseup mouseout", function (e) {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - $canvas.offset().left;
    currY = e.clientY - $canvas.offset().top;
    if (e.type == "mousedown") {
      flag = true;
    }
    if (e.type == "mouseup" || e.type == "mouseout") {
      flag = false;
    }
    if (e.type == "mousemove") {
      if (flag) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.stroke();
        ctx.closePath();
      }
    }
  });

  $(".canvas-clear").on("click", function (e) {
    c_width = $canvas.width();
    c_height = $canvas.height();
    ctx.clearRect(0, 0, c_width, c_height);
    $("#canvasimg").hide();
  });
});
