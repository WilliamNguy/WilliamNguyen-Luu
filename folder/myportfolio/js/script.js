// === Scrollable Wrapper ===
const scrollWrapper = document.createElement('div');
scrollWrapper.style.position = 'relative';
scrollWrapper.style.minHeight = '100vh';
document.body.appendChild(scrollWrapper);

// === Background Setup ===
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';

if (window.innerWidth < 768) {
    document.body.style.overflow = 'auto';
} else {
    document.body.style.overflow = 'hidden';
}

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
scrollWrapper.appendChild(topHalf);

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
scrollWrapper.appendChild(bottomHalf);

const video = document.createElement('video');
video.src = 'assets/videos/Donutreal.mp4';
video.autoplay = true;
video.loop = true;
video.muted = true;
video.playsInline = true;
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
    objectFit: 'cover'
});
scrollWrapper.appendChild(video);

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
scrollWrapper.appendChild(container);

const firstName = document.createElement('div');
firstName.textContent = 'William';
Object.assign(firstName.style, {
    fontSize: '10vw',
    color: 'black',
    fontFamily: 'Lexend',
    margin: '0',
    whiteSpace: 'nowrap'
});

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
scrollWrapper.appendChild(projectsLabel);

// === Invisible Nav Bar ===
const navBar = document.createElement('div');
Object.assign(navBar.style, {
    position: 'absolute',
    top: '2vh',
    right: '3vw',
    display: 'flex',
    gap: '3vw',
    fontSize: '1.5vw',
    color: '#222',
    fontFamily: 'Lexend',
    opacity: '0',
    transition: 'opacity 0.5s ease',
    zIndex: '1',
    pointerEvents: 'none'
});
navBar.innerHTML = `
  <span>projects</span>
  <span>work</span>
  <span>about</span>
`;
scrollWrapper.appendChild(navBar);

// === Spacer for mobile scroll ===
if (window.innerWidth < 768) {
    const spacer = document.createElement('div');
    spacer.style.height = '300vh';
    scrollWrapper.appendChild(spacer);
}

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

const notable = new FontFace('Notable', 'url(assets/fonts/Notable.ttf)');
notable.load().then(font => {
    document.fonts.add(font);
    projectsLabel.style.fontFamily = 'Notable';
});
