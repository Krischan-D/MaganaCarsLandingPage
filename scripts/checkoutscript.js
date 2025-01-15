import {cart} from "./cartProducts.js"
import {renderUsername} from "./utils/displayUsername.js"
import {navigation} from "./navbar.js"
import {useAlert} from "./utils/alrert.js"

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
        closeModal();
        modal.style.display = 'none';
        setTimeout(()=>{
            window.location.href
        })
       
    });
    
    useAlert(submitPaymentButton, 'Order Confirmed!', 'Thank you for shopping', 'success', clearCart)
    
    function clearCart(){
        localStorage.removeItem('cart');
        window.location.href = 'homepage.html'
    }
  


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


