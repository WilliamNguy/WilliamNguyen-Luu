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

const videoWrapper = document.createElement('div');
Object.assign(videoWrapper.style, {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
    // padding: '2vh 0'
});
document.body.appendChild(videoWrapper);

// === Scroll-Controlled Video ===
const scrollVideo = document.createElement('video');
scrollVideo.src = 'assets/videos/cool.mp4'; // replace with your video path
scrollVideo.preload = 'auto';
scrollVideo.muted = true;
scrollVideo.playsInline = true;

Object.assign(scrollVideo.style, {
    width: '40vw',
    borderRadius: '12px',
    objectFit: 'cover',
    margin: '30vh',
    transform: 'scale(1.5) translateY(4vh)', // ✅ Zoom in 20%
});

videoWrapper.appendChild(scrollVideo);


// === Scroll-driven video control ===

let isScrolling;
let rafId;

// Wait until video metadata is loaded
scrollVideo.addEventListener('loadedmetadata', () => {
    scrollVideo.currentTime = 0.25;

    requestAnimationFrame(() => {
        scrollVideo.currentTime += 0.25; // small nudge to render the frame

        // ✅ Delay scroll tracking until visible frame is shown
        lastScrollTop = window.scrollY;
    });

    function animate() {
        const currentScroll = window.scrollY;
        const scrollDiff = currentScroll - lastScrollTop;
        lastScrollTop = currentScroll;

        if (scrollDiff === 0) return;

        // Direction & controlled speed
        const direction = scrollDiff > 0 ? -1 : 1; // scroll down = reverse
        const speed = Math.min(Math.abs(scrollDiff) * 0.0032, 0.02); // 🎯 Adjust for slower control

        let nextTime = scrollVideo.currentTime + direction * speed;

        // 🌀 Loop forward or backward
        if (nextTime > scrollVideo.duration) {
            nextTime = 0.25;
        } else if (nextTime < 0) {
            nextTime = scrollVideo.duration;
        }

        scrollVideo.currentTime = nextTime;
    }

    function onScroll() {
        if (!rafId) {
            rafId = requestAnimationFrame(() => {
                animate();
                rafId = null;
            });
        }

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            cancelAnimationFrame(rafId);
            rafId = null;
        }, 100);
    }

    window.addEventListener('scroll', onScroll);
});

const introVideoWrapper = document.createElement('div');
Object.assign(introVideoWrapper.style, {
    width: '100vw',
    // backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3vh 0',
    overflow: 'hidden'
});

const introVideo = document.createElement('video');
introVideo.src = 'assets/videos/candle.mp4'; // replace with actual path
introVideo.autoplay = true;
introVideo.loop = true;
introVideo.muted = true;
introVideo.playsInline = true;

Object.assign(introVideo.style, {
    width: '40vw',
    borderRadius: '0px',
    objectFit: 'cover',
    transform: 'scale(1.1)'
});

introVideoWrapper.appendChild(introVideo);
document.body.appendChild(introVideoWrapper);

const imageGallery = document.createElement('div');
Object.assign(imageGallery.style, {
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '4vw',
    padding: '10vh 5vw',
    backgroundColor: '#f5f5f5'
});

// ✅ Replace with your actual image paths
const imagePaths = [
    'assets/images/candle1.png',
    'assets/images/candle2.png',
    'assets/images/candle3.png',
    'assets/images/page2.png'
];

imagePaths.forEach(path => {
    const img = document.createElement('img');
    img.src = path;
    Object.assign(img.style, {
        width: '30vw',
        borderRadius: '0',
        objectFit: 'cover',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease'
    });

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });

    imageGallery.appendChild(img);
});

document.body.appendChild(imageGallery);

document.getElementById('nav-projects').addEventListener('click', () => {
    window.location.href = 'index1.html';
});
document.getElementById('nav-work').addEventListener('click', () => {
    window.location.href = 'index2.html';
});
document.getElementById('nav-about').addEventListener('click', () => {
    window.location.href = 'index3.html';
});