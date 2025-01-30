let img;
let sphere_size = 150;
let rotation = 0;
let x = 0, y = 0;
let xspeed = 5, yspeed = 5;
let font, nguyenFont;

let bounceWidth, bounceHeight;
let presets;

let colorIndex = 0;

function preload() {
    img = loadImage("assets/images/part2.jpeg");
    font = loadFont("assets/fonts/Lexend.ttf");
    nguyenFont = loadFont("assets/fonts/BaskerItalic.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noCursor();

    bounceWidth = width;
    bounceHeight = height;

    // ✅ Define presets with multiple texts on the fourth background
    presets = [
        { background: [255, 182, 193], tint: [255, 99, 71], text: [""] },
        { background: [173, 216, 230], tint: [60, 179, 113], text: ["William"], position: [-width / 3, 0] },
        { background: [152, 251, 152], tint: [238, 130, 238], text: ["Nguyen-Luu"], position: [-width / 3.3, height / 5.5] },
        { background: [240, 230, 140], tint: [70, 130, 180], text: ["William", "Nguyen-Luu"], positions: [[-width / 3, -100], [-width / 3.3, 100]] },
        { background: [255, 228, 225], tint: [255, 165, 0], text: [""] }
    ];
}

function draw() {
    let currentPreset = presets[colorIndex % presets.length];
    background(currentPreset.background);

    let camZ = (bounceHeight / 2.0) / tan(PI / 6);
    camera(0, 0, camZ * 2, 0, 0, 0, 0, 1, 0);

    // ✅ Draw the Sphere
    push();
    translate(x, y, 0);
    rotateX(rotation);
    rotateY(rotation);
    tint(currentPreset.tint);
    texture(img);
    noStroke();
    sphere(sphere_size);
    pop();

    // ✅ Move the Sphere
    x += xspeed;
    y += yspeed;

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

    rotation += 0.01;

    // ✅ Draw Text(s)
    drawText(currentPreset);

    // ✅ Draw Custom Mouse Cursor
    drawCursor();
}

function drawCursor() {
    push();
    let cursorX = map(mouseX, 0, width, -bounceWidth, bounceWidth);
    let cursorY = map(mouseY, 0, height, -bounceHeight, bounceHeight);
    translate(cursorX, cursorY, 1);
    fill(255, 182, 193);
    noStroke();
    ellipse(0, 0, 50, 50);
    pop();
}

function drawText(preset) {
    let texts = preset.text;
    let positions = preset.positions || [[0, 0]];

    // Loop through each text and draw it at its corresponding position
    for (let i = 0; i < texts.length; i++) {
        let word = texts[i];
        let position = positions[i] || [0, 0];

        push();
        translate(position[0], position[1], 600);

        if (word === "Nguyen-Luu") {
            textFont(nguyenFont);
        } else {
            textFont(font);
        }

        textAlign(CENTER, CENTER);
        textSize(140);
        fill(50);
        noStroke();
        text(word, 0, 0);
        pop();
    }
}

function changeColors() {
    colorIndex++;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    bounceWidth = width;
    bounceHeight = height;

    presets = [
        { background: [255, 182, 193], tint: [255, 99, 71], text: [""] },
        { background: [173, 216, 230], tint: [60, 179, 113], text: ["William"], position: [-width / 3, 0] },
        { background: [152, 251, 152], tint: [238, 130, 238], text: ["Nguyen-Luu"], position: [-width / 15, 0] },
        { background: [240, 230, 140], tint: [70, 130, 180], text: ["William", "Nguyen-Luu"], positions: [[-width / 3, -100], [-width / 3.3, 100]] },
        { background: [255, 228, 225], tint: [255, 165, 0], text: [""] }
    ];
}
