import { updatedCarInformation } from "./product.js";``


renderCarPrducts()

export function renderCarPrducts(){
    console.log(updatedCarInformation)
    let carsHTML = ''


    updatedCarInformation.forEach((car) => {
        carsHTML +=
    
        `

        <div class="car-card">
            <h3>${car.model_name}</h3>
            <h2>${car.price}</h2>
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
                <p>${car.specifications.seats}</p>
              </div>

            </div>
            <div class="view-car-button">
              <a href="product.html" class="button">View Car <span> <i class='bx bx-right-arrow-alt' style='color:#ffffff' ></i></span></a>
            </div>
        </div>


        
        `

        document.getElementById('car-cards-container').innerHTML = carsHTML
        
    })
}