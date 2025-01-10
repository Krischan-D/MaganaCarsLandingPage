import { car_information, updatedCarInformation } from "./product.js";

// Function to render car products
export function renderCarProducts(filteredCars = updatedCarInformation) {
    let container = document.getElementById('car-cards-container');
    let carsHTML = '';

    filteredCars.forEach((car) => {
        carsHTML += `
        <div class="car-card">
            <h3>${car.model_name}</h3>
            <h2>${car.price.toLocaleString()}</h2>
            <div class="image-container">
              <img src="${car.car_image}" alt="">
            </div>
            <div class="car-specs-container">
              <div class="car-specs">
                <img src="images/icons/wheel-icon.png" alt="">
                <p>${car.specifications.transmission}</p>
              </div>
              <div class="car-specs">
                <img src="images/icons/gas-icon.png" alt="">
                <p>${car.specifications.fuel_type}</p>
              </div>
              <div class="car-specs">
                <img src="images/icons/seats-icon.png" alt="">
                <p>${car.specifications.seats} seats</p>
              </div>
            </div>
            <div class="view-car-button">
              <a href="product.html" class="button">View Car <span> <i class='bx bx-right-arrow-alt' style='color:#ffffff' ></i></span></a>
            </div>
        </div>
        `;
    });

    container.innerHTML = carsHTML;
}

// Initial rendering of car products
renderCarProducts();

// Search functionality
const searchInput = document.querySelector('[data-search-input]');
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    const filteredCars = updatedCarInformation.filter((car) => {
        return car.model_name.toLowerCase().includes(value) || car.model_year.toString().includes(value);
    });

    if (filteredCars.length === 0) {
        document.getElementById('car-cards-container').innerHTML = '<p class="no-items">No cars found</p>';
    } else {
        renderCarProducts(filteredCars);
    }
});