// Snowfall using P5.js library

let snow = function (sketch) {

    let snow = [];
    let gravity;

    sketch.setup = function () {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.frameRate(24);
        gravity = sketch.createVector(0, 0.1);
    };

    sketch.draw = function () {
        // sketch.background(129, 242, 253);
        sketch.background(0, 0, 0);
        snow.push(new Snowflake());
        for (flake of snow) {
            flake.applyForce(gravity);
            flake.update();
            flake.render();
        }

        for (let i = snow.length - 1; i >= 0; i--) {
            if (snow[i].offScreen()) {
                snow.splice(i, 1);
            }
        }
    };

    class Snowflake {
        constructor() {
            let x = sketch.random(sketch.width);
            let y = sketch.random(-10, -1);
            this.pos = sketch.createVector(x, y);
            this.vel = sketch.createVector(0, 0);
            this.acc = sketch.createVector();
            this.r = sketch.random(2, 10);
        }

        applyForce(force) {
            this.acc.add(force);
        }

        update() {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }

        render() {
            sketch.stroke(255);
            sketch.strokeWeight(this.r);
            sketch.point(this.pos.x, this.pos.y);
        }

        offScreen() {
            return (this.pos.y > sketch.height + this.r);
        }
    }
};

let snow_sketch = new p5(snow, 'snow');