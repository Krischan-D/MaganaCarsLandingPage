import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm';

export function useAlert(element, title, text, icon) {
    // Check if the element exists
    if (!element) {
        console.error("Element not found!");
        return;
    }

    // Add event listener to the element
    element.addEventListener('click', () => {
        console.log('clicked')
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'Continue Shopping',
            confirmButtonColor: "#ff4c4c",
        });
    });
}


// useAlert()
