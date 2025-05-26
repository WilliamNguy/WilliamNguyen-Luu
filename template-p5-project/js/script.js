// === Background Setup ===
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';
document.body.style.height = '100vh';

// Top half (white)
const topHalf = document.createElement('div');
Object.assign(topHalf.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '50vh',
    backgroundColor: 'white',
    zIndex: '-1'
});
document.body.appendChild(topHalf);

// Bottom half (black)
const bottomHalf = document.createElement('div');
Object.assign(bottomHalf.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100vw',
    height: '50vh',
    backgroundColor: 'black',
    zIndex: '-1'
});
document.body.appendChild(bottomHalf);

// === Name Container ===
const container = document.createElement('div');
Object.assign(container.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.1s ease-out',
    zIndex: '1'
});
document.body.appendChild(container);

// === First Name: William ===
const firstName = document.createElement('div');
firstName.textContent = 'William';
Object.assign(firstName.style, {
    fontSize: '10vw',
    color: 'black',
    fontFamily: 'Lexend',
    margin: '0',
    whiteSpace: 'nowrap'
});

// === Last Name: Nguyen-Luu ===
const lastName = document.createElement('div');
lastName.textContent = 'Nguyen-Luu';
Object.assign(lastName.style, {
    fontSize: '10vw',
    color: 'white',
    fontFamily: 'BaskerItalic',
    margin: '0',
    marginTop: '18vh',
    whiteSpace: 'nowrap'
});

container.appendChild(firstName);
container.appendChild(lastName);

// === Projects Label ===
const projectsLabel = document.createElement('div');
projectsLabel.textContent = '"Projects"';
Object.assign(projectsLabel.style, {
    position: 'absolute',
    top: '3vh',           // ⬅️ top half
    left: '3vw',
    fontSize: '2vw',
    color: 'white',       // ⬅️ contrast on white
    fontFamily: 'Lexend',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    zIndex: '1'
});

document.body.appendChild(projectsLabel);

// === Load Fonts ===
const lexend = new FontFace('Lexend', 'url(assets/fonts/Lexend.ttf)');
lexend.load().then(font => {
    document.fonts.add(font);
    firstName.style.fontFamily = 'Lexend';
    projectsLabel.style.fontFamily = 'Lexend';
});

const basker = new FontFace('BaskerItalic', 'url(assets/fonts/BaskerItalic.ttf)');
basker.load().then(font => {
    document.fonts.add(font);
    lastName.style.fontFamily = 'BaskerItalic';
});

// === Scroll-Zoom Logic ===
let scale = 1;
const maxZoom = 6;

window.addEventListener('wheel', (e) => {
    scale += e.deltaY * 0.0015; // Inverted scroll
    scale = Math.max(1, Math.min(scale, maxZoom));
    container.style.transform = `translate(-50%, -50%) scale(${scale})`;
    updateScene(scale);
});

// === Scene Transition Logic ===
function updateScene(scale) {
    // Fade out name after scale 3
    if (scale > 3) {
        const fade = Math.max(0, 1 - (scale - 3) / 2);
        firstName.style.opacity = fade;
        lastName.style.opacity = fade;
    } else {
        firstName.style.opacity = '1';
        lastName.style.opacity = '1';
    }

    // Darken background as scale increases beyond 4
    if (scale > 4) {
        const darkness = Math.min((scale - 4) / 2, 1);
        topHalf.style.backgroundColor = `rgb(${255 * (1 - darkness)}, ${255 * (1 - darkness)}, ${255 * (1 - darkness)})`;
        bottomHalf.style.backgroundColor = `rgb(${0 + 30 * darkness}, ${0 + 30 * darkness}, ${0 + 30 * darkness})`;
    } else {
        topHalf.style.backgroundColor = 'white';
        bottomHalf.style.backgroundColor = 'black';
    }

    // Show "Projects" label after scale 4.5
    if (scale > 4.5) {
        const alpha = Math.min((scale - 4.5) / 0.5, 1);
        projectsLabel.style.opacity = alpha;
    } else {
        projectsLabel.style.opacity = '0';
    }
}
