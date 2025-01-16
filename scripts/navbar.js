
export function navigation(){
    document.addEventListener('DOMContentLoaded', function () {
        // Get the menu toggle button and the menu
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('navbar-menu');
      
        // Check if both elements exist
        if (menuToggle && menu) {
            // Add a click event listener to the toggle button
            menuToggle.addEventListener('click', function (event) {
                // Prevent the click event from bubbling up to the document
                event.stopPropagation();
                
                // Toggle the 'active' class on the menu
                menu.classList.toggle('active');
                document.body.classList.toggle('overlay-active');
            });
      
            document.addEventListener('click', function (event) {
                // Check if the click is outside the menu and the toggle button
                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                    // Close the menu
                    menu.classList.remove('active');
                    document.body.classList.remove('overlay-active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
      
            // Prevent clicks inside the menu from closing it
            menu.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        } 
      });
}

navigation()

export function getTheme() {
    const themeBtns = document.querySelectorAll('.theme-btn');

    // Function to update the theme and button states
    const updateTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
        // Sync all theme buttons
        themeBtns.forEach(btn => {
            btn.checked = isDark;
        });
    };

    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        updateTheme(true); // Apply dark theme
    } else {
        updateTheme(false); // Apply light theme
    }

    // Add event listeners to all theme buttons
    themeBtns.forEach(btn => {
        btn.addEventListener('change', () => {
            updateTheme(btn.checked); // Update theme based on button state
          
        });
    });

    // Sync theme buttons on window resize (e.g., when layout changes)
    window.addEventListener('resize', () => {
        const currentTheme = localStorage.getItem('theme');
        themeBtns.forEach(btn => {
            btn.checked = currentTheme === 'dark';
        });
    });
}

// Call the function to initialize the theme
getTheme();