class Dustbin{
              constructor(x, y) {
                 var rect_options={

                   isStatic:true

                 }
                
                 this.Image= loadImage("sprites/dustbingreen.png");

                this.bodyleft= Bodies.rectangle(x,y,40,100,rect_options);
                
                World.add(myworld,this.bodyleft);
                

              }



     display() {
        
      
      fill("red");
      
      imageMode(CENTER);
        image(this.Image , this.bodyleft.position.x, this.bodyleft.position.y,
          150, 150);
          
        
     }  
}