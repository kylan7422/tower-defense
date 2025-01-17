
class Player{
  constructor(){
    this.money=100
    this.hearts=10
    this.towers=[]
    this.enemies=[]
    this.numberSpawn=3
    this.controlSpeed=1
  }
  update(){
    money.innerHTML=`${p.money} 💰`

    this.enemies=selectionSort(this.enemies)
    for(let i=0; i<this.enemies.length; i++){
      this.enemies[i].update()
      if(this.enemies[i].center.x>1000 &&this.enemies[i].center.y<2){
        this.hearts -=1
        hearts.innerHTML=`${this.hearts} ♥️`
        this.enemies.splice(i,1)
      }
    }
    this.towers.forEach(tower => {
      tower.update()
    })
    if(this.enemies.length<1){
      this.spawnEnemies()
    }
  }
  spawnEnemies(){

    for (let i=0; i<this.numberSpawn; i++)
    {
      let spawnX=Math.random()*2000-2000
      let spawnY=Math.random()*2000-2000
      this.enemies.push(new Enemy(spawnX, spawnY, this.controlSpeed))
    }
    this.numberSpawn+=3
    this.controlSpeed+=0.5
  }

}