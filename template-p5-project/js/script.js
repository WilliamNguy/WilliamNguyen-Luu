document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.main-header');

    // Adjust header size on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Increase header size when scrolling upward
        const scaleFactor = 1 + Math.max(0, 100 - scrollY) / 500; // Increase size gradually when scrolling up
        header.style.transform = `scale(${scaleFactor})`;

        // Ensure the header doesn't scale beyond a normal size when scrolling down
        if (scrollY > 100) {
            header.style.transform = `scale(1)`;
        }
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');

    // Adjust header height based on scroll position
    if (window.scrollY > 100) {
        header.style.height = '100px'; // Increased height as you scroll down
        header.style.padding = '20px 0'; // Optional: adjust padding for better aesthetics
    } else {
        header.style.height = '60px'; // Reset to initial height when at the top
        header.style.padding = '10px 0'; // Reset padding
    }
});