import { renderBrands } from "./brands.js";
import { renderFAQs } from "./faqs.js";

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

document.addEventListener('DOMContentLoaded', function () {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialPrevButton = document.getElementById('testimonial-prev');
    const testimonialNextButton = document.getElementById('testimonial-next');
    const testimonialDotIndicators = document.querySelector('.testimonial-dot-indicators');
    let currentTestimonialIndex = 0;
  
    // Get the width of a single card including its gap
    const cardStyle = window.getComputedStyle(testimonialCarousel.children[0]);
    const cardWidth = testimonialCarousel.children[0].offsetWidth; // Width of a single card
    const cardMarginRight = parseFloat(cardStyle.marginRight); // Gap between cards
    const cardTotalWidth = cardWidth + cardMarginRight; // Total width to slide
  
    // Create dot indicators for testimonials
    const testimonialCards = testimonialCarousel.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('testimonial-dot');
      if (index === currentTestimonialIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentTestimonialIndex = index;
        moveTestimonialCarousel();
        updateTestimonialDots();
      });
      testimonialDotIndicators.appendChild(dot);
    });
  
    // Function to move the testimonial carousel
    function moveTestimonialCarousel() {
      const offset = -currentTestimonialIndex * cardTotalWidth; // Calculate the offset based on card width + gap
      testimonialCarousel.style.transform = `translateX(${offset}px)`; // Move the carousel
    }
  
    // Function to update the active dot
    function updateTestimonialDots() {
      const dots = testimonialDotIndicators.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, index) => {
        if (index === currentTestimonialIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    // Event listener for the previous button
    testimonialPrevButton.addEventListener('click', function () {
      if (currentTestimonialIndex > 0) {
        currentTestimonialIndex--;
      } else {
        currentTestimonialIndex = testimonialCards.length - 1; // Loop to the last card
      }
      moveTestimonialCarousel();
      updateTestimonialDots();
    });
  
    // Event listener for the next button
    testimonialNextButton.addEventListener('click', function () {
      if (currentTestimonialIndex < testimonialCards.length - 1) {
        currentTestimonialIndex++;
      } else {
        currentTestimonialIndex = 0; // Loop to the first card
      }
      moveTestimonialCarousel();
      updateTestimonialDots();
    });
  });





  const buttons = document.querySelectorAll('.question-container .question button');
  buttons.forEach(button => {
    button.addEventListener('click',   function (){
        const answer = this.closest('.question-container').querySelector('.answer');
        answer.classList.toggle('open');
        
        const icon = this.querySelector('i')
        icon.classList.toggle('rotate')
    })
  })