import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm';

export function useAlert(element) {
    // Check if the element exists
    if (!element) {
        console.error("Element not found!");
        return;
    }

    // Add event listener to the element
    element.addEventListener('click', () => {
        console.log('clicked')
        Swal.fire({
            title: 'Success!',
            text: 'Added to Cart',
            icon: 'success',
            confirmButtonText: 'Continue Shopping',
            confirmButtonColor: "#ff4c4c",
        });
    });
}


// useAlert()
