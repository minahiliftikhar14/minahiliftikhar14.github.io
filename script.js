// About Modal Open & Close Functionality

const aboutLink = document.getElementById('about-link');
const aboutModal = document.getElementById('about-modal');
const closeModal = document.getElementById('close-about-modal');

// Open Modal when clicking "About" in sidebar
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutModal.classList.add('active');
});

// Close Modal when clicking the "X" button
closeModal.addEventListener('click', () => {
    aboutModal.classList.remove('active');
});

// Close Modal when clicking outside the card (on overlay)
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.remove('active');
    }
});
