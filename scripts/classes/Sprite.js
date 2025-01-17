class Sprite{
  constructor(x=0, y=0, imgSrc='', imgFrames=1, elapsedHolder=1, width=0, height=0, animate=true){
    this.x=x
    this.y=y
    this.imgSrc=imgSrc
    this.imgFrames=imgFrames
    this.currentFrame=0
    this.elapsedHolder=elapsedHolder
    this.staticElapsedHolder=elapsedHolder
    this.width=width
    this.height=height
    //center is actually the draw offset
    this.center = {
      x:this.x-0.5*this.width,
      y:this.y-0.5*this.height
    }
    this.animate=animate
  }
  draw(){
    let img= new Image()
    img.src= this.imgSrc
    c.drawImage(img, this.width*this.currentFrame, 0, this.width, this.height, this.center.x, this.center.y, this.width, this.height)
  if(this.animate){
    if(this.elapsedHolder==0) {
      this.currentFrame++
      this.elapsedHolder=this.staticElapsedHolder
    }
    this.elapsedHolder--
    if(this.currentFrame>this.imgFrames-1)this.currentFrame=0
  }
    else if (this.currentFrame>0){
      if(this.elapsedHolder==0) {
        this.currentFrame--
        this.elapsedHolder=this.staticElapsedHolder
      }
      this.elapsedHolder--
    }
  }
  update(){

  }
  animate(){

  }
}