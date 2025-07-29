const button = document.getElementById('button');

button.addEventListener('click', () => {
    console.log("Button clicked");
    
    const newButton = document.createElement('button')
    newButton.textContent = "New Button";
    
})