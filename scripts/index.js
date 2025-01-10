import { renderBrands } from "./brands.js";
import { renderFAQs } from "./faqs.js";
import { renderTestimonials, testimonialFunction } from "./testimonial.js";
import {renderRecommendedCars} from "./recommendedCars.js"
import { navigation } from "./navbar.js";





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

  
  
  
  
  const sections = document.getElementsByTagName('section')
  const observer = new IntersectionObserver( entries =>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        // Get the ID of the intersecting section
        const sectionId = entry.target.id;
        
        // Remove the 'active' class from all nav links
        navlinks.forEach((link) => {
          link.classList.remove('active');
        });
        
        // Find the corresponding nav link and add the 'active' class
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    })  
  },{threshold: 0.30})
  
  Array.from(sections).forEach((section)=>{
    observer.observe(section)
  })
  
  
  
  const navlinks = document.querySelectorAll('.nav-link')
  navlinks.forEach((link)=>{
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      
      // Remove the 'active' class from all nav links
      navlinks.forEach((otherLink) => {
        otherLink.classList.remove('active');
      });
      
      // Add the 'active' class to the clicked link
      link.classList.add('active');
      
      // Scroll to the corresponding section
      const targetId = link.getAttribute('href');
      console.log(targetId)

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
})