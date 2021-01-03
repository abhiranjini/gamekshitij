class Player {
    constructor(x, y,width,height) {
        var options = {
            restitution: 1,
            friction: 0,
            density:1.0
        }
        
        this.body = Bodies.rectangle(x, y, width,height, options);
        World.add(world, this.body);
        this.width=width
        this.height=height
        this.monster=loadImage("bike.png")
       
        
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.monster,0,0,this.width,this.height)
        
        pop();
    }
}