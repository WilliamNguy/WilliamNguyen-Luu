window.addEventListener('DOMContentLoaded', () => {

    // =============================
    // Custom "click me" cursor
    // =============================

    const customCursor = document.createElement('div');
    customCursor.textContent = 'click me';

    Object.assign(customCursor.style, {
        position: 'fixed',
        pointerEvents: 'none',
        fontFamily: 'Lexend',
        fontSize: '4.5vw',
        fontWeight: 'bold',
        color: '#fbd84e',
        padding: '4px 10px',
        borderRadius: '20px',
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
    // Grid container
    // =============================

    const grid = document.createElement('div');
    grid.className = 'project-grid';

    // -------- Row 1 --------
    const row1 = document.createElement('div');
    row1.className = 'project-row';

    const img1 = document.createElement('img');
    img1.src = 'assets/images/Interior_final.png';
    img1.addEventListener('click', () => window.location.href = 'project1.html');

    const img2 = document.createElement('img');
    img2.src = 'assets/images/room.png';
    img2.addEventListener('click', () => window.location.href = 'project2.html');

    row1.appendChild(img1);
    row1.appendChild(img2);

    // -------- Row 2 --------
    const row2 = document.createElement('div');
    row2.className = 'project-row';

    const img3 = document.createElement('img');
    img3.src = 'assets/images/grass.png';
    img3.addEventListener('click', () => window.location.href = 'project3.html');

    const img4 = document.createElement('img');
    img4.src = 'assets/images/dog.png';
    img4.addEventListener('click', () => window.location.href = 'project4.html');

    row2.appendChild(img3);
    row2.appendChild(img4);

    // -------- Row 3 --------
    const row3 = document.createElement('div');
    row3.className = 'project-row';

    const video5 = document.createElement('video');
    video5.src = 'assets/videos/Donutreal.mp4';
    video5.loop = true;
    video5.muted = true;
    video5.playsInline = true;

    Object.assign(video5.style, {
        width: '20vw',
        height: '30vh',
        borderRadius: '1px',
        objectFit: 'cover',
        transition: 'transform 0.3s ease'
    });

    video5.addEventListener('mouseenter', () => {
        video5.play();
        video5.style.transform = 'scale(1.25)';
    });

    video5.addEventListener('mouseleave', () => {
        video5.pause();
        video5.currentTime = 0;
        video5.style.transform = 'scale(1)';
    });

    video5.addEventListener('click', () => window.location.href = 'project5.html');

    row3.appendChild(video5);

    // Assemble grid
    grid.appendChild(row1);
    grid.appendChild(row2);
    grid.appendChild(row3);

    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.appendChild(grid);
    document.body.appendChild(mainContent);

    // =============================
    // Blur Overlay
    // =============================

    const blurOverlay = document.createElement('div');
    blurOverlay.className = 'blur-overlay';
    document.body.insertBefore(blurOverlay, mainContent);

    // =============================
    // Top Navigation Bar
    // =============================

    const projectsLabel = document.createElement('div');
    projectsLabel.textContent = 'William Nguyen-Luu';

    Object.assign(projectsLabel.style, {
        fontSize: '2vw',
        fontFamily: 'Notable',
        cursor: 'pointer'
    });

    projectsLabel.classList.add('nav-item', 'projects-page-label');
    projectsLabel.addEventListener('click', () => {
        window.location.href = 'index.html?zoom=true';
    });

    const navBar = document.createElement('div');
    Object.assign(navBar.style, {
        display: 'flex',
        gap: '5vw',
        fontSize: '1.5vw',
        color: '#222',
        fontFamily: 'Lexend'
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
        zIndex: '12'
    });

    topBar.appendChild(projectsLabel);
    topBar.appendChild(navBar);
    document.body.appendChild(topBar);

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
    // Hover Blur + Custom Cursor Logic
    // =============================

    const allMedia = document.querySelectorAll('.project-grid img, .project-grid video');

    allMedia.forEach(media => {

        media.addEventListener('mouseenter', () => {
            blurOverlay.classList.add('visible');
            customCursor.style.opacity = '1';
        });

        media.addEventListener('mouseleave', () => {
            blurOverlay.classList.remove('visible');
            customCursor.style.opacity = '0';
        });
    });

});
