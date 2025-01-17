class Tower extends Sprite{
  constructor(x=0,y=0, enemyId=[]){
    super(x,y, '../pictures/tower.png', 19, 3, 2432/19, 144, false)
    this.shootingRadius= 300
    this.shootingRate= 1
    this.center.x=this.x
    this.center.y=this.y-this.height+64
    this.enemies=[]
    this.projectiles=[]
    this.secElapsedHolder=this.staticElapsedHolder
  }
  draw(){
    if(this.enemies.length>0){
      this.animate=true
    }
    else{
      this.animate=false
    }
    super.draw()
    c.fillStyle='rgba(0,200,200,0.08)'
    c.beginPath()
    c.arc(this.x+64, this.y+32, this.shootingRadius, 0, Math.PI*2)
    c.fill()
    

  }
  update(){
    this.draw()
    this.shoot()
  }
  shoot(){
    if (p.enemies.length<1) return null
      p.enemies.forEach(enemy => {
      let xDistance =enemy.x-this.x
      let yDistance = enemy.y-this.y
      let distance= Math.hypot(xDistance, yDistance)
      if (distance<this.shootingRadius && this.enemies.indexOf(enemy)==-1){
        this.enemies.push(enemy)
      }
      else if (distance<this.shootingRadius&& this.enemies.indexOf(enemy)!=-1){
        if (this.currentFrame==5){
        this.projectiles.push(new Projectile(this.center.x+0.5*this.width-4, this.center.y+10, this.enemies[0]))}
      }
      else if (!(distance<this.shootingRadius) &&this.enemies.indexOf(enemy)!=-1){
        this.enemies.splice(this.enemies.indexOf(enemy), 1)
      }
    })
    this.projectiles.forEach(projectile =>{
      if (projectile.flyToTarget()){
        projectile.flyToTarget()
      }
      else{
        this.projectiles.splice(this.projectiles.indexOf(projectile), 1)
      }

    })
  }
}