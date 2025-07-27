const projectsLabel = document.createElement('div');
projectsLabel.textContent = 'William Nguyen-Luu';
Object.assign(projectsLabel.style, {
    position: 'absolute',
    top: '3vh',
    left: '3vw',
    fontSize: '2vw',
    fontFamily: 'Notable',
    cursor: 'pointer',
    zIndex: '1',
    transition: 'opacity 0.5s ease'
});
projectsLabel.classList.add('nav-item', 'projects-page-label');
projectsLabel.addEventListener('click', () => {
    window.location.href = 'index.html?zoom=true';
});
// document.body.appendChild(projectsLabel);

const navBar = document.createElement('div');
Object.assign(navBar.style, {
    position: 'fixed',
    top: '4vh',
    right: '3vw',
    display: 'flex',
    gap: '5vw',
    fontSize: '1.5vw',
    color: '#222',
    fontFamily: 'Lexend',
    zIndex: '1',
    pointerEvents: 'auto',

});
navBar.innerHTML = `
  <span id="nav-projects" class="nav-item">projects</span>
  <span id="nav-work" class="nav-item">work</span>
  <span id="nav-about" class="nav-item">about</span>
`;
// document.body.appendChild(navBar);

const topBar = document.createElement('div');
Object.assign(topBar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '10vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 3vw',
    zIndex: '10',
    // boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
});

topBar.appendChild(projectsLabel);
topBar.appendChild(navBar);
document.body.appendChild(topBar);

const grid = document.createElement('div');
grid.className = 'project-grid';

const row1 = document.createElement('div');
row1.className = 'project-row';

const videow1 = document.createElement('video');
videow1.src = 'assets/videos/candle.mp4';
videow1.loop = true;
videow1.muted = true;
videow1.playsInline = true;

Object.assign(videow1.style, {
    width: '20vw',
    height: '30vh',
    borderRadius: '8px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
});

videow1.addEventListener('mouseenter', () => {
    videow1.play();
    videow1.style.transform = 'scale(1.25)';
});
videow1.addEventListener('mouseleave', () => {
    videow1.pause();
    videow1.currentTime = 0;
    videow1.style.transform = 'scale(1)';
});
videow1.addEventListener('click', () => window.location.href = 'work1.html');


row1.appendChild(videow1);

document.getElementById('nav-projects').addEventListener('click', () => {
    window.location.href = 'index1.html';
});
document.getElementById('nav-work').addEventListener('click', () => {
    window.location.href = 'index2.html';
});
document.getElementById('nav-about').addEventListener('click', () => {
    window.location.href = 'index3.html';
});

grid.appendChild(row1);

// === Create main content container ===
const mainContent = document.createElement('div');
mainContent.className = 'main-content';
mainContent.appendChild(grid);

// === Add to the document
document.body.appendChild(mainContent);