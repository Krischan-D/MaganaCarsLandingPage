document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded and DOM is ready.");

    // Highlight active navigation link
    const currentPage = document.body.id;
    const links = document.querySelectorAll(".nav-bar ul li a");
    links.forEach(link => {
        if (link.getAttribute("data-active") === currentPage) {
            link.classList.add("active");
        }
    });

    // Handle shipping options
    const shippingOptions = document.querySelectorAll(".shipping-options label.option input");
    shippingOptions.forEach(option => {
        option.addEventListener("click", () => {
            shippingOptions.forEach(opt => {
                opt.parentElement.classList.remove("active");
                opt.parentElement.style.borderColor = "#ccc";
                opt.parentElement.style.backgroundColor = "#ffffff";
            });
            option.parentElement.classList.add("active");
            option.parentElement.style.borderColor = "#ec5b5b";
            option.parentElement.style.backgroundColor = "#ff454588";
        });

        // Hover effect
        option.parentElement.addEventListener("mouseover", () => {
            option.parentElement.style.borderColor = "#f85757ef";
            option.parentElement.style.backgroundColor = "#ff454588";
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
    const cartItems = document.querySelectorAll(".cart-item");
    const subtotalElement = document.querySelector(".subtotal");
    const totalElement = document.querySelector(".total");
    let total = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector(".cart-item-details p:nth-child(2)");
        const quantityElement = item.querySelector(".cart-item-details p:nth-child(1) .quantity");
        const quantity = parseInt(quantityElement.textContent);
        const price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ""));
        total += price * quantity;
    });

    subtotalElement.textContent = total.toLocaleString("en-US", { style: "currency", currency: "PHP" });
    totalElement.textContent = total.toLocaleString("en-US", { style: "currency", currency: "PHP" });
    
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
        // Populate the review details
        document.getElementById('review-full-name').textContent = document.getElementById('full-name').value;
        document.getElementById('review-email').textContent = document.getElementById('email').value;
        document.getElementById('review-phone').textContent = document.getElementById('phone').value;
        document.getElementById('review-country').textContent = document.getElementById('country').value;
        document.getElementById('review-city').textContent = document.getElementById('city').value;
        document.getElementById('review-state').textContent = document.getElementById('state').value;
        document.getElementById('review-zip').textContent = document.getElementById('zip').value;

        // Show modal with animation
        modal.classList.add('show');
    };

    // Function to close modal
    const closeModal = () => {
        // Hide modal with animation
        modal.classList.remove('show');
    };

    // Event listener for opening the modal
    checkoutButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission if inside a form
        // Validate form before opening modal
        const form = document.getElementById('account-details');
        if (form.checkValidity()) {
            openModal();
        } else {
            form.reportValidity();
        }
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

        //Fade animation for modal
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


