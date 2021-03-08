class Dustbin {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(600,220,150,150,options);
        this.width = 150;
        this.height = 30;
        World.add(world, this.body);

        /*this.body1 = Bodies.rectangle(680,370,200,10,options);
        World.add(world,this.body1);

        this.body2 = Bodies.rectangle(780,320,10,100,options);
        World.add(world,this.body2);*/

        this.image = loadImage("dustbingreen.png");

        

      }
    
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        push ()
        fill("brown");
        image(this.image,pos.x, pos.y,150,150);
        /*rect (this.body2.position.x,this.body2.position.y,10,100);
        rect(this.body1.position.x,this.body1.position.y,200,10);*/
        pop ()



      }
    };
