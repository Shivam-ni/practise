const container = document.getElementById('container');

// Only set localStorage if it doesn't exist yet
if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify([]));
}

function loadNewData() {
    const data = JSON.parse(localStorage.getItem('data') );
    
    let newData = '';
    if (data.length > 0) {
        data.forEach((item) => {
            newData += `<h4>${item}</h4>`;
        });
        container.innerHTML = newData;
    } else {
        container.innerHTML = "<p>No data yet</p>";
    }
}

function SaveButtonHandler() {
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value.trim();

    if (inputValue) {
        const data = JSON.parse(localStorage.getItem('data'));
        data.unshift(inputValue); 
        localStorage.setItem('data', JSON.stringify(data));
        loadNewData();
    }

    inputElement.value = "";
}

const save = document.getElementById('save');
save.addEventListener('click', SaveButtonHandler);

loadNewData();
