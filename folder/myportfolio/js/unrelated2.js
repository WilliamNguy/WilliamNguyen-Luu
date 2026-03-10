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
        width: '50vw',
        fontFamily: 'Lexend'
    });

    const title = document.createElement('h1');
    title.textContent = 'Interactive Nostalgia';

    Object.assign(title.style, {
        fontSize: '2vw',
        marginBottom: '2vh'
    });

    const description = document.createElement('p');
    description.textContent =
        'This project explores digital nostalgia by transporting users into interactive screensavers from different technological eras based on their predicted age. Using a webcam, a machine learning model trained on the UTKFace dataset estimates the viewer’s age range and loads a corresponding audiovisual environment inspired by the digital aesthetics of that generation. Each screensaver is designed as a unique interactive space — including a 3D maze, a morphing CRT mesh, a starfield of animated sprites, and layered neon geometries — allowing users to move, explore, and interact with the environment. Built using Teachable Machine and Three.js, the system combines real-time age classification with interactive visuals and sound to create a playful exploration of memory, technology, and generational digital culture.';

    Object.assign(description.style, {
        fontSize: '1vw',
        lineHeight: '1.6',
        marginBottom: '5vh'
    });

    const image = document.createElement('img');
    image.src = 'assets/images/ss1.png';

    Object.assign(image.style, {
        width: '30vw',
        border: '1px solid black',
        cursor: 'none'

    });

    image.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
    });

    image.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
    image.addEventListener('click', () => {
        window.location.href = 'https://williamnguy.github.io/WilliamNguyen-Luu/screen/SCREENSAVER/index.html';
    });
    content.appendChild(title);
    content.appendChild(description);
    // =============================
    // Instructions list
    // =============================

    const instructions = document.createElement('ul');

    Object.assign(instructions.style, {
        fontSize: '1.2vw',
        lineHeight: '1.8',
        marginTop: '2vh',
        marginBottom: '4vh',
        paddingLeft: '1.5vw'
    });

    const step1 = document.createElement('li');
    step1.textContent = 'Press the image below';

    const step2 = document.createElement('li');
    step2.textContent = 'Press start and freeze once given a screensaver';

    const step3 = document.createElement('li');
    step3.textContent = 'Press the screen and interact: WASD, click and drag';

    instructions.appendChild(step1);
    instructions.appendChild(step2);
    instructions.appendChild(step3);

    content.appendChild(instructions);
    content.appendChild(image);

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