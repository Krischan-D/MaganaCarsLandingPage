export function renderUsername(){
    
    const username = localStorage.getItem('username');

    const usernameDisplay = document.querySelectorAll('.username-text')
    usernameDisplay.forEach(element => {
        element.innerHTML = username;
    });
}

renderUsername()