export function validateCheckoutDetails() {
    document.addEventListener('DOMContentLoaded', () => {
        // Get elements
        const checkoutButton = document.querySelector('.checkout-button');
        const fullName = document.getElementById('full-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const country = document.getElementById('country');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zip = document.getElementById('zip');
        const termsCheckbox = document.querySelector('.terms-checkbox');
        const errorMessage = document.querySelector('.error-message');

        if (fullName && email && phone && country && city && state && zip && termsCheckbox && errorMessage) {
            fullName.addEventListener('input', () => validateField(fullName));
            email.addEventListener('input', () => validateField(email));
            phone.addEventListener('input', () => validateField(phone));
            country.addEventListener('input', () => validateField(country));
            city.addEventListener('input', () => validateField(city));
            state.addEventListener('input', () => validateField(state));
            zip.addEventListener('input', () => validateField(zip));

            checkoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                let isValid = true;

                const fullNameValue = fullName.value.trim();
                const emailValue = email.value.trim();
                const phoneValue = phone.value.trim();
                const countryValue = country.value.trim();
                const cityValue = city.value.trim();
                const stateValue = state.value.trim();
                const zipValue = zip.value.trim();
                const termsChecked = termsCheckbox.checked;

                if (fullNameValue === '') {
                    setErrorFor(fullName, 'Full name cannot be blank');
                    isValid = false;
                } else {
                    setSuccess(fullName);
                }

                if (emailValue === '' || !validateEmail(emailValue)) {
                    setErrorFor(email, 'Email is invalid');
                    isValid = false;
                } else {
                    setSuccess(email);
                }

                if (phoneValue === '' || !validatePhone(phoneValue)) {
                    setErrorFor(phone, 'Phone number is invalid');
                    isValid = false;
                } else {
                    setSuccess(phone);
                }

                if (countryValue === '') {
                    setErrorFor(country, 'Country cannot be blank');
                    isValid = false;
                } else {
                    setSuccess(country);
                }

                if (cityValue === '') {
                    setErrorFor(city, 'City cannot be blank');
                    isValid = false;
                } else {
                    setSuccess(city);
                }

                if (stateValue === '') {
                    setErrorFor(state, 'State cannot be blank');
                    isValid = false;
                } else {
                    setSuccess(state);
                }

                if (zipValue === '' || !validateZip(zipValue)) {
                    setErrorFor(zip, 'Zip code is invalid');
                    isValid = false;
                } else {
                    setSuccess(zip);
                }

                if (!termsChecked) {
                    setErrorFor(termsCheckbox, 'You must agree to the terms and conditions');
                    isValid = false;
                } else {
                    setSuccess(termsCheckbox);
                }

                if (isValid) {
                    // Proceed with checkout
                    errorMessage.innerHTML = '';
                    alert('Checkout successful!');
                }
            });
        }
    });

    
}

function validateField(field) {
    const value = field.value.trim();
    if (value === '') {
        setErrorFor(field, 'This field cannot be blank');
    } else {
        setSuccess(field);
    }
}

function setErrorFor(input, message) {
    input.style.borderColor = 'red';
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.innerHTML = message;
    }
}

function setSuccess(input) {
    input.style.borderColor = 'green';
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.innerHTML = '';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10}$/; // Example: 10-digit phone number
    return re.test(phone);
}

function validateZip(zip) {
    const re = /^\d{5}$/; // Example: 5-digit zip code
    return re.test(zip);
}

validateCheckoutDetails();