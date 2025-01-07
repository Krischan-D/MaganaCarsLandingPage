const brands = [
    {
        brand: 'Hyundai',
        image: 'images/hyundai.png'
       
    },
    {
        brand: 'Mitsubishi',
        image: 'images/mitsubishi.png'
        
    },
    {
        brand: 'Nissan',
        image: 'images/nissan.jpg'
        
    },
    {
        brand: 'Toyota',
        image: 'images/toyota.jpg'
      
    },
]

const carData = {
  Toyota: {
    logo: "images/logos/toyota_logo.png",
    description: "Toyota, a Japanese multinational corporation and one of the largest car manufacturers globally. Toyota is recognized for its durability, innovation in hybrid technology (e.g., Prius), and a commitment to sustainability with a broad lineup ranging from economy cars to luxury vehicles.",
    cars: [
      { name: "AVALON", image: "images/Toyota/Avalon_2020Model.png" },
      { name: "CAMRY", image: "images/Toyota/Camry_2024Model.png" },
      { name: "COROLLA", image: "images/Toyota/Corolla_2023Model.png" },
      { name: "SUPRA", image: "images/Toyota/Supra_2023Model.png" },
    ],
  },
  Mitsubishi: {
    logo: "images/logos/mitsubishi_logo.png",
    description: "Mitsubishi Motors, a Japanese brand with a diverse range of vehicles, including compact cars, SUVs, and electric vehicles. Mitsubishi is known for its rugged 4WD models and a strong presence in motorsports, especially rally racing.",
    cars: [
      { name: "OUTLANDER", image: "images/Mitsubishi/Outlander_2024Model.png" },
      { name: "LANCER EVO", image: "images/Mitsubishi/LancerEvo_2015Model.png" },
      { name: "MIRAGE G4", image: "images/Mitsubishi/MirageG4_2024Model.png" },
      { name: "ECLIPSE CROSS", image: "images/Mitsubishi/EclipseCross_2024Blue.png" },
    ],
  },
  Nissan: {
    logo: "images/logos/nissan_logo.png",
    description: "Nissan, another leading Japanese automaker, Nissan is known for its reliable cars, trucks, and SUVs. The brand is also a pioneer in electric vehicles, with models like the Nissan Leaf. Nissan emphasizes technology, performance, and design in its offerings.",
    cars: [
      { name: "ALTIMA", image: "images/Nissan/Altima_2024Model.png" },
      { name: "FRONTIER", image: "images/Nissan/Frontier_2024Model.png" },
      { name: "GT-R", image: "images/Nissan/GT-R_2024Model.png" },
      { name: "MAXIMA", image: "images/Nissan/Maxima_2024Model.png" },
    ],
  },
  Hyundai: {
    logo: "images/logos/hyundai_logo.png",
    description: "Hyundai, A South Korean automaker known for producing affordable, reliable, and technologically advanced cars. Hyundai has made a name for itself with its emphasis on fuel efficiency, safety, and quality warranties.",
    cars: [
      { name: "ACCENT", image: "images/Hyundai/Accent_2022Model.png" },
      { name: "KONA", image: "images/Hyundai/Kona_2022Model.png" },
      { name: "SANTA FE", image: "images/Hyundai/SantaFe_2022Model.png" },
      { name: "TUCSON", image: "images/Hyundai/Tucson_2020Model.png" },
      
    ],
  },
};

renderBrands()
export function renderBrands(){
    let brandsHTML = ''
    brands.forEach((brand)=>{
        brandsHTML += 
        `
            <div class="brand" data-brand="${brand.brand}">
                <div class="image-container">
                <img src=${brand.image} alt="">
                </div>
                <h3>${brand.brand}</h3>
                </div>
                `
    
                document.querySelector('.cars-container').innerHTML = brandsHTML
            })
}





const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const brandButtons = document.querySelectorAll(".brand-button");
const brandTitle = document.getElementById("brand-title");
const brandLogo = document.getElementById("brand-logo");
const brandDescription = document.getElementById("brand-description");
const carList = document.getElementById("car-list");
const pageIndicators = document.getElementById("page-indicators");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const modalContent = document.getElementById('moda-content')

