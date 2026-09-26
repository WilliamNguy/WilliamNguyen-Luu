// ========================================
// TOP BAR
// ========================================

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
    zIndex: '1000'
});

document.body.appendChild(topBar);


// ========================================
// NAME
// ========================================

const projectsLabel = document.createElement('div');

projectsLabel.textContent = 'William Nguyen-Luu';

Object.assign(projectsLabel.style, {
    fontSize: '2vw',
    fontFamily: 'Notable',
    cursor: 'pointer',
    color: '#BE5B80',
    transition: 'color 0.3s ease'
});

projectsLabel.classList.add(
    'nav-item',
    'projects-page-label'
);

projectsLabel.addEventListener('click', () => {
    window.location.href = 'index.html?zoom=true';
});

topBar.appendChild(projectsLabel);


// ========================================
// NAVIGATION
// ========================================

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
    <span id="nav-projects" class="nav-item">portfolio</span>
    <span id="nav-work" class="nav-item">work</span>
    <span id="nav-about" class="nav-item">about</span>
`;

topBar.appendChild(navBar);


// ========================================
// PROJECT INFORMATION
// ========================================

const projects = [

    // ------------------------------------
    // LUA CANDLES
    // ------------------------------------

    {
        src: 'assets/videos/yuzuvid.mp4',
        title: 'LUA CANDLES',
        type: '3D PRODUCT ANIMATION · 2025–2026',
        description:
            'A series of 3D animations created for Lua Candles, exploring product presentation through materials, lighting and movement.'
    },

    {
        src: 'assets/videos/cool.mp4',
        title: 'LUA CANDLES',
        type: '3D PRODUCT ANIMATION · 2025–2026',
        description:
            'A series of 3D animations created for Lua Candles, exploring product presentation through materials, lighting and movement.'
    },


    // ------------------------------------
    // COLOR THROUGH GLASS
    // ------------------------------------

    {
        src: 'assets/videos/purple.mp4',
        title: 'COLOR THROUGH GLASS',
        type: '3D MOTION STUDY · 2026',
        description:
            'A visual study exploring how transparent and reflective glass forms manipulate color through refraction, layering and movement.'
    },


    // ------------------------------------
    // COCKTAIL GRADIENTS
    // ------------------------------------

    {
        src: 'assets/videos/main_moving.mp4',
        title: 'COCKTAIL GRADIENTS',
        type: '3D MOTION STUDY · 2026',
        description:
            'An exploration of animated color gradients inspired by the recognizable palettes of iconic cocktails. Each gradient translates the colors of a different drink into an abstract moving composition.'
    },


    // ------------------------------------
    // POOL
    // ------------------------------------

    {
        src: 'assets/videos/pool.mp4',
        title: 'POOL',
        type: '3D ANIMATION · 2026',
        description:
            'A 3D motion study exploring movement, materials and visual composition through an animated pool environment.'
    },


    // ------------------------------------
    // CARPET
    // ------------------------------------

    {
        src: 'assets/videos/carpet.mp4',
        title: 'CARPET',
        type: '3D ANIMATION · CONCORDIA UNIVERSITY · 2026',
        description:
            'A 3D animation exploring childhood imagination and the way ordinary objects can become part of an imagined world. Inspired by children’s city play carpets, the project follows a slipper as if it were a vehicle moving through the streets. By shifting the perspective to that of a child at play, the familiar carpet becomes a larger environment where scale, movement and imagination blur the boundary between everyday life and make-believe.'
    },


    // ------------------------------------
    // SPLASH
    // ------------------------------------

    {
        src: 'assets/videos/spalsh.mp4',
        title: 'SPLASH',
        type: '3D ANIMATION · 2026',
        description:
            'A 3D motion experiment focused on fluid movement, simulation and the interaction between animated forms.'
    },


    // ------------------------------------
    // DONUT
    // ------------------------------------

    {
        src: 'assets/videos/Donutreal.mp4',
        title: 'DONUT',
        type: '3D ANIMATION · 2026',
        description:
            'A short 3D animation study exploring modeling, materials, lighting and movement.'
    },


    // ------------------------------------
    // HAIR
    // ------------------------------------

    {
        src: 'assets/videos/hair.mp4',
        title: 'HAIR',
        type: '3D ANIMATION · 2026',
        description:
            'A 3D animation study exploring hair simulation, movement and material behavior.'
    }

];


// ========================================
// GALLERY
// ========================================

const gallery = document.getElementById('motion-gallery');


// ========================================
// HOVER INFORMATION CARD
// ========================================

const projectCursor = document.createElement('div');

Object.assign(projectCursor.style, {
    position: 'fixed',

    width: '30vw',

    fontFamily: 'Lexend',
    color: '#fbd84e',

    pointerEvents: 'none',

    zIndex: '2000',

    opacity: '0',

    transform: 'translate(-50%, -50%)',

    transition: 'opacity 0.2s ease'
});

document.body.appendChild(projectCursor);


// ========================================
// CREATE VIDEO
// ========================================

function createVideo(project, large = false) {

    const video = document.createElement('video');

    video.src = project.src;

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;


    Object.assign(video.style, {

        width: large ? '65vw' : '40vw',

        height: 'auto',

        borderRadius: '1px',

        objectFit: 'cover',

        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',

        transition: 'transform 0.3s ease',

        cursor: 'none'

    });


    // ------------------------------------
    // MOUSE ENTER
    // ------------------------------------

    video.addEventListener('mouseenter', () => {

        projectCursor.innerHTML = `

    <div style="
        font-size: 3.5vw;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 0.7vw;
    ">
        ${project.title}
    </div>

    <div style="
        font-size: 0.9vw;
        font-weight: 500;
        margin-bottom: 0.8vw;
    ">
        ${project.type}
    </div>

    <div style="
        font-size: 0.8vw;
        line-height: 1.5;
        font-weight: 400;
    ">
        ${project.description}
    </div>

