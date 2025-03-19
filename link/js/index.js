// Toggle mobile menu
document.getElementById('mobile-menu').addEventListener('click', function(event) {
    event.stopPropagation(); // Mencegah event bubbling
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }

    if (e.keyCode === 123) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});