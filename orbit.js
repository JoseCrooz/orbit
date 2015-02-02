function Orbit(ctx){
  this.ctx = ctx;
}

Orbit.prototype.drawMoon = function(x,y,r,color){
  this.ctx.beginPath();
  this.ctx.arc(x, y, r, 0, (Math.PI * 2), true);
  this.ctx.closePath();
  this.ctx.fillStyle = color;
  this.ctx.fill();
};

Orbit.prototype.drawChar = function(x,y,chr,color){
  this.ctx.fillStyle = color;
  this.ctx.fillText(chr, x, y);
};

Orbit.prototype.drawArrow = function(point1,point2,point3,color){
  this.ctx.beginPath();
  this.ctx.moveTo(point1.x,point1.y);
  this.ctx.lineTo(point2.x,point2.y); 
  this.ctx.lineTo(point3.x,point3.y); 
  this.ctx.lineTo(point1.x,point1.y); 
  this.ctx.closePath();
  this.ctx.fillStyle = color;
  this.ctx.fill();
};

Orbit.prototype.drawLine = function(point1,point2,lw,color){
  this.ctx.beginPath();
  this.ctx.moveTo(point1.x,point1.y);
  this.ctx.lineTo(point2.x,point2.y);
  this.ctx.closePath();
  this.ctx.lineWidth = lw;
  this.ctx.strokeStyle = color;
  this.ctx.stroke();
};

Orbit.prototype.drawPath = function(x,y,r){
  this.ctx.beginPath();
  this.ctx.arc(x, y, r, 0, (Math.PI * 2), true);
  this.ctx.closePath();
  this.ctx.stroke();
};