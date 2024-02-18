const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.getElementById('nav-links');

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
