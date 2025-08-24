document.addEventListener('DOMContentLoaded', () => {
    // Select the navigation menu and a button to toggle it
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;'; // This is the hamburger icon character
    document.querySelector('header').appendChild(navToggle);

    // Add a click event listener to the toggle button
    navToggle.addEventListener('click', () => {
        // Toggle the 'nav-active' class on the navigation list
        nav.classList.toggle('nav-active');
    });
});