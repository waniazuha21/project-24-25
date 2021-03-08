class Box{
constructor(width){
    this.Body=Bodies.rectangle(100,100,width,10);
    World.add(world,this.body);

    this.width = width;
}
display(){
rect(this.body.position.x,this.body.position.y,this.width,18);
}

}
