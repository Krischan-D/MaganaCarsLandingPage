import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm';

export function useAlert(element, title, text, icon, callback) {
    // Check if the element exists
    if (!element) {
        console.error("Element not found!");
        return;
    }

    // Add event listener to the element
    element.addEventListener('click', () => {
        console.log('clicked');
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'Continue Shopping',
            confirmButtonColor: "#ff4c4c",
            didOpen: () => {
                // Access the confirm button after the modal is opened
                const confirmButton = Swal.getConfirmButton();
                confirmButton.addEventListener('click', () => {
                    console.log('Confirm button clicked!');
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                });
            }
        });
    });
}


export function toastAlert(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
}