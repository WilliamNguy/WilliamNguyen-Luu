let img;
let sphere_size = 150;
let rotation = 0;
let x, y;
let xspeed = 5, yspeed = 5;
let t, col;
let font;

// Expand the bounce area to be twice the canvas size
let bounceWidth, bounceHeight;

let presetBackgrounds = [
    [255, 182, 193], [173, 216, 230], [152, 251, 152],
    [240, 230, 140], [255, 228, 225]
];

let presetTints = [
    [255, 99, 71], [60, 179, 113], [238, 130, 238],
    [70, 130, 180], [255, 165, 0]
];

let presetTexts = ["William", "Nguyen-Luu", "Creative", "Dynamic", "Bold"];

let colorIndex = 0;

function preload() {
    img = loadImage("assets/images/part2.jpeg");
    font = loadFont("assets/fonts/karla.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noCursor();

    // ✅ Double the bounce area
    bounceWidth = width;  // Twice the width
    bounceHeight = height; // Twice the height

    // ✅ Place the sphere within the double-sized area
    x = random(-bounceWidth, bounceWidth);
    y = random(-bounceHeight, bounceHeight);

    t = presetTints[0];
    col = presetBackgrounds[0];
}

function draw() {
    background(col);

    // ✅ Adjust Camera for Larger View
    let camZ = (bounceHeight / 2.0) / tan(PI / 6);
    camera(0, 0, camZ * 2, 0, 0, 0, 0, 1, 0);

    // ✅ Draw the Sphere (Now moves across the full expanded area)
    push();
    translate(x, y, 0);
    rotateX(rotation);
    rotateY(rotation);
    tint(t[0], t[1], t[2]);
    texture(img);
    noStroke();
    sphere(sphere_size);
    pop();

    // ✅ Move the Sphere
    x += xspeed;
    y += yspeed;

    // ✅ Fix Collision to Use **Expanded Bounce Area**
    let halfW = bounceWidth - sphere_size;
    let halfH = bounceHeight - sphere_size;

    if (x >= halfW || x <= -halfW) {
        xspeed *= -1;
        changeColors();
    }

    if (y >= halfH || y <= -halfH) {
        yspeed *= -1;
        changeColors();
    }

    // Rotate the sphere
    rotation += 0.01;

    // ✅ Draw Text
    drawText();

    // ✅ Fix Mouse Cursor (Now Moves Fully)
    drawCursor();
}

function drawCursor() {
    push();
    // ✅ Convert Mouse Position to WEBGL Space for Larger Area
    let cursorX = map(mouseX, 0, width, -bounceWidth, bounceWidth);
    let cursorY = map(mouseY, 0, height, -bounceHeight, bounceHeight);

    translate(cursorX, cursorY, 1);
    fill(255, 182, 193);
    noStroke();
    ellipse(0, 0, 50, 50);
    pop();
}

function drawText() {
    push();
    translate(0, -bounceHeight / 4, 600); // Move text forward for visibility
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(80);
    fill(50);
    noStroke();
    text(presetTexts[colorIndex % presetTexts.length], 0, 0);
    pop();
}

function changeColors() {
    col = presetBackgrounds[colorIndex % presetBackgrounds.length];
    t = presetTints[colorIndex % presetTints.length];
    colorIndex++;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    bounceWidth = width;
    bounceHeight = height;
}
