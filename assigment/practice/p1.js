// const button = document.getElementById('btn');
// const countDisplay = document.getElementById('count');
// let count = 0;

// const { createElement } = require("react");

// const { createElement } = require("react");

// const { createElement } = require("react");

// button.addEventListener('click', () => {
//     count++;
//     countDisplay.textContent = count;
// });


// const body = document.body;
// const button = document.getElementById('btn');
// let isDarkMode = false;

// button.addEventListener('click', () => {
//     isDarkMode = !isDarkMode;
//     body.style.backgroundColor = isDarkMode ? 'black' : 'white';
//     body.style.color = isDarkMode ? 'white' : 'black';
//     button.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
// });

// const result = document.getElementById('input');

// button.addEventListener('click')



// const input = document.getElementById('input');
// const ele = document.getElementById('output');

// input.addEventListener('keyup', () => {
//     ele.textContent = input.value;
// });


// const submit = document.getElementById('btn')

// submit.addEventListener('click', (event) => {
//     event.preventDefault();


//     const input = document.getElementById('input');
//     const mail = document.getElementById('mail');

//     console.log("Name:", input.value);
//     console.log("Email:", mail.value);

//     if (input.value.length < 2) {
//         alert("Name is too short..Enter a valid Name")
//     }
//     if (mail.value.length < 4) {
//         alert("Email is not short..Enter a valid Email")
//     }
// })

// const value1 = document.getElementById('d1');
// const value2 = document.getElementById('d2')
// const value3 = document.getElementById('d3')

// value1.addEventListener('mouseover', () => {
//         value1.style.backgroundColor='green'
// })
// value2.addEventListener('mouseover', () => {
//         value2.style.backgroundColor='blue'
// })
// value3.addEventListener('mouseover', () => {
//         value3.style.backgroundColor='black'
// })

// value1.addEventListener('mouseleave', () => {
//         value1.style.backgroundColor='lightGreen'
// })
// value2.addEventListener('mouseleave', () => {
//         value2.style.backgroundColor='lightblue'
// })
// value3.addEventListener('mouseleave', () => {
//         value3.style.backgroundColor='grey'
// })

// const video = document.getElementById("video");
// const playBtn = document.getElementById("playBtn");
// const pauseBtn = document.getElementById("pauseBtn");
// const muteBtn = document.getElementById("muteBtn");

// playBtn.addEventListener("click", () => {
//     video.play();
// });

// pauseBtn.addEventListener("click", () => {
//     video.pause();
// });

// muteBtn.addEventListener("click", () => {
//     const mute = document.createElement('button')
//     mute.innerText = 'mute';
//     mute.id = 'mute';


//     mute.addEventListener('click',()=>{
//         if(video.muted){
//             video.muted = false;
//         }else{
//             video.muted = true;
//         }
//         mute.textContent = video.muted ? "unmute" : "mute";
//     })
//     document.body.appendChild(mute);
// });
//onclick of button generation of list of products//
// const products = [
//     {
//         name: "Smartphone",
//         price: 24999,
//         brand: "Samsung",
//         year: 2023
//     },
//     {
//         name: "Laptop",
//         price: 59999,
//         brand: "HP",
//         year: 2022
//     },
//     {
//         name: "Headphones",
//         price: 1999,
//         brand: "boAt",
//         year: 2021
//     },
//     {
//         name: "Smartwatch",
//         price: 3499,
//         brand: "Noise",
//         year: 2024
//     },
//     {
//         name: "Television",
//         price: 29999,
//         brand: "Sony",
//         year: 2023
//     }
// ];
// const btn = document.getElementById('btn');
// const container = document.getElementById('container');


// document.addEventListener('click', (e) => {

//     if (e.target && e.target.id === 'loader') {
//         let cards = '';
//         products.forEach((products, index) => {
//             cards += `
//                 <div class="card" data-index="${index}">
//                 <button class="remove-btn">Remove</button>
//                     <p>${products.name}</p>
//                     <p>₹${products.price}</p>
//                     <p>${products.brand}</p>
//                     <p>${products.year}</p>
//                 </div>
//             `;
//         });
// it is to add this generated HTML element to the DOM //
//     container.innerHTML = cards;
// }


// if (e.target.classList.contains('remove-btn')) {
//     const card = e.target.closest('.card');
//     card.remove(); 
// }
// });

// const sampleButton = document.getElementById('Button');

// sampleButton.addEventListener('click', () => {
//     console.log("Button clicked");
// const newButton = document.createElement('button');
// newButton.textContent = "New Button";
// document.body.appendChild(newButton);
// newButton.addEventListener('click',()=>{
//     console.log("New Button clicked");

// const ele = document.getElementById('container');

// const ele1 = `<div>hello</div>`
// const ele2 = `<div>hello</div>`
// const ele3 = `<div>hello world</div>`


// let allElements=ele1+ele2+ele3;

// container.innerHTML = allElements;
// });

// const parent = document.getElementById('container');
// const childElement = parent.children;


// console.log(childElement[0].childFirstElement);
// console.log(childElement[1].nextElementSibling);
// console.log(childElement[2])

// console.log(childElement[0].childNodes);
// console.log(childElement[1].parentNode);
// console.log(childElement[2]);

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList')


addBtn.addEventListener('click',()=>{
    const a = taskInput.value.trim();
    if(a !== ""){
        console.log("valid task:", a);        
    }else{
        alert("please enter a task.");
    }
});