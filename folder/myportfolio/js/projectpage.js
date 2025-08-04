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
    zIndex: '1000',
    // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)' // optional subtle shadow
});
document.body.appendChild(topBar);

// === Projects Label (Name) ===
const projectsLabel = document.createElement('div');
projectsLabel.textContent = 'William Nguyen-Luu';
Object.assign(projectsLabel.style, {
    fontSize: '2vw',
    fontFamily: 'Notable',
    cursor: 'pointer',
    color: '#BE5B80',
    transition: 'color 0.3s ease'
});
projectsLabel.classList.add('nav-item', 'projects-page-label');
projectsLabel.addEventListener('click', () => {
    window.location.href = 'index.html?zoom=true';
});
topBar.appendChild(projectsLabel);

// === Nav Bar (Links) ===
const navBar = document.createElement('div');
Object.assign(navBar.style, {
    display: 'flex',
    gap: '5vw',
    fontSize: '1.5vw',
    color: '#222',
    fontFamily: 'Lexend',
    pointerEvents: 'auto'
});
navBar.innerHTML = `
  <span id="nav-projects" class="nav-item">projects</span>
  <span id="nav-work" class="nav-item">work</span>
  <span id="nav-about" class="nav-item">about</span>
`;
topBar.appendChild(navBar);

const videoContainer = document.createElement('div');
Object.assign(videoContainer.style, {
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '4vw',
    padding: '15vh 5vw 10vh 5vw',
    backgroundColor: '#f5f5f5'
});

// === Replace with your actual video paths
const videoPaths = [
    'assets/videos/candle.mp4',
    'assets/videos/cool.mp4',
    'assets/videos/Donutreal.mp4'
];

videoPaths.forEach(src => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;

    Object.assign(vid.style, {
        width: '30vw',
        borderRadius: '12px',
        objectFit: 'cover',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease'
    });

    vid.addEventListener('mouseenter', () => {
        vid.style.transform = 'scale(1.05)';
    });
    vid.addEventListener('mouseleave', () => {
        vid.style.transform = 'scale(1)';
    });

    videoContainer.appendChild(vid);
});

document.body.appendChild(videoContainer);

document.getElementById('nav-projects').addEventListener('click', () => {
    window.location.href = 'index1.html';
});
document.getElementById('nav-work').addEventListener('click', () => {
    window.location.href = 'index2.html';
});
document.getElementById('nav-about').addEventListener('click', () => {
    window.location.href = 'index3.html';
});