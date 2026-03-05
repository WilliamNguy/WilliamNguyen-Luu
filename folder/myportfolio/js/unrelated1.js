window.addEventListener('DOMContentLoaded', () => {

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
    title.textContent = 'Blender to SuperCollider';

    Object.assign(title.style, {
        fontSize: '2vw',
        marginBottom: '2vh'
    });

    const description = document.createElement('p');
    description.textContent =
        'This project tests the boundaries of interactive machine learning between SuperCollider and Blender throuhg Wekkinator. Able to create music on SuperCollider through interactions with the meshes in Blender.';

    Object.assign(description.style, {
        fontSize: '1.2vw',
        lineHeight: '1.6',
        marginBottom: '5vh'
    });


    const image = document.createElement('img');
    image.src = 'assets/images/sc4.png';

    Object.assign(image.style, {
        width: '30vw',
        border: '1px solid black'
    });


    content.appendChild(title);
    content.appendChild(description);
    // =============================
    // Image Gallery
    // =============================

    const gallery = document.createElement('div');

    Object.assign(gallery.style, {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2vw',
        marginTop: '4vh'
    });

    const img1 = document.createElement('img');
    img1.src = 'assets/images/sc4.png';

    const img2 = document.createElement('img');
    img2.src = 'assets/images/sc2.png';

    const img3 = document.createElement('img');
    img3.src = 'assets/images/sc3.png';

    const img4 = document.createElement('img');
    img4.src = 'assets/images/sc1.png';

    const images = [img1, img2, img3, img4];

    images.forEach(img => {

        Object.assign(img.style, {
            width: '100%',
            border: '1px solid black'
        });

        gallery.appendChild(img);

    });

    content.appendChild(gallery);

    // =============================
    // Second section (title + description + YouTube video)
    // =============================

    const title2 = document.createElement('h1');
    title2.textContent = 'Interactive ML (webcam)';

    Object.assign(title2.style, {
        fontSize: '2vw',
        marginTop: '10vh',
        marginBottom: '2vh',
        fontStyle: 'italic',
        textDecoration: 'underline',
        textUnderlineOffset: '6px'
    });

    const description2 = document.createElement('p');
    description2.textContent =
        'Movement becomes music: a low-resolution webcam feeds visual data into Wekinator, allowing gestures to generate sound through machine learning.';

    Object.assign(description2.style, {
        fontSize: '1.2vw',
        lineHeight: '1.6',
        marginBottom: '4vh'
    });

    // YouTube embed container
    const videoWrap = document.createElement('div');
    Object.assign(videoWrap.style, {
        width: '100%',
        maxWidth: '70vw',
        aspectRatio: '16 / 9',
        border: '1px solid black'
    });

    const iframe = document.createElement('iframe');
    // replace VIDEO_ID with your actual YouTube id (the part after v=)
    iframe.src = 'https://www.youtube.com/embed/xchnKvg6hOs';
    iframe.title = 'YouTube video player';
    iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    Object.assign(iframe.style, {
        width: '100%',
        height: '100%',
        border: '0',
        display: 'block'
    });

    videoWrap.appendChild(iframe);

    content.appendChild(title2);
    content.appendChild(description2);
    content.appendChild(videoWrap);
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