class Div {
    constructor(x, y, w, h) {
        var options = {
            restitution : 0,
            isStatic : true,
            friction : 0.5
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}