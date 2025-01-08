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


  const sections = document.getElementsByTagName('section')
  const navbar = document.querySelector('.homepage-container')
  const menuLinks = document.querySelectorAll('.menu ul li a'); // Select all menu links
  const usernameLinks = document.querySelectorAll('.username')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        const sectionId = entry.target.id ;
        if(entry.isIntersecting){
            console.log(sectionId)
            if(sectionId === 'main-section'){
                navbar.classList.remove('active')
                menuLinks.forEach(link => link.classList.remove('menu-active'));
                usernameLinks.forEach(link => link.classList.remove('menu-active'));
            }else{
                navbar.classList.add('active')
                menuLinks.forEach(link => link.classList.add('menu-active'));
                usernameLinks.forEach(link => link.classList.add('menu-active'))
            }
        }
    })
},{threshold: 0.40})


Array.from(sections).forEach((section)=>{
    observer.observe(section)
})



const username = localStorage.getItem('username');

const usernameDisplay = document.querySelectorAll('.username-text')
usernameDisplay.forEach(element => {
    element.innerHTML = username;
});
 


