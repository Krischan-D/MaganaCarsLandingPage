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



// function logStatus() {
//     // Get the selected value from the dropdown
//     const selectedBrand = document.getElementById('brand').value;
//     console.log('Selected Brand:', selectedBrand);
//     displayByBrand(selectedBrand)
  
//     // Get the selected radio button for "type"
//     const selectedType = document.querySelector('input[name="type"]:checked');
//     if (selectedType) {
//       console.log('Selected Type:', selectedType.value);
//     } else {
//       console.log('No type selected.');
//     }
  
//     // Get the selected radio button for "price"
//     const selectedPrice = document.querySelector('input[name="price"]:checked');
//     if (selectedPrice) {
//       console.log('Selected Price Filter:', selectedPrice.value);
//     } else {
//       console.log('No price filter selected.');
//     }
//   }
  
//   // Add event listeners to the dropdown and radio buttons
  
//   // Dropdown change event
//   document.getElementById('brand').addEventListener('change', logStatus);
  
//   // Radio button change events for "type"
//   document.querySelectorAll('input[name="type"]').forEach(radio => {
//     radio.addEventListener('change', logStatus);
//   });
  
//   // Radio button change events for "price"
//   document.querySelectorAll('input[name="price"]').forEach(radio => {
//     radio.addEventListener('change', logStatus);
//   });


//   function displayByBrand(brand){
//     const filteredBrand  = updatedCarInformation.filter((car)=>{
//         return car.brand.toLowerCase() === brand.toLowerCase()
//     })
//     console.log(filteredBrand)

//     if(brand === 'all'){
//         renderCarProducts(updatedCarInformation)
//     }

//     if(filteredBrand.length === 0){
//         document.getElementById('car-cards-container').innerHTML = '<p class="no-items">No cars found</p>';
//     }   
//     else{
//         renderCarProducts(filteredBrand)
//     }
//   }


function applyFilters(){
    const selectedBrand = document.getElementById('brand').value;
    const selectedType = document.querySelector('input[name="type"]:checked');
    const selectedPrice = document.querySelector('input[name="price"]:checked');

    let filteredCars = updatedCarInformation;

    if (selectedBrand && selectedBrand !== 'all') {
        filteredCars = filteredCars.filter((car) => car.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    if(selectedType){
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
        document.getElementById('car-cards-container').innerHTML = '<p class="no-items">No cars found</p>';
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