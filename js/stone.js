class Stone
{
    constructor(x,y)
    {
        var options = {
            
            restitution:1,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 30, 30);

        this.x = x;
        this.y = y;
        this.r = 30;
        
        World.add(world, this.body);

        stone = loadImage("images/stone.png");

        
    }

    display(){
        var p = this.body.position;

        push();
        translate(p.x, p.y);
        imageMode(CENTER);
        image(stone, 0, 0, 30*2, 30*2);
        pop();
    }
}