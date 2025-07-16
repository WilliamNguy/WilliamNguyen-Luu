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

const grid = document.createElement('div');
grid.className = 'project-grid';

const img1 = document.createElement('img');
img1.src = 'assets/images/Interior_final.png'; // First image

const img2 = document.createElement('img');
img2.src = 'assets/images/room.png'; // Replace with your second image path

grid.appendChild(img1);
grid.appendChild(img2);
document.body.appendChild(grid);

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