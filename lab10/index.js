const canvas = document.getElementById("c1");
const context = c1.getContext("2d");
let c={
    x:75,y:100,r:55
  }
  let angle = (2*Math.PI)/3;
  let points = [];
  for(let i = 0; i < 3; i++){
    let o = {}
    o.x = c.x + c.r*Math.cos(i*angle);
    o.y = c.y + c.r*Math.sin(i*angle);
    points.push(o); 
  }
  context.beginPath();
  context.arc(c.x,c.y,c.r,0,2 * Math.PI);
  context.stroke();
  context.beginPath();
  context.moveTo(points[0].x,points[0].y);
  for(let i = 1; i < points.length; i++){
    context.lineTo(points[i].x,points[i].y);
  }
  context.closePath();
  var centerX = canvas.width / 2; 
  var centerY = canvas.height / 4; 
  
  var radius = canvas.width / 4; 
  var startingAngle = Math.PI;
  var endingAngle = 0;
  var counterclockwise = true;
  
  context.arc(centerX, centerY, radius, startingAngle,
      endingAngle, counterclockwise);
  
  context.lineWidth = 4;
  context.strokeStyle = "#369";
  context.stroke();