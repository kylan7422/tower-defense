//Enemy class
class Enemy extends Sprite{
  constructor ( x=waypoints1[0].x, y=waypoints1[0].y, factor=3){
    super(x, y, '../../pictures/orc.png', 7,5, 742/7, 79)
    this.waypointId = -1
    this.health=1
    this.fillStyle='red'
    this.factor=factor
    this.currentFrame=Math.floor(Math.random()*6)
  }
  draw(){
    super.draw()
    //draw healthbar
    let hpDraw= this.width*this.health
    let hpLoss= this.width*(1-this.health)
    c.fillStyle='green'
    c.fillRect (this.center.x, this.center.y-30,hpDraw, 10)
    c.fillStyle='red'
    c.fillRect (this.center.x+this.width, this.center.y-30,-hpLoss, 10)
  }
  update(){
    this.draw();
    //MOVE ENEMIES ALONG WAYPOINTS
    if(this.waypointId<waypoints1.length-1){
      let distanceX = waypoints1[this.waypointId+1].x-this.x
      let distanceY = waypoints1[this.waypointId+1].y-this.y
      let angle = Math.atan2(distanceY, distanceX)
      let dx =Math.cos(angle)
      let dy =Math.sin(angle)
      this.x+=dx*this.factor
      this.y+=dy*this.factor

        if( Math.abs(this.x-waypoints1[this.waypointId+1].x)<35&&
            Math.abs(this.y-waypoints1[this.waypointId+1].y)<35) {
          this.waypointId=this.waypointId+1
        }
      this.center = {
        x:this.x-0.5*this.width,
        y:this.y-0.5*this.height
      }
    }
  }
  

}