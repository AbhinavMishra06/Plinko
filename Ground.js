class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.groundObject = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("wood2.png")
      
      World.add(world,this.groundObject);
    }
    display(){
      var pos =this.groundObject.position;
      fill("brown")
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  }
