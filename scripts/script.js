let p=new Player()

//setup info display
let hearts=document.querySelector('.hearts')
let money=document.querySelector('.gold')
let gameOver= document.querySelector('.game-over')
//setup canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width= 1280-64*3
canvas.height=768-64*3
//setup map
const normalMap = new Image()
normalMap.src = '../pictures/maps/normalmap.png'
//setup events listener
let mouseX=undefined
let mouseY=undefined
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect()
  mouseX = event.clientX - rect.left
  mouseY = event.clientY - rect.top
  // console.log(`x:${mouseX}, y:${mouseY}`)
})
canvas.addEventListener('touchmove', (event) => {
  const rect = canvas.getBoundingClientRect()
  const touch = event.touches[0]
  mouseX = touch.clientX - rect.left
  mouseY = touch.clientY - rect.top
})



normalMap.onload = ()=>{
  animate()
}

//animate function
function animate(){
  if(p.hearts){
  requestAnimationFrame(animate)
  }
  else{
    gameOver.classList.add('isOver')
  }
  c.drawImage(normalMap,0,0)
  highlightBuildingTiles()
  p.update()
}

//sort elements in the array based on their y position
function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let outer = 0; outer < array.length - 1; outer++) {
    let iSmallest = outer;
    for (let inner = outer + 1; inner < array.length; inner++) {
      if (array[iSmallest].y > array[inner].y) {
        iSmallest = inner;
      }
    }
    [array[outer], array[iSmallest]] = [array[iSmallest], array[outer]];
  }
  return array;
}
function highlightBuildingTiles(){
  buildableTilesArray.forEach(element => {
    if(mouseX-element.x<50 && element.x+64-mouseX<50
      &&
      mouseY-element.y<50 && element.y+64-mouseY<50
      &&!element.occupied &&p.money>=50){
        p.towers.push(new Tower(element.x, element.y))
        p.towers=selectionSort(p.towers)
        buildableTilesArray[buildableTilesArray.indexOf(element)].occupied=true
        p.money-=50
      }
      else{
      c.fillStyle='rgba(255,255,255,0.2)'
      c.fillRect(element.x, element.y, 64, 64)

    }
    
  })
}