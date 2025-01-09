
import { carData } from "./product.js";
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

// Sample data for car brands and their cars


// Slide counter
let currentSlideIndex = 0;
const visibleCars = 3; // Number of visible cars

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
  updateSlide();
  updateIndicators();
  modal.style.display = "flex";
}

// Function to update the visible slide
function updateSlide() {
  const carItems = Array.from(carList.children);
  const totalCars = carItems.length;

  // Ensure proper bounds for the slide index
  if (currentSlideIndex < 0) currentSlideIndex = totalCars - visibleCars;
  if (currentSlideIndex > totalCars - visibleCars) currentSlideIndex = 0;

  // Hide all cars first
  carItems.forEach((item, index) => {
    if (index >= currentSlideIndex && index < currentSlideIndex + visibleCars) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Function to update the page indicators
function updateIndicators() {
  const totalPages = Math.ceil(carList.children.length / visibleCars);
  pageIndicators.innerHTML = ""; // Clear existing indicators

  for (let i = 0; i < totalPages; i++) {
    const indicator = document.createElement("span");
    indicator.className = "page-indicator";
    if (i === Math.floor(currentSlideIndex / visibleCars)) {
      indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => {
      currentSlideIndex = i * visibleCars;
      updateSlide();
    });
    pageIndicators.appendChild(indicator);
  }
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", () => {
  currentSlideIndex -= 1;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlideIndex += 1;
  updateSlide();
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

// Close modal logic
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
