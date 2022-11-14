let walls = [];
let ray;
let particle;

// Function to set up Canvas and Walls
function setup() {
    let canvas = createCanvas(window.innerWidth- 16, window.innerHeight- 16);
    canvas.id('canvas');
    // Loop to create 5 random walls of random width/height, angle and location
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    // Set a wall for each edge of the canvas
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    particle = new Particle();
}

// Draw the walls and rays
function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
}
