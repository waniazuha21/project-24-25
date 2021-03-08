class Ball{
    constructor(x,y){
        this.body = Bodies.circle(x,y,50,{isStatic:false});
        World.add(world,this.body);

        this.image = loadImage("paper.png");
    }

display(){
    image(this.image,this.body.position.x,this.body.position.y,50);

}
};
