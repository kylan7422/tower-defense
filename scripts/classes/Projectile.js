class Projectile extends Sprite{
  constructor(x=0, y=0, enemy={}){
    super(x,y, '../../pictures/projectile.png',1,1,32,26)
    this.factor=3
    this.enemy=enemy
  }
  flyToTarget(){
    this.draw()
    if(!p.enemies.includes(this.enemy)) 
      {
        return null
      }
      let xDistance=this.enemy.x-this.x
      let yDistance=this.enemy.y-this.y
      let angle = Math.atan2(yDistance, xDistance)

      let dx =Math.cos(angle)
      let dy =Math.sin(angle)
      this.x+=dx*this.factor
      this.y+=dy*this.factor
      this.center.x=this.x-0.5*this.width
      this.center.y=this.y-0.5*this.height
      xDistance=this.x-this.enemy.x
      yDistance=this.y-this.enemy.y

      let distance=Math.hypot(xDistance, yDistance)
      if (distance<10){
        if(this.enemy.health>0){
        this.enemy.health-=0.05
        }
        else{
          p.towers.forEach(tower =>{
            if (tower.enemies.includes(this.enemy)){
              tower.enemies.splice(tower.enemies.indexOf(this.enemy),1)
            }
          })
          p.enemies.splice(p.enemies.indexOf(this.enemy),1)
          p.money+=25
        }
        return null
    }
    return 1
  }
}