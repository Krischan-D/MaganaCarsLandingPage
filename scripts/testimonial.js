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