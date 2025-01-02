import {renderBrands} from './brands.js'

document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle button and the menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');

    // Check if both elements exist
    if (menuToggle && menu) {
        // Add a click event listener to the toggle button
        menuToggle.addEventListener('click', function () {
            // Toggle the 'active' class on the menu
            menu.classList.toggle('active');

            // Update the aria-expanded attribute
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    } else {
        // Log an error if the elements are not found
        console.error('Menu toggle or menu element not found!');
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dotIndicators = document.querySelector('.dot-indicators');
    let currentIndex = 0;

    // Create dot indicators
    const images = carousel.querySelectorAll('img');
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;   
            moveCarousel();
            updateDots();
        });
        dotIndicators.appendChild(dot);
    });

    // Function to move the carousel
    function moveCarousel() {
        const offset = -currentIndex * 100; // Calculate the offset based on the current index (100% per slide)
        carousel.style.transform = `translateX(${offset}%)`; // Move the carousel
    }

    // Function to update the active dot
    function updateDots() {
        const dots = dotIndicators.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Event listener for the previous button
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop to the last image
        }
        moveCarousel();
        updateDots();
    });

    // Event listener for the next button
    nextButton.addEventListener('click', function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to the first image
        }
        moveCarousel();
        updateDots();
    });
});