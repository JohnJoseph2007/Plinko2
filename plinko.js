class Plinko {
    constructor(x, y, r) {
        var op = {
            isStatic : true,
            friction : 0.5
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, op);
        this.color = "white";
        World.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}