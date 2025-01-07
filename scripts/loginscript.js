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
    imgElements[currentIndex].classList.remove("active");
    lineIndicators[currentIndex].classList.remove("active");

    // Update index
    currentIndex = (currentIndex + 1) % images.length;

    // Add active class to new image and line
    imgElements[currentIndex].classList.add("active");
    lineIndicators[currentIndex].classList.add("active");
}

// Automatically update images every 2 seconds
setInterval(updateImage, 2000);

// Add click event listeners to line indicators
lineIndicators.forEach((line, index) => {
    line.addEventListener("click", () => {
        // Remove active class from current image and line
        imgElements[currentIndex].classList.remove("active");
        lineIndicators[currentIndex].classList.remove("active");

        // Update index
        currentIndex = index;

        // Add active class to new image and line
        imgElements[currentIndex].classList.add("active");
        lineIndicators[currentIndex].classList.add("active");
    });
});