`;


        projectCursor.style.opacity = '1';

        video.style.transform = 'scale(1.03)';

    });


    // ------------------------------------
    // FOLLOW MOUSE
    // ------------------------------------

    video.addEventListener('mousemove', (e) => {

        const cardWidth = projectCursor.offsetWidth;
        const cardHeight = projectCursor.offsetHeight;

        let x = e.clientX + 20;
        let y = e.clientY + 20;


        // Prevent card from leaving right side
        if (x + cardWidth > window.innerWidth) {
            x = e.clientX - cardWidth - 20;
        }


        // Prevent card from leaving bottom
        if (y + cardHeight > window.innerHeight) {
            y = e.clientY - cardHeight - 20;
        }


        projectCursor.style.left = `${x}px`;
        projectCursor.style.top = `${y}px`;

    });


    // ------------------------------------
    // MOUSE LEAVE
    // ------------------------------------

    video.addEventListener('mouseleave', () => {

        projectCursor.style.opacity = '0';

        video.style.transform = 'scale(1)';

    });


    return video;
}


// ========================================
// CREATE NORMAL ROW
// ========================================

function createRow(projectList) {

    const row = document.createElement('div');

    row.className = 'motion-row';


    Object.assign(row.style, {

        width: '84vw',

        display: 'flex',

        justifyContent: 'center',

        gap: '4vw',

        margin: '0 auto 4vw auto'

    });


    projectList.forEach(project => {

        row.appendChild(
            createVideo(project)
        );

    });


    gallery.appendChild(row);
}


// ========================================
// CREATE LARGE VIDEO
// ========================================

function createLargeVideo(project) {

    const row = document.createElement('div');

    row.className = 'motion-row large-motion-row';


    Object.assign(row.style, {

        width: '84vw',

        display: 'flex',

        justifyContent: 'center',

        margin: '0 auto 4vw auto'

    });


    row.appendChild(
        createVideo(project, true)
    );


    gallery.appendChild(row);
}


// ========================================
// BUILD PAGE
// ========================================


// ROW 1 — LUA CANDLES

createRow([
    projects[0],
    projects[1]
]);


// ROW 2 — COLOR STUDIES

createRow([
    projects[2],
    projects[3]
]);


// POOL

createLargeVideo(
    projects[4]
);


// CARPET

createLargeVideo(
    projects[5]
);


// SPLASH

createLargeVideo(
    projects[6]
);


// DONUT + HAIR

createRow([
    projects[7],
    projects[8]
]);


// ========================================
// NAVIGATION
// ========================================

document
    .getElementById('nav-projects')
    .addEventListener('click', () => {

        window.location.href = 'index1.html';

    });


document
    .getElementById('nav-work')
    .addEventListener('click', () => {

        window.location.href = 'index2.html';

    });


document
    .getElementById('nav-about')
    .addEventListener('click', () => {

        window.location.href = 'index3.html';

    });