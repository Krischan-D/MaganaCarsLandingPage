import { updatedCarInformation } from "./product.js";
import {getCarCart} from "./cartProducts.js"
import {useAlert} from "./alrert.js"
const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('carId');


function getCar(callback){
    updatedCarInformation.forEach(element => {
        if(element.id === carId){
            callback(element)
        }
    });
    
}

getCar(renderCar);
function renderCar (car){
    const detailsContainer = document.getElementById('details-container');
    if (!detailsContainer) {
        console.error('Element with ID "details-container" not found.');
        return;
    }
    let carDetailsHTML = 
    `
        <div class="overview-container">

                <div class="car-container">
                    <div class="car-name">
                        <h1>${car.model_name}</h1>
                        <span>${car.type}</span>
                    </div>
                    <div class="img-container">
                    <img src="${car.car_image}" alt="">
                    
                    </div>
                    <div class="colors-button">
                        <div class="color"></div>
                        <div class="color"></div>
                        <div class="color"></div>
                    </div>
                </div>
                <!-- <div class="car-summary">
                    <div class="summary"> 
                    </div>
                </div> -->
        </div>
        
        <div class="car-specs-container">
                <div class="car-details-overview">
                
                <div class="details-container">
                    <h2>${car.brand}</h2>
                    <span>Brand</span>
                </div>
                <div class="details-container">
                    <h2>${car.model_name}</h2>
                    <span>Model</span>
                </div>
                <div class="details-container">
                    <h2>${car.model_year}</h2>
                    <span>Year</span>
                </div>
                <div class="details-container">
                    <h2>${car.specifications.seats}</h2>
                    <span>Seats</span>
                </div>
                </div>
                <div class="car-details-overview">
                <div class="details-container">
                    <h2>${car.specifications.transmission}</h2>
                    <span>Transmission</span>
                </div>
                <div class="details-container">
                    <h2>${car.specifications.fuel_type}</h2>
                    <span>Fuel type</span>
                </div>
                <div class="details-container">
                    <h2>${car.specifications.engine_displacement}</h2>
                    <span>Engine Displacement</span>
                </div>
                </div>
                <div class="price-addto-container">
                    <h1>${car.price}</h1>
                    <button class="addToCart-btn" data-car-id="${car.id}">Add to cart</button>
                </div>
        </div>
        
    `


    document.getElementById('details-container').insertAdjacentHTML('beforeend', carDetailsHTML)
   
    
}


const addToCartBtn = document.querySelector('.addToCart-btn');
useAlert(addToCartBtn)
addToCartBtn.addEventListener('click', ()=>{
   
    getCar(getCarCart)
})


