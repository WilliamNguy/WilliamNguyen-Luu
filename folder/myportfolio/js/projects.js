const projectsLabel = document.createElement('div');
projectsLabel.textContent = 'William Nguyen-Luu';
Object.assign(projectsLabel.style, {
    position: 'absolute',
    top: '3vh',
    left: '3vw',
    fontSize: '2vw',
    // color: '#96CBB0',
    fontFamily: 'Notable',
    cursor: 'pointer',
    zIndex: '1',
    transition: 'opacity 0.5s ease'
});
projectsLabel.classList.add('nav-item', 'projects-page-label');
projectsLabel.addEventListener('click', () => {
    window.location.href = 'index.html?zoom=true';
});
document.body.appendChild(projectsLabel);

// === Grid container ===
const grid = document.createElement('div');
grid.className = 'project-grid';

// === First row ===
const row1 = document.createElement('div');
row1.className = 'project-row';

const img1 = document.createElement('img');
img1.src = 'assets/images/Interior_final.png';

const img2 = document.createElement('img');
img2.src = 'assets/images/room.png';

row1.appendChild(img1);
row1.appendChild(img2);

// === Second row ===
const row2 = document.createElement('div');
row2.className = 'project-row';

const img3 = document.createElement('img');
img3.src = 'assets/images/grass.png';

const img4 = document.createElement('img');
img4.src = 'assets/images/dog.png';

row2.appendChild(img3);
row2.appendChild(img4);

// Append rows to grid
grid.appendChild(row1);
grid.appendChild(row2);

const row3 = document.createElement('div');
row3.className = 'project-row';

const video5 = document.createElement('video');
video5.src = 'assets/videos/Donutreal.mp4';
// video5.autoplay = true;
video5.loop = true;
video5.muted = true;
video5.playsInline = true;

Object.assign(video5.style, {
    width: '20vw',
    height: '30vh',
    borderRadius: '8px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
});

video5.addEventListener('mouseenter', () => {
    video5.play();
    video5.style.transform = 'scale(1.05)';
});
video5.addEventListener('mouseleave', () => {
    video5.pause();
    video5.currentTime = 0;
    video5.style.transform = 'scale(1)';
});

row3.appendChild(video5);
grid.appendChild(row3);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';

mainContent.appendChild(grid);
document.body.appendChild(mainContent);

// Create a blur overlay
const blurOverlay = document.createElement('div');
blurOverlay.className = 'blur-overlay';
document.body.insertBefore(blurOverlay, mainContent); // Insert it behind main content

// === Top Nav Bar ===
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
    zIndex: '1',
    pointerEvents: 'auto'
});
navBar.innerHTML = `
  <span id="nav-projects" class="nav-item">projects</span>
  <span id="nav-work" class="nav-item">work</span>
  <span id="nav-about" class="nav-item">about</span>
`;
document.body.appendChild(navBar);

document.getElementById('nav-projects').addEventListener('click', () => {
    window.location.href = 'index1.html';
});
document.getElementById('nav-work').addEventListener('click', () => {
    window.location.href = 'index2.html';
});
document.getElementById('nav-about').addEventListener('click', () => {
    window.location.href = 'index3.html';
});

const allMedia = document.querySelectorAll('.project-grid img, .project-grid video');


allMedia.forEach(media => {
    media.addEventListener('mouseenter', () => {
        blurOverlay.classList.add('visible');

        // Remove .hovered from all media first
        allMedia.forEach(m => m.classList.remove('hovered'));

        // Add .hovered only to the current one
        media.classList.add('hovered');
    });

    media.addEventListener('mouseleave', () => {
        blurOverlay.classList.remove('visible');
        media.classList.remove('hovered');
    });
});