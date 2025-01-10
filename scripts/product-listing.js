import { navigation } from "./navbar.js";
import { car_information } from "./product.js";``
import { renderUsername } from "./displayUsername.js";


toggleFilter();

function toggleFilter() {
    const filterContainer = document.getElementById("filter-container");
    const filterButton = document.getElementById('filter-btn');
    const closeButton = document.getElementById("close-filter");
    const overlay = document.querySelector(".overlay");

    filterButton.addEventListener('click', () => {
        filterContainer.classList.add('active');
        // document.body.classList.add('active');
        overlay.classList.add("active"); // Show the overlay
    });

    closeButton.addEventListener("click", () => {
        filterContainer.classList.remove('active');
        // document.body.classList.remove('active');
        overlay.classList.remove("active"); // Hide the overlay
    });
}
  
  // Close the sidebar when the close button is clicked
  

   