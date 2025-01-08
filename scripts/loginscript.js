document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "images/cars/car_1.jpg",
        "images/cars/car_2.jpg",
        "images/cars/car_3.jpg",
        "images/cars/car_4.jpg",
        "images/cars/car_5.jpg",
        "images/cars/car_6.jpg",
        "images/cars/car_7.jpg"
    ];

    let currentIndex = 0;

    const imageContainer = document.querySelector(".image-container");
    const lineIndicators = document.querySelectorAll(".line-indicators .line");

    // Load images into the container
    images.forEach((src, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        if (index === 0) imgElement.classList.add("active");
        imageContainer.appendChild(imgElement);
    });

    const imgElements = document.querySelectorAll(".image-container img");

    // Function to update the active image and line indicator
    function updateImage() {
        // Remove active class from current image and line
        imgElements[currentIndex]?.classList.remove("active");
        lineIndicators[currentIndex]?.classList.remove("active");

        // Update index
        currentIndex = (currentIndex + 1) % images.length;

        // Add active class to new image and line
        imgElements[currentIndex]?.classList.add("active");
        lineIndicators[currentIndex]?.classList.add("active");
    }

    // Automatically update images every 2 seconds
    setInterval(updateImage, 2000);

    // Add click event listeners to line indicators
    lineIndicators.forEach((line, index) => {
        line.addEventListener("click", () => {
            // Remove active class from current image and line
            imgElements[currentIndex]?.classList.remove("active");
            lineIndicators[currentIndex]?.classList.remove("active");

            // Update index
            currentIndex = index;

            // Add active class to new image and line
            imgElements[currentIndex]?.classList.add("active");
            lineIndicators[currentIndex]?.classList.add("active");
        });
    });

    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error');

    if (username && password && errorMessage && form) {
        username.addEventListener('input', () => validateField(username));
        password.addEventListener('input', () => validateField(password));

        form.addEventListener('submit', (e) => {
            const usernameValue = username.value.trim();
            const passwordValue = password.value.trim();

            if (usernameValue === '' && passwordValue === '') {
                e.preventDefault(); // Prevent form submission
                setErrorFor(username, password, 'Please fill up the form field');
            } else if (usernameValue === '') {
                e.preventDefault(); // Prevent form submission
                setErrorFor(username, '', 'Username cannot be blank');
            } else if (passwordValue === '') {
                e.preventDefault(); // Prevent form submission
                setErrorFor('', password, 'Password cannot be blank');
            } else {
                setSuccess(username);
            }
        });
    }

    function setErrorFor(inputValueUsername = '', inputValuePassword = '', message) {
        if (inputValueUsername === username && inputValuePassword === password) {
            username.style.borderColor = 'red';
            password.style.borderColor = 'red';
            errorMessage.innerHTML = message;
        } else if (inputValueUsername === username) {
            username.style.borderColor = 'red';
            errorMessage.innerHTML = message;
        } else if (inputValuePassword === password) {
            password.style.borderColor = 'red';
            errorMessage.innerHTML = message;
        }
    }

    function setSuccess(username) {
        username.style.borderColor = 'green';
        password.style.borderColor = 'green';
        errorMessage.innerHTML = ' ';

        // Store the username in localStorage
        localStorage.setItem('username', username.value.trim());

        // Redirect to homepage.html
        window.location.href = 'homepage.html';
    }

    function validateField(param) {
        if (param === username) {
            username.style.borderColor = 'green';
        } else if (param === password) {
            password.style.borderColor = 'green';
        }
    }

    const hidePasswordIcon = document.querySelector('.hide-icon');
    const showPasswordIcon = document.querySelector('.show-icon');

    if (hidePasswordIcon && showPasswordIcon) {
        hidePasswordIcon.addEventListener('click', showPassword);
        showPasswordIcon.addEventListener('click', showPassword);
    }

    function showPassword() {
        const password = document.getElementById('password');
        if (password.type === 'password') {
            password.type = 'text';
            showPasswordIcon.style.display = 'block';
            hidePasswordIcon.style.display = 'none';
        } else {
            password.type = 'password';
            showPasswordIcon.style.display = 'none';
            hidePasswordIcon.style.display = 'block';
        }
    }
});