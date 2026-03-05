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
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        opacity: '0'
    });

    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // =============================
    // Top Navigation Bar
    // =============================
    const projectsLabel = document.createElement('div');
    projectsLabel.textContent = 'William Nguyen-Luu';

    Object.assign(projectsLabel.style, {
        position: 'absolute',
        top: '3vh',
        left: '3vw',
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
        position: 'fixed',
        top: '4vh',
        right: '3vw',
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
        zIndex: '10'
    });

    topBar.appendChild(projectsLabel);
    topBar.appendChild(navBar);
    document.body.appendChild(topBar);

    // =============================
    // Main Content
    // =============================
    const content = document.createElement('div');
    Object.assign(content.style, {
        marginTop: '20vh',
        marginLeft: '20vw',
        width: '60vw',
        fontFamily: 'Lexend'
    });

    const title = document.createElement('h1');
    title.textContent = 'Unrelated Project 3';

    Object.assign(title.style, {
        fontSize: '2vw',
        marginBottom: '2vh'
    });

    const description = document.createElement('p');
    description.textContent =
        'Write a short description here. Explain what the video shows and what the project is about.';

    Object.assign(description.style, {
        fontSize: '1vw',
        lineHeight: '1.6',
        marginBottom: '4vh'
    });

    // =============================
    // Video
    // =============================

    content.appendChild(title);
    content.appendChild(description);
    // =============================
    // YouTube Video
    // =============================

    const videoWrapper = document.createElement('div');

    Object.assign(videoWrapper.style, {
        width: '50vw',
        aspectRatio: '16 / 9',
        border: '1px solid black',
        marginBottom: '4vh'
    });

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/JhpiVO5xsrw';
    iframe.title = 'YouTube video player';
    iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    Object.assign(iframe.style, {
        width: '100%',
        height: '100%',
        border: '0'
    });

    videoWrapper.appendChild(iframe);
    content.appendChild(videoWrapper);
    const image2 = document.createElement('img');
    image2.src = 'assets/images/ss2.png';

    Object.assign(image2.style, {
        width: '50vw',
        border: '1px solid black',
        marginTop: '4vh'
    });

    content.appendChild(image2);

    document.body.appendChild(content);

    // =============================
    // Navigation clicks
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

});