class Particle {
    constructor(x, y, r) {
        var op = {
            restitution : 0.4,
            isStatic : false
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, op);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}