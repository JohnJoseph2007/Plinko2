class Ground {
    constructor(x, y, w, h){
        var gr = {
            isStatic : true
        }

        this.ground = Bodies.rectangle(x, y, w, h, gr);
        this.width = w;
        this.height = h;
        World.add(wo, this.ground);
    }

    display(){
        fill("white");
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}