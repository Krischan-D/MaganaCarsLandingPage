import {renderRecommendedCars} from "./recommendedCars.js"
import { renderServices } from "./services.js";
import { renderTestimonials, testimonialFunction } from "./testimonial.js";
import { renderBlogs } from "./renderBlogs.js";
import { renderUsername } from "./utils/displayUsername.js";
import {cartIndicator} from "./cartProducts.js"
import {renderFAQs} from "./faqs.js"
import {toastAlert} from "./utils/alrert.js"

// import { navigation } from "./navbar.js";


if (!localStorage.getItem('toastShown')) {
    toastAlert(); // Show the toast alert
    localStorage.setItem('toastShown', 'true'); // Set the flag in localStorage
  }
document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle button and the menu
    AOS.init();
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

        menu.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    } 
  });


  const sections = document.getElementsByTagName('section')
  const navbar = document.querySelector('.homepage-container')
  const homeNavlink = document.getElementById('active-nav-link')
  const menuLinks = document.querySelectorAll('.menu ul li a');
  const usernameLinks = document.querySelectorAll('.username')
  const menuToggle = document.getElementById('menu-toggle')
  const cartButton = document.querySelectorAll('.bx-cart')


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        const sectionId = entry.target.id ;
        if(entry.isIntersecting){
            console.log(sectionId)
            if(sectionId === 'main-section'){
                navbar.classList.remove('active')
                menuLinks.forEach(link => link.classList.remove('menu-active'));
                usernameLinks.forEach(link => link.classList.remove('toggle-active'));
                menuToggle.classList.remove('toggle-active');
                cartButton.forEach(button => button.classList.remove('toggle-active'));
            }else{
                navbar.classList.add('active')
                menuLinks.forEach(link => link.classList.add('menu-active'));
                homeNavlink.classList.add('home-active-link')
                usernameLinks.forEach(link => link.classList.add('toggle-active'))
                menuToggle.classList.add('toggle-active');
                cartButton.forEach(button => button.classList.add('toggle-active'));
            }
        }
    })
},{threshold: 0.30})


Array.from(sections).forEach((section)=>{
    observer.observe(section)
})



 


const faqs = document.querySelectorAll('.question-container');

faqs.forEach(faq => {
  faq.addEventListener('click', function(event) {
    // Check if the clicked element is the button or its child (icon)
    const isButton = event.target.closest('button');

    if (isButton || event.currentTarget === faq) {
      const answer = faq.querySelector('.answer');
      const icon = faq.querySelector('i');

      // Toggle the 'open' class on the answer
      answer.classList.toggle('open');

      // Toggle the 'rotate' class on the icon
      icon.classList.toggle('rotate');
    }
  });
});

