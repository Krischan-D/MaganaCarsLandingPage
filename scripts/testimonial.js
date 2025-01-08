const testimonials = [
    {
      name: "Jane Smith",
      image: "images/img1.png",
      spanText: "Excellent Service!",
      text: "“Lorem ipsum odor amet, consectetuer adipiscing elit. Sed taciti cras elit montes aenean. Felis at primis accumsan habitant turpis purus ante scelerisque.”",
    },
    {
      name: "John Doe",
      image: "images/img2.png",
      spanText: "Highly Recommended!",
      text: "“Great service! The team was very professional and delivered beyond my expectations. Highly recommended!”",
    },
    {
      name: "Alice Johnson",
      image: "images/img3.png",
      spanText: "Amazing Experience!",
      text: "“I had an amazing experience working with them. They are very responsive and detail-oriented.”",
    },
    {
      name: "Michael Brown",
      image: "images/img4.png",
      spanText: "Outstanding Quality!",
      text: "“The quality of work is outstanding. I will definitely use their services again in the future.”",
    },
    {
      name: "Emily Davis",
      image: "images/img5.png",
      spanText: "Stress-Free Process!",
      text: "“They made the entire process so easy and stress-free. I couldn’t be happier with the results!”",
    },
    {
      name: "David Wilson",
      image: "images/img6.png",
      spanText: "Excellent Communication!",
      text: "“Excellent communication and timely delivery. I’m very impressed with their professionalism.”",
    },
    {
      name: "Sarah Miller",
      image: "images/img7.png",
      spanText: "Fantastic Team!",
      text: "“A fantastic team to work with. They truly care about their clients and go the extra mile.”",
    },
    {
      name: "James Taylor",
      image: "images/img8.png",
      spanText: "Thrilled with the Outcome!",
      text: "“I’m thrilled with the outcome. They exceeded my expectations and delivered top-notch results.”",
    },
  ];


renderTestimonials()

export function renderTestimonials(){
    let testimonialsHTML = ''
    
  testimonials.forEach((testimonial)=>{
        testimonialsHTML +=
        
        `
            <div class="testimonial-card">
            <div class="text-profile">
                <div class="testimonial-text">
                <span>${testimonial.spanText}</span>
                <p>${testimonial.text}</p>
                </div>
                <div class="profile-name">
                <img src="images/img1.png" alt="Profile 1" />
                <p class="testimonial-author">${testimonial.name}</p>
                </div>
            </div>
            </div>

        `

        document.querySelector('.testimonial-carousel').innerHTML = testimonialsHTML

  })
}

testimonialFunction()

export function testimonialFunction(){
  
document.addEventListener('DOMContentLoaded', function () {
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  const testimonialPrevButton = document.getElementById('testimonial-prev');
  const testimonialNextButton = document.getElementById('testimonial-next');
  const testimonialDotIndicators = document.querySelector('.testimonial-dot-indicators');
  let currentTestimonialIndex = 0;

  // Function to calculate the total width of a card including margin and gap
  const getCardTotalWidth = () => {
    const card = testimonialCarousel.children[0];
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth; // Width of a single card
    const cardMarginRight = parseFloat(cardStyle.marginRight); // Margin between cards
    const carouselGap = parseFloat(window.getComputedStyle(testimonialCarousel).gap); // Gap between cards
    return cardWidth + cardMarginRight + carouselGap; // Total width to slide
  };

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
  const moveTestimonialCarousel = () => {
    const cardTotalWidth = getCardTotalWidth(); // Dynamically calculate card width
    const offset = -currentTestimonialIndex * cardTotalWidth; // Calculate the offset
    testimonialCarousel.style.transform = `translateX(${offset}px)`; // Move the carousel
  };

  // Function to update the active dot
  const updateTestimonialDots = () => {
    const dots = testimonialDotIndicators.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, index) => {
      if (index === currentTestimonialIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

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
}