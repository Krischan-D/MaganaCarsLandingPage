import { renderRecommendedCars } from "./product.js";
import { renderServices } from "./services.js";
import { renderTestimonials, testimonialFunction } from "./testimonial.js";
import { renderBlogs } from "./blogs.js";

document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle button and the menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');
  
    // Check if both elements exist
    if (menuToggle && menu) {
        // Add a click event listener to the toggle button
        menuToggle.addEventListener('click', function (event) {
            // Prevent the click event from bubbling up to the document
            event.stopPropagation();
            
            // Toggle the 'active' class on the menu
            menu.classList.toggle('active');
            document.body.classList.toggle('overlay-active');
        });
  
        document.addEventListener('click', function (event) {
            // Check if the click is outside the menu and the toggle button
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                // Close the menu
                menu.classList.remove('active');
                document.body.classList.remove('overlay-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
  
        // Prevent clicks inside the menu from closing it
        menu.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    } 
  });