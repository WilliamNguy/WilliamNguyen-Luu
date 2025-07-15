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
    zIndex: '-1',
    transition: 'transform 0.3s ease'
});
document.body.appendChild(bottomHalf);

const video = document.createElement('video');
video.src = 'assets/videos/Donutreal.mp4'; // 🎥 your looped video path
video.autoplay = true;
video.loop = true;
video.muted = true;
video.playsInline = true; // Important for autoplay on mobile

Object.assign(video.style, {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 100vh)',
    width: '40vw',
    maxWidth: '90%',
    height: 'auto',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    zIndex: '-1',
    opacity: '0',
    objectFit: 'cover', // ✅ this removes black bars
});
document.body.appendChild(video);

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
    transition: 'transform 0.01s ease-out',
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
    whiteSpace: 'nowrap',
    cursor: 'pointer'
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
    whiteSpace: 'nowrap',
    cursor: 'pointer'
});

container.appendChild(firstName);
container.appendChild(lastName);

[firstName, lastName].forEach(name => {
    name.style.cursor = 'pointer';
    name.addEventListener('click', () => {
        const target = 5.5;
        const step = 0.05;

        function animateZoom() {
            if (scale >= target) return;

            scale += step;
            scale = Math.min(scale, target);
            container.style.transform = `translate(-50%, -50%) scale(${scale})`;
            updateScene(scale);

            requestAnimationFrame(animateZoom);
        }

        requestAnimationFrame(animateZoom);
    });
});

// === Projects Label ===
const projectsLabel = document.createElement('div');
projectsLabel.textContent = 'William Nguyen-Luu';
Object.assign(projectsLabel.style, {
    position: 'absolute',
    top: '3vh',
    left: '3vw',
    fontSize: '2vw',
    color: '#BE5B80',
    fontFamily: 'Notable',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    zIndex: '1'
});
document.body.appendChild(projectsLabel);

// === Invisible Nav Bar ===
const navBar = document.createElement('div');
Object.assign(navBar.style, {
    position: 'absolute',
    top: '4vh',
    right: '3vw',
    display: 'flex',
    gap: '5vw',
    fontSize: '1.5vw',
    color: '#222',
    fontFamily: 'Lexend',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    zIndex: '1',
    pointerEvents: 'none' // makes it invisible to cursor clicks
});
navBar.innerHTML = `
  <span>projects</span>
  <span>work</span>
  <span>about</span>
`;
document.body.appendChild(navBar);

// === Load Fonts ===
const lexend = new FontFace('Lexend', 'url(assets/fonts/Lexend.ttf)');
lexend.load().then(font => {
    document.fonts.add(font);
    firstName.style.fontFamily = 'Lexend';
    projectsLabel.style.fontFamily = 'Notable';
});

const basker = new FontFace('BaskerItalic', 'url(assets/fonts/BaskerItalic.ttf)');
basker.load().then(font => {
    document.fonts.add(font);
    lastName.style.fontFamily = 'BaskerItalic';
});

const notable = new FontFace('Notable', 'url(assets/fonts/Notable.ttf)');
notable.load().then(font => {
    document.fonts.add(font);
    projectsLabel.style.fontFamily = 'Notable';
});


// === Scroll-Zoom Logic ===
let scale = 1;
const maxZoom = 6;

window.addEventListener('wheel', (e) => {
    scale += e.deltaY * 0.0025;
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
    // Fade-in donut image
    if (scale > 1.5) {
        video.style.opacity = '1';
    } else {
        video.style.opacity = '0';
    }

    // Slide the black bottom background downward based on scale
    if (scale > 1 && scale <= 4) {
        const translateY = Math.min((scale - 1) * 100, 100); // up to 100% of its own height
        bottomHalf.style.transform = `translateY(${translateY}%)`;
    } else if (scale > 4) {
        bottomHalf.style.transform = `translateY(100%)`; // completely off screen
    } else {
        bottomHalf.style.transform = `translateY(0%)`; // fully visible
    }

    // Slide donut image upward into view
    if (scale > 1 && scale <= 4) {
        const slidePercent = Math.min((scale - 1) / 3, 1);
        const startPx = window.innerHeight;
        const endPx = window.innerHeight * 0.2; // ~20% from top
        const currentPx = startPx - slidePercent * (startPx - endPx);
        video.style.transform = `translate(-50%, ${currentPx}px)`;
    } else if (scale > 4) {
        const finalPx = window.innerHeight * 0.2;
        video.style.transform = `translate(-50%, ${finalPx}px)`;
    } else {
        video.style.transform = `translate(-50%, ${window.innerHeight}px)`;
    }

    // Show "Projects" label after scale 4.5
    if (scale > 4.5) {
        const alpha = Math.min((scale - 4.5) / 0.5, 1);
        projectsLabel.style.opacity = alpha;
    } else {
        projectsLabel.style.opacity = '0';
    }

    // Show nav bar after scale 4.5
    if (scale > 4.5) {
        navBar.style.opacity = '1';
    } else {
        navBar.style.opacity = '0';
    }
}
