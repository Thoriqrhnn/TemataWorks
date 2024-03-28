// Bakal Warna Navbar
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Bakal Navbar Full Overlay
function openMenu() {
    document.querySelector('.full-nav').style.top = '0%';
    document.querySelector('.menu-nav').style.opacity = '1';
}
function closeMenu() {
    document.querySelector('.full-nav').style.top = '-100%';
    document.querySelector('.menu-nav').style.opacity = '0';
}