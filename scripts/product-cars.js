import { car_information, updatedCarInformation } from "./product.js";


let errorResult = 

    `
        <div class="nocarsfound-container">
                <div class="nocarfound-img">
                <img src="images/no-result.png" alt="">
                </div>
                <h3>No Cars Found</h3>
                <p>Try search other cars  </p>
        </div>
        
    `

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
              <a href="details.html" class="button">View Car <span> <i class='bx bx-right-arrow-alt' style='color:#ffffff' ></i></span></a>
            </div>
        </div>
        `;
    });

    container.innerHTML = carsHTML;

    if (filteredCars.length === 0) {
        // Display the error UI
        container.innerHTML = errorResult;
    } else {
        // Render the cars
        container.innerHTML = carsHTML;
    }
 


  
}

// Initial rendering of car products
renderCarProducts();
   
// Search functionality
const searchInput = document.querySelector('[data-search-input]');
const error = document.querySelector('.nocarsfound-container')
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    const filteredCars = updatedCarInformation.filter((car) => {
        return car.model_name.toLowerCase().includes(value) || car.model_year.toString().includes(value);
    });

    if (filteredCars.length === 0) {
        document.getElementById('car-cards-container').innerHTML = errorResult;
        error.style.display = 'flex'
    } else {
        renderCarProducts(filteredCars);
    }
});





function applyFilters(){
    const selectedBrand = document.getElementById('brand').value;
    const selectedType = document.querySelector('input[name="type"]:checked');
    const selectedPrice = document.querySelector('input[name="price"]:checked');

    let filteredCars = updatedCarInformation;

    if (selectedBrand && selectedBrand !== 'all') {
        filteredCars = filteredCars.filter((car) => car.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    if(selectedType && selectedType.value !== 'all'){
        filteredCars = filteredCars.filter((car)=>{
            return car.type.toLowerCase() === selectedType.value.toLowerCase()
        })
    }
    if (selectedPrice) {


        filteredCars = filteredCars.map((car) => ({
            ...car,
            price: Number(car.price.replace("₱", "").replace(/,/g, "")),
        }));


        if (selectedPrice.value === 'highestToLowest') {
            filteredCars.sort((a, b) => b.price - a.price);
        } else if (selectedPrice.value === 'lowestToHighest') {
            filteredCars.sort((a, b) => a.price - b.price);
        }
    }

    if (filteredCars.length === 0) {
        document.getElementById('car-cards-container').innerHTML = errorResult;
    } else {
        renderCarProducts(filteredCars);
    }
}

  // Dropdown change event
  document.getElementById('brand').addEventListener('change', applyFilters);
  
  // Radio button change events for "type"
  document.querySelectorAll('input[name="type"]').forEach(radio => {
    radio.addEventListener('change', applyFilters);
  });
  
  // Radio button change events for "price"
  document.querySelectorAll('input[name="price"]').forEach(radio => {
    radio.addEventListener('change', applyFilters);
  });

//   function applyFilters() {
//     // Get the selected value from the dropdown
//     const selectedBrand = document.getElementById('brand').value;

//     // Get the selected radio button for "type"
//     const selectedType = document.querySelector('input[name="type"]:checked');

//     // Get the selected radio button for "price"
//     const selectedPrice = document.querySelector('input[name="price"]:checked');

//     // Filter cars based on brand
//     let filteredCars = updatedCarInformation;
//     if (selectedBrand && selectedBrand !== 'all') {
//         filteredCars = filteredCars.filter((car) => car.brand.toLowerCase() === selectedBrand.toLowerCase());
//     }

//     // Filter cars based on type
//     if (selectedType) {
//         filteredCars = filteredCars.filter((car) => car.type.toLowerCase() === selectedType.value.toLowerCase());
//     }

//     // Filter cars based on price
//     if (selectedPrice) {
//         if (selectedPrice.value === 'highestToLowest') {
//             filteredCars.sort((a, b) => b.price - a.price);
//         } else if (selectedPrice.value === 'lowestToHighest') {
//             filteredCars.sort((a, b) => a.price - b.price);
//         }
//     }

//     // Render the filtered cars
//     if (filteredCars.length === 0) {
//         document.getElementById('car-cards-container').innerHTML = '<p class="no-items">No cars found</p>';
//     } else {
//         renderCarProducts(filteredCars);
//     }
// }

// // Add event listeners to the dropdown and radio buttons

// // Dropdown change event
// document.getElementById('brand').addEventListener('change', applyFilters);

// // Radio button change events for "type"
// document.querySelectorAll('input[name="type"]').forEach(radio => {
//     radio.addEventListener('change', applyFilters);
// });

// // Radio button change events for "price"
// document.querySelectorAll('input[name="price"]').forEach(radio => {
//     radio.addEventListener('change', applyFilters);
// });