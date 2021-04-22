class Rope{
    constructor(body1, point2){

        var option = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.04,
            length : 10
        }

        this.rope = Constraint.create(option);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;

            stroke("#F8C24A");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

        }

        fly(){
            this.rope.bodyA = null;
        }
}