background(255);
function patch1(x,y){
  noFill();
  stroke(0);
  rect(x,y,100,100);
  for (var i = 0; i<100; i=i+10) {
    stroke(i*5)
	  line(x,y+i,x+i,y);
  }
  for(var r=0; r<100; r=r+10){
    stroke(255,0,0)
    line(x+r,y+100,x+100,y+r)
}
}
patch1((width-100)/2,(height-100)/2);