// Slide counter
let currentSlideIndex = 0;
let visibleCars = 3; // Default number of visible cars

// Function to update the number of visible cars based on screen width
const updateVisibleCars = () => {
  if (window.innerWidth <= 768) {
    visibleCars = 1; // Show 1 car on mobile
  } else if (window.innerWidth <= 1024) {
    visibleCars = 2; // Show 2 cars on tablets
  } else {
    visibleCars = 3; // Show 3 cars on desktop
  }
};

// Function to calculate the total width of a car item including margin and gap
const getCardTotalWidth = () => {
  const card = carList.children[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth; // Width of a single car item
  const carouselGap = parseFloat(window.getComputedStyle(carList).gap); // Gap between car items
  return cardWidth + carouselGap; // Total width to slide
};

// Function to move the carousel
const moveCarousel = () => {
  const cardTotalWidth = getCardTotalWidth(); // Dynamically calculate card width
  const offset = -currentSlideIndex * cardTotalWidth; // Calculate the offset
  carList.style.transform = `translateX(${offset}px)`; // Move the carousel
};

// Function to update the active indicator
const updateIndicators = () => {
  const totalPages = Math.ceil(carList.children.length / visibleCars);
  const indicators = pageIndicators.querySelectorAll('.page-indicator');
  indicators.forEach((indicator, index) => {
    if (index === Math.floor(currentSlideIndex / visibleCars)) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
};

// Create dot indicators for the carousel
const createIndicators = () => {
  const totalPages = Math.ceil(carList.children.length / visibleCars);
  pageIndicators.innerHTML = ''; // Clear existing indicators
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('page-indicator');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlideIndex = i * visibleCars;
      moveCarousel();
      updateIndicators();
    });
    pageIndicators.appendChild(dot);
  }
};

// Function to update the modal content
function updateModal(brand) {
  const data = carData[brand];
  if (!data) {
    console.error(`No data found for brand: ${brand}`);
    return;
  }

  // Update modal content
  brandTitle.textContent = brand;
  brandDescription.textContent = data.description;
  brandLogo.src = data.logo;

  // Update car list
  carList.innerHTML = "";
  data.cars.forEach((car) => {
    const carItem = document.createElement("div");
    carItem.classList.add("car-item");
    carItem.innerHTML = `
      <div class="car-image-container">
        <img src="${car.image}" alt="${car.name}" class="car-image">
      </div>
      <div class="car-name">${car.name}</div>
      <button class="view-button">View</button>
    `;
    carList.appendChild(carItem);
  });

  // Reset the current slide index and update the slider
  currentSlideIndex = 0;
  updateVisibleCars(); // Update visible cars based on screen size
  moveCarousel();
  createIndicators();
  updateIndicators();

  // Show the modal with slide-up animation
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
    modal.querySelector(".modal-content").classList.add("slide-up");
  }, 10); // Small delay to allow the display change to take effect
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", function () {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = carList.children.length - visibleCars; // Loop to the last set
  }
  moveCarousel();
  updateIndicators();
});

nextBtn.addEventListener("click", function () {
  if (currentSlideIndex < carList.children.length - visibleCars) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0; // Loop to the first set
  }
  moveCarousel();
  updateIndicators();
});

// Event listeners for brand buttons
brandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const brand = button.dataset.brand;
    if (!brand) {
      console.error("Brand not specified in data-brand attribute");
      return;
    }
    updateModal(brand);
  });
});

const brandsCard = document.querySelectorAll('.brand');
brandsCard.forEach((card) => {
  card.addEventListener('click', () => {
    const brand = card.dataset.brand;
    if (!brand) {
      console.error("Brand not specified in data-brand attribute");
      return;
    }
    updateModal(brand);
  });
});

// Close modal logic
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("show");
 modal.querySelector(".modal-content").classList.remove("slide-up")
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
    modal.querySelector(".modal-content").classList.remove("slide-up")
  }
});

// Update visible cars on window resize
window.addEventListener("resize", () => {
  updateVisibleCars();
  moveCarousel();
  updateIndicators();
});


