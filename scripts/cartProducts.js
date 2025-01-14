
export const cart = JSON.parse(localStorage.getItem('cart')) || [];

export function getCarCart(car) {

    addToCart(car);
 
}

export function saveToLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage(key){
    const data = JSON.parse(localStorage.getItem(key));
    console.log(`Data loaded from localStorage with key: ${key}`);
    return data || null; // Return null if no data is found
}


export function cartIndicator() {
    const indicators = document.querySelectorAll('.dot-indicator');
    indicators.forEach((indicator)=>{
        if (indicator && cart.length !== 0) { 
            indicator.classList.add('active-cart');
        } else if (indicator) { 
            indicator.style.display = 'none';
        }
    })
}

cartIndicator()


export function addToCart(newItem) {
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === newItem.id);

    if (existingItem) {
        // If the item exists, increment its quantity
        existingItem.quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        newItem.quantity = 1;
        cart.push(newItem);
    }

    // Save the updated cart to localStorage
    saveToLocalStorage('cart', cart);

    // Update the cart indicator
    cartIndicator();

    console.log('Updated Cart:', cart);
}




