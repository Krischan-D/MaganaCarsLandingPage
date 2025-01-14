import { navigation } from "./navbar.js";
import {renderUsername} from "./displayUsername.js"
import {cart, saveToLocalStorage} from "./cartProducts.js"




function renderCart(){
    const cartContainer = document.getElementById('cartProducts-container')
    let cartHTML = ''



    cart.forEach((item, index) => {

        if (!item.quantity) {
            item.quantity = 1; // Default quantity to 1 if not set
        }

      

        cartHTML +=

        `
         <div class="item">
            <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            <button class="remove-btn"  id="remove-btn" data-car-id="${index}"    aria-label="Remove">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a.663.663 0 00-.938 0L12 11.062 6.574 5.636a.663.663 0 00-.938.938L11.062 12l-5.426 5.426a.663.663 0 10.938.938L12 12.938l5.426 5.426a.663.663 0 00.938-.938L12.938 12l5.426-5.426a.663.663 0 000-.938z" fill="#262626"></path>
                </svg>
            </button>
            <div class="cart-content">
                <div class="image-container">
                    <img src="${item.car_image}" alt="">
                </div>
                <div class="item-detials">
                    <a href="">
                        <h3>${item.model_name}</h3>
                        <p>${item.brand}</p>
                    </a>
                    
                    <div class="quantity-price">
                    <div class="quantity-control">
                            <label for="quantity">Qty:</label>
                            <div class="counter">
                                <button class="counter-btn decrement" data-car-id="${index}"  aria-label="Decrease quantity">−</button>
                                <input type="number" id="quantity-${index}" " name="quantity" value="${item.quantity}" min="1" max="10" readonly>
                                <button class="counter-btn increment"  data-car-id="${index}" aria-label="Increase quantity">+</button>
                            </div>
                    </div>
                        <span class="price">${item.price}</span>
                    </div>
                
                </div>
            </div>
        </div>

        
        
        
        `
    });

    cartContainer.innerHTML = cartHTML
    removeItem()
}

renderCart()


function removeItem(){
    const removeBtn = document.querySelectorAll('.remove-btn')
    removeBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            const index = item.getAttribute('data-car-id')
            console.log(index)
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart()
            getTotal()
            totalItems()
        })
    })
}




export function getTotal() {
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace("₱", "").replace(/,/g, ""));
        return total + (price * item.quantity);
    }, 0);

    console.log(totalPrice.toLocaleString());
    
    if (total) {
        total.innerHTML = `Php ${totalPrice.toLocaleString()}`;
    }   

 
}

function totalItems(){
    const total = document.getElementById('total-item')
    total.innerHTML = `(${cart.length})`
}

const total = document.getElementById('overall-amount');
getTotal()

totalItems()


function quantityControl(){
 
    document.addEventListener('click', function (event) {
        if(event.target.classList.contains('increment')){
            const index = event.target.getAttribute('data-car-id')
            const quantityInput = document.getElementById(`quantity-${index}`);
            let currentQuantity = parseInt(quantityInput.value);
            currentQuantity += 1;
            quantityInput.value = currentQuantity; // Update the input value
            cart[index].quantity = currentQuantity; // Update the cart item's quantity
            saveToLocalStorage('cart', cart)
            renderCart();
            getTotal();
        }else if(event.target.classList.contains('decrement')){
            const index = event.target.getAttribute('data-car-id')
            cart[index].quantity -= 1;
            saveToLocalStorage('cart', cart)
            renderCart();
            getTotal();
        }
    })
}
quantityControl()




const button = document.getElementById('toCheckoutBtn')
button.addEventListener('click', ()=>{
    window.location.href = 'checkout.html'
})