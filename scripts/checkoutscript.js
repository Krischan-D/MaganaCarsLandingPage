import {cart} from "./cartProducts.js"
import {renderUsername} from "./utils/displayUsername.js"
import {navigation} from "./navbar.js"
// import {validateCheckoutDetails} from "./chekcoutValidation.js"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded and DOM is ready.");

    const shippingOptions = document.querySelectorAll(".shipping-options label.option input");
    shippingOptions.forEach(option => {
        option.addEventListener("click", () => {
            shippingOptions.forEach(opt => {
                opt.parentElement.classList.remove("active");
                opt.parentElement.style.borderColor = "#ccc";
                opt.parentElement.style.backgroundColor = "#ffffff";
            });
            option.parentElement.classList.add("active");
         
        });

        
        option.parentElement.addEventListener("mouseover", () => {
            option.parentElement.style.borderColor = "#f85757ef";
            option.parentElement.style.backgroundColor = "#ff4f4c5a";
        });
        option.parentElement.addEventListener("mouseout", () => {
            if (option.checked) {
                option.parentElement.style.borderColor = "#ec5b5b";
                option.parentElement.style.backgroundColor = "#ff454588";
            } else {
                option.parentElement.style.borderColor = "#ccc";
                option.parentElement.style.backgroundColor = "#ffffff";
            }
        });
    });

    // Cart calculation and review modal logic
    // const cartItems = document.querySelectorAll(".cart-item");
    // const subtotalElement = document.querySelector(".subtotal");
    // const totalElement = document.querySelector(".total");
    // let total = 0;

    // cartItems.forEach(item => {
    //     const priceElement = item.querySelector(".cart-item-details p:nth-child(2)");
    //     const quantityElement = item.querySelector(".cart-item-details p:nth-child(1) .quantity");
    //     const quantity = parseInt(quantityElement.textContent);
    //     const price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ""));
    //     total += price * quantity;
    // });

    // subtotalElement.textContent = total.toLocaleString("en-US", { style: "currency", currency: "PHP" });
    // totalElement.textContent = total.toLocaleString("en-US", { style: "currency", currency: "PHP" });
    
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const checkoutButton = document.querySelector('.checkout-button');
    const modal = document.getElementById('review-payment-modal');
    const closeModalButton = document.getElementById('close-review-payment-modal');
    const submitPaymentButton = document.querySelector('.proceed-payment-btn');
    // Function to open modal
    const openModal = () => {
        modal.classList.add('show');
    };
    // Function to close modal
    const closeModal = () => {
        modal.classList.remove('show');
    };

    // Event listener for opening the modal
    checkoutButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal()
       
    });

    // Event listener for closing the modal
    closeModalButton.addEventListener('click', closeModal);

    // Optional: Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle Submit Payment button (you can customize this as needed)
    submitPaymentButton.addEventListener('click', () => {
        // Perform payment submission logic here
        alert('Payment Submitted Successfully!');
        closeModal();
        // Optionally, redirect to a confirmation page
        // window.location.href = 'confirmation.html';
    });

        // Fade animation for modal
    document.querySelector('.checkout-button').addEventListener('click', () => {
        const modal = document.getElementById('review-payment-modal');
        modal.style.display = 'block';
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    });

    document.getElementById('close-review-payment-modal').addEventListener('click', () => {
        const modal = document.getElementById('review-payment-modal');
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Ensure the close modal button works
    closeModalButton.addEventListener("click", () => {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });
});



function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    const errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
        console.error('Error message element not found for', field);
        return false;
    }

    if (value === '') {
        setErrorFor(field, errorMessage, 'This field cannot be blank');
        isValid = false;
    } else if (field.id === 'email' && !isValidEmail(value)) {
        setErrorFor(field, errorMessage, 'Please enter a valid email address');
        isValid = false;
    } else if (field.id === 'phone' && !isValidPhone(value)) {
        setErrorFor(field, errorMessage, 'Please enter a valid phone number');
        isValid = false;
    } else if (field.id === 'zip' && !isValidZip(value)) {
        setErrorFor(field, errorMessage, 'Please enter a valid zip code');
        isValid = false;
    } else {
        setSuccessFor(field, errorMessage);
    }

    return isValid;
}



function setErrorFor(field, errorMessage, message) {
    field.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function setSuccessFor(field, errorMessage) {
    field.classList.remove('error');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\d{10}$/; // Example: 10-digit phone number
    return re.test(phone);
}

function isValidZip(zip) {
    const re = /^\d{5}$/; // Example: 5-digit zip code
    return re.test(zip);
}












const selectedPrice = document.querySelector('input[name="terms"]:checked');
function renderReviewCart(){
    let reviewCart = ''
    cart.forEach((car)=>{
        if(!car.shippingFee){
            car.shippingFee = calculateShippingByTier(car.price)
        }

        reviewCart += 
        `
             <div class="cart-item">
                <img src="${car.car_image}" alt="Hyundai Tucson" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${car.brand} ${car.model_name}</h3>
                    <p>Quantity: <span class="quantity">${car.quantity}x</span></p>
                    <p>Price: ${car.price}</p>
                </div>
            </div>
        
        
        `

        document.getElementById('cart-items').innerHTML = reviewCart
    })
    
}


renderReviewCart()
const subtotal = document.getElementById('subtotal-total')
export function getTotal() {
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace("₱", "").replace(/,/g, ""));
        return total + (price * item.quantity);
    }, 0);

    // console.log(totalPrice.toLocaleString());
    
    // if (subtotal) {
    //     subtotal.innerHTML = `Php ${totalPrice.toLocaleString()}`;
    // }   

    // return  `Php ${totalPrice.toLocaleString()}`;
    return totalPrice

}

subtotal.innerHTML = `Php ${getTotal().toLocaleString()}`;



function calculateShippingByTier(carPrice) {
    if (carPrice <= 1000000) {
        return 15000; // ₱10,000 for cars under ₱1,000,000
    } else if (carPrice > 1000000 && carPrice <= 2000000) {
        return 20000; // ₱15,000 for cars between ₱1,000,000 and ₱2,000,000
    }else if (carPrice > 3000000 && carPrice <= 5000000){
        return 50000
    }  
    else {
        return 65000; // ₱20,000 for cars over ₱2,000,000
    }
}



function getTotalShipingFee(){

    const totalShippingFee = cart.reduce((total, item)=>{
        return total + (item.shippingFee * item.quantity)
    },0 )
    return totalShippingFee
}

const shipping = document.getElementById('shipping').innerHTML = `Php ${getTotalShipingFee().toLocaleString()}`
const total = document.getElementById('total').innerHTML = `Php ${(getTotalShipingFee() + getTotal()).toLocaleString()}`


