import {car_information} from "./data/product.js"

function filterRecommendCars(array, maxPrice){
    return array.filter((car)=>{
        const price = Number(car.price.replace(/[^0-9]/g, ""))
        return price < maxPrice
    });
}
  
const maxPrice = 1500000
const recommendedCars = filterRecommendCars(car_information, maxPrice)

export function renderRecommendedCars() {
    let recommendedCarsHTML = '';

    recommendedCars.forEach((car) => {
        recommendedCarsHTML += `
        <div class="car-card">
          <div class="img-container"> <img src="${car.image}"alt=""></div>
          <div class="car-information">
            <h1>${car.model_name}</h1>
            <div class="car-specification-container">
              <div class="car-specifications">
                <img src="images/icons/gas-icon.png" alt="">
                <p>${car.specifications.fuel_type}</p>                
              </div>
              <div class="car-specifications">
                <img src="images/icons/wheel-icon.png" alt="">
                <p>${car.specifications.transmission}</p>                
              </div>
              <div class="car-specifications">
                        <svg fill="#000000" height="30" width="30" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 32 32" xml:space="preserve">
        <path d="M8.4,22l1.2-2.3c0.5-1,1.5-1.7,2.7-1.7h3.5c0.1,0,0.2,0,0.2,0c1.8-2.4,4.7-4,8-4c1.2,0,2.3,0.2,3.4,0.6
          C27,14,26.5,13.4,26,13h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.8L23,8c-0.8-1.8-2.6-3-4.6-3H9.6C7.6,5,5.8,6.2,5,8l-1.3,3H1
          c-0.6,0-1,0.4-1,1s0.4,1,1,1h1c-1.2,0.9-2,2.4-2,4v4c0,0.9,0.4,1.7,1,2.2V25c0,1.7,1.3,3,3,3h2c1.7,0,3-1.3,3-3v-1h5
          c0-0.7,0.1-1.4,0.2-2H8.4z M7,19H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S7.6,19,7,19z M5.5,12l1.4-3.2C7.4,7.7,8.4,7,9.6,7
          h8.7c1.2,0,2.3,0.7,2.8,1.8l1.4,3.2H5.5z"/>
        <path d="M31.7,21.9c-0.1-0.5-0.7-0.8-1.2-0.7c-0.7,0.2-1.2,0-1.3-0.2c-0.1-0.2,0-0.7,0.5-1.3c0.4-0.4,0.4-1,0-1.4
          c-1-1-2.2-1.7-3.6-2.1c-0.5-0.1-1.1,0.2-1.2,0.7c-0.2,0.7-0.6,1-0.9,1s-0.6-0.4-0.9-1c-0.2-0.5-0.7-0.8-1.2-0.7
          c-1.4,0.4-2.6,1.1-3.6,2.1c-0.4,0.4-0.4,1,0,1.4c0.5,0.5,0.6,1,0.5,1.3c-0.1,0.2-0.6,0.4-1.3,0.2c-0.5-0.1-1.1,0.2-1.2,0.7
          C16.1,22.6,16,23.3,16,24s0.1,1.4,0.3,2.1c0.1,0.5,0.7,0.8,1.2,0.7c0.7-0.2,1.2,0,1.3,0.2c0.1,0.2,0,0.7-0.5,1.3
          c-0.4,0.4-0.4,1,0,1.4c1,1,2.2,1.7,3.6,2.1c0.5,0.1,1.1-0.2,1.2-0.7c0.2-0.7,0.6-1,0.9-1s0.6,0.4,0.9,1c0.1,0.4,0.5,0.7,1,0.7
          c0.1,0,0.2,0,0.3,0c1.4-0.4,2.6-1.1,3.6-2.1c0.4-0.4,0.4-1,0-1.4c-0.5-0.5-0.6-1-0.5-1.3c0.1-0.2,0.6-0.4,1.3-0.2
          c0.5,0.1,1.1-0.2,1.2-0.7c0.2-0.7,0.3-1.4,0.3-2.1S31.9,22.6,31.7,21.9z M24,27c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S25.7,27,24,27
          z"/>
        </svg>
                <p>${car.specifications.engine_displacement}</p>                
              </div>
              <div class="car-specifications">
               <img src="images/icons/seats-icon.png" alt="">
                <p>${car.specifications.seats} seats</p>                
              </div>
            </div>
            <div class="price-button">
              <span>${car.price}</span>
              <button ${car.id} class="view-car-btn button" data-car-id="${car.id}">View</button>
            </div>
          </div>
        </div>
        `;
    });

    document.getElementById('cars-container').innerHTML = recommendedCarsHTML;
}

renderRecommendedCars();




function viewCar(){
  const viewCarButtons = document.querySelectorAll('.view-car-btn');
  viewCarButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
          const buttonElement = e.target.closest('.button');
          const carId = buttonElement.getAttribute('data-car-id');
          console.log(carId)
          window.location.href = `details.html?carId=${carId}`;
          
      });
  });

  
}

viewCar()