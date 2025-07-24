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

// Append grid to page
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