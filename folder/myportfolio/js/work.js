window.addEventListener('DOMContentLoaded', () => {

    // =============================
    // Custom "click me" cursor (bold + yellow)
    // =============================
    const customCursor = document.createElement('div');
    customCursor.textContent = 'lua candles';

    Object.assign(customCursor.style, {
        position: 'fixed',
        pointerEvents: 'none',
        fontFamily: 'Lexend',
        fontSize: '4.5vw',
        fontWeight: 'bold',
        color: '#fbd84e',
        backgroundColor: 'transparent',
        padding: '0',
        borderRadius: '0',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        opacity: '0',
    });

    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });


    // =============================
    // Top bar
    // =============================
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
    <span id="nav-projects" class="nav-item">portfolio</span>
    <span id="nav-work" class="nav-item">work</span>
    <span id="nav-about" class="nav-item">about</span>
  `;

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
    });

    topBar.appendChild(projectsLabel);
    topBar.appendChild(navBar);
    document.body.appendChild(topBar);


    // =============================
    // Grid + video
    // =============================
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
        borderRadius: '1px',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        cursor: 'none' // ✅ hide normal cursor so only "click me" shows
    });

    videow1.addEventListener('mouseenter', () => {
        videow1.play();
        videow1.style.transform = 'scale(1.25)';
        customCursor.style.opacity = '1'; // ✅ show click me
    });

    videow1.addEventListener('mouseleave', () => {
        videow1.pause();
        videow1.currentTime = 0;
        videow1.style.transform = 'scale(1)';
        customCursor.style.opacity = '0'; // ✅ hide click me
    });

    videow1.addEventListener('click', () => window.location.href = 'work1.html');

    row1.appendChild(videow1);
    grid.appendChild(row1);


    // =============================
    // Nav clicks
    // =============================
    document.getElementById('nav-projects').addEventListener('click', () => {
        window.location.href = 'index1.html';
    });
    document.getElementById('nav-work').addEventListener('click', () => {
        window.location.href = 'index2.html';
    });
    document.getElementById('nav-about').addEventListener('click', () => {
        window.location.href = 'index3.html';
    });


    // =============================
    // Add to document
    // =============================
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.appendChild(grid);
    document.body.appendChild(mainContent);

});
