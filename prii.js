// (function()
// {
// console.log("Welcome to  javascript IIFE!");
// })();


// (function(a,b){

// })


// const arr =[1, 2, 3, 4, ]

// const arr = new Array(2);
// console.log(arr);


//


// const arr =[1, 5, 6, 3, 78]


// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);

// }






// const arr = [1, 2, 3, 4, 5];
// const s = arr.toString(); // "1,2,3,4,5"
// console.log(s);

// const newArray = s.split(","); // ["1", "2", "3", "4", "5"]

// for (let index = 0; index < newArray.length; index++) {
//     newArray[index] = parseInt(newArray[index], 10); // Convert each string to number
// }
// console.log(newArray); // [1, 2, 3, 4, 5]




// const arr = [1, 2, 3, 4, 5];
// const s = arr.toString();
// console.log(s); // "1,2,3,4,5"

// const newArray = s.split(","); // Split the string by commas

// for (let index = 0; index < newArray.length; index++) {
//     newArray[index] = newArray[index] * 1; // Convert each string to number
// }
// console.log(newArray); // [1, 2, 3, 4, 5]



// const arr = [1, 2, 3, 4, 5];
// const s = arr.toString();
// const newArray = s.split(",");

// for (let i = 0; i < newArray.length; i++) {
//     newArray[i] = Number(newArray[i]);
// }
// console.log(newArray);


// const a = [[0,1,2,3,4,5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19,20,21]]
// for(let i =0;i<a.length;i++)
// {
//     let l=a[i].length

//     for(let j=0;j<l;j++)
//     {
//         console.log(a[i][j])
//     }
// }


// for(i=0;i<5;i++)
// {
//     let str="";
//     for(j=0;j<5-1;j++)
//     {
//         str=str+""+"*"
//     }
//     console.log(str);


// }


// function printHollowSquare(size) {
//     for (let i = 0; i < size; i++) {
//         let row = '';
//         for (let j = 0; j < size; j++) {
//             if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
//                 row += '* ';
//             } else {
//                 row += '  ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage:
// printHollowSquare(5);




// const myArr = [[1,2],[70, 45,3,4],[5,6]];
// const newArr = myArr.flat();

// console.log(newArr);


// const fruits = ["b", "e", "f", "t"]
// Array.length(fruits);

// console.log(fruits);


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 2);
// console.log(months);

// const age=[{name:"shivam",age:22},
//            {name:"priya",age:21},
//            {name:"preethi",age:19},
//            {name:"shubham",age:14}
//     ]
//     let first = age.find(myFunction);
//     function myFunction(value, index, array) {
//   return value.age < 18;
// }
// console.log(first);


// const myArr = [
//   {name:"X00",price:130 },
//   {name:"X01",price:120 },
//   {name:"X02",price:100 },
//   {name:"X03",price:160 },
//   {name:"X04",price:110 },
//   {name:"X05",price:120 },
//   {name:"X06",price:110 },
//   {name:"X07",price:110 }
// ];

// function comparator(a,b){
//   return a.price - b.price
// }
// myArr.sort(comparator)

// console.log(myArr);

// const arr1=[1, 2, 3, 4, 5, 6, 8, 9, 6];
// const[A, B, C, ...rest] = arr1;

// console.log(A, B, C,);
// console.log(rest);


// const obj ={
//     name:"shivam",
//     age : 22,
//     address:"UP"
// }
// const {name, age, ...obj1}= obj;

// console.log(age);
// console.log(obj1);

// const x = "2022-04-11"

// const date = new Date();
// console.log(date.toString);

// const d = new Date();
// d.toISOString();

// console.log(d);

// const d = new Date("January 01, 2025");
// d.setFullYear(2020);

// console.log(d);

// const d= new Date(0)
// const d1= new Date(2022-03-25)
// const d2 = new Date(2025, 6, 10, 14, 30, 45, 1000);
// const d3= new Date(24 * 60 * 60 * 1000)
// const d4 = new Date(-100000000000);



// console.log(d);
// console.log(d1);
// console.log(d2);
// console.log(d3);
// console.log(d4);


// const d = new Date("2015-01-25T10:00:00Z");
// const d1 = new Date("2015-03-25T12:00:00-06:30")
// console.log(d);
// console.log(d1);


// const msec = Date.parse("March 21, 2012");
// console.log(msec);

// const d = new Date("2021-03-25");
// d.getFullYear();

// console.log(d);


//     r=Math.round(4.6);
//     console.log(r);


// r=Math.floor(4.6);
//     console.log(r);

// r=Math.trunc(4.6);
//     console.log(r);

// const letters = new Set(["a","b","c", "d"]);
// console.log(letters);

// const letter = new Set();
// const a = "a";
// const b = "b";
// const c = "c";
// const a1 = "d";

// letter.add(a);
// letter.add(b);
// letter.add(c);
// letter.add(a1);
// const array = Array.from(letter);

// console.log(array);


// function removeDuplicate(inpArr) {
//     const set = new Set([...inpArr])

//     const result = Array.from(set)

//     return result;

// }
// const inpArr = [1, 2, 4, 5, 1, 6, 3, 9, 9]
// const resultArr = removeDuplicate(inpArr)

// console.log(resultArr);



// const letters = new Set(["a", "b", "c"])


// const letters = new Set(["a","b","c"])

// answer = letters.has("d");

// console.log(answer);



// const letters = new Set(["a","b","c"]);


// let text = "";
// for (const x of letters) {
//   text += x;
// }
//   console.log(text);


// const letters = new Set(["a", "b", "c"]);


// const myIterator = letters.keys();


// let text = "";
// for (const entry of myIterator) {
//     text += entry;
// }
// console.log(text);


// const fruits = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ];

// Callback function to Group Elements
// function myCallback({ quantity }) {
//     return quantity >= 200 ? "ok" : "low";
// }

// Group by Quantity
// const result = Map.groupBy(fruits, myCallback);
// console.log(result);


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// let { firstName : N, lastName : l,country = "US" } = person;
// console.log(N);
// console.log(l);
// console.log(country);


// let name = "W3Schools";

// let [a1, a2, a3, a4, a5, a6, a7] = name;

// console.log(a1, a2, a3, a4, a5, a6);


// const fruits = [ "Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
// let [fruit1, fruit2, fruit3, fruit4] = fruits;
// console.log(fruit4);
// let octal = 0o11;
// console.log(octal);
// function fun(element){
//     return element + 2;
// }

// const numbers = [5, 4, 5, 6, 8];
// const result=numbers.filter(fun)
// console.log(result); 


// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result);

// }



// const arr=[1, 2, 4, 7, 12, 7]
// const result=arr.filter(function(value){
//     return value>4;
// })
// console.log(result);


// function callback(element) {
//     return element > 4;
// }

// const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];

// for (let i = 0; i < arr1.length; i++) {
//     let isValid = callback(arr1[i]);
//     if (isValid) {
//         newArr.push(arr1[i]);
//     }
// }

// console.log(newArr); 

// const userData = '{"name":"John", "age":30, "city":"Delhi"}';

// const user = JSON.parse(userData);
// console.log(user.city);
// console.log(user.name);

// const student = {
//     name: "Aman",
//     grade: "A",
//     marks: 92
// };


// const jsonString = JSON.stringify(student);

// console.log(jsonString);

// const users = [
//     { name: "Ravi", "age": 25 },
//     { name: "Seema", "age": 28 },
//     { name: "Amit", "age": 22 }
// ];

// users.forEach(function (user) {
//     console.log(user.name);
// });

// const str="Welcome to the world"
// const r=str.match(/W/i)
// console.log(r);

// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// console.log(n);


// str = "hello";
// str1 = "";
// for(i=str.length-1; i>=0; i--){
//     str1 += str[i];
// }
// if(str1==str)
//     console.log("str is palindrome");
// else
//     console.log("str is not palindrome");
// console.log(str1);


// let str="hello";
// let str1="";
// for(let i=0; i<str.length; i++){
//     str1+=str[str.length-1-i];
// }console.log(str1);

// let str3="number";
// let revstr="";
// for(let i=str.length-1;i>=0;i--){
//     revstr+=str3[i];
// }
// console.log(revstr);

// let str="ABC";
// let str1="";
// const l=str.length;
// for(let i=0; i>=i ;i++){
//     str1=str[i]+1;
// }
// console.log(str1);


// let str="ABC"
// let r ="olleh"0
// for(let i=0; i<str.length; i++){
// Substr=str.slice(1,length)
// if (substr===r){
//     return true;
// }
// str=substr;
// }
// console.log(substr);


// function issrotate(s, r) {
//     for (let i = 0; i < s.length; i++) {
//         let substr = s.slice(1)+ s[0];
//         if (substr === r) {
//             return true
//         }
//         s = substr;
//     }
// }
// let s = "ABC", r = "CBA"
// console.log(issrotate(s, r));


// function isrotate(s, r) {
//     for (let i = 0; i < s.length; i++) {
//         let substr = s.slice(1) + s[0]; // shift left by 1 character
//         if (substr === r) {
//             return true;
//         }
//         s = substr; // update s for next rotation
//     }
//     return true; // if no match found
// }

// let s = "ABC", r = "CBA";
// console.log(isrotate(s, r)); // Output: false

// const arr =[];
// let i =0;

// function batchedFunction(){

//     for(let j=0; j<100;j++){
//         console.log(i);
//         i++;        
//     }

//     if(i<1000){
//         setTimeout(() => {
//             batchedFunction();
//         }, 0);
//     }
// }
// batchedFunction();


// const id = setInterval(() => {
//     console.log("inerval");

// }, 1000);

// console.log(id);


// function removeInterval(){
//     clearInterval(id);
// }
// window.removeInterval = removeInterval


// console.log("1");

// setTimeout(function () {
//     console.log("2"); 
// }, 1000);

// console.log("3");


// console.log("Countdown starting...");

// setTimeout(() => {
//     console.log("3");

//     setTimeout(() => {
//         console.log("2");

//         setTimeout(() => {
//             console.log("1");

//             setTimeout(() => {
//                 console.log("Go!");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);


// console.log("let's start");

// setTimeout(() => {
//     console.log("first step");

//     setTimeout(() => {
//         console.log("second step");

//         setTimeout(() => {
//             console.log("third step");

//             setTimeout(() => {
//                 console.log("finally");

//             }, 2000);
//         }, 2000);

//     }, 2000);

// }, 1000);

// console.log("let's start");

// const steps = ["first step", "second step", "third step", "finally"];

// steps.forEach((msg, index) => {
//     setTimeout(() => {
//         console.log(msg);
//     }, 1000 + index * 1500); // First delay is 1s, then 2s more for each step
// });


// console.log("let's start");

// const steps = ["first step", "second step", "third step", "finally"];

// for (let i = 0; i < steps.length; i++) {
//     setTimeout(() => {
//         console.log(steps[i]);

//     }, 1000 + i * 2000);
// }


// function hello(){
//     console.log("hello");

// }
// setTimeout(hello, 5000);



// function selfIntroduction(){
//     console.log("ABOUT MYSELF");
// }
// setTimeout(() => {
//     console.log("hello");

//     setTimeout(() => {
//         console.log("my name");

//         setTimeout(() => {
//             console.log("is");

//             setTimeout(() => {
//                 console.log("Shivam niahad");

//             }, 2000);

//         }, 0);

//     }, 2000);
// }, 3000)

// console.log("selfIntroduction");


// setTimeout(() => {
//     console.log("hello");

// }, 2000);

// setTimeout(() => {
//     function hello(){
//         console.log("my self Shivam Nishad");
//     }
//     console.log("hello");
//     hello();
// }, 3000);

// setTimeout(() => {
//     console.log("hello");

//     setTimeout(() => {
//         console.log("my self Shivam nishad");

//     }, 3000);
// }, 2000);



// let myPromise = new Promise(function data (resolve, reject)){
//     let x = y
// }

// "use strict";

// console.log(x);

// var x=10;


// function f(a, b, c) {

// }
// f(10, undefined, 39);
// console.log("f");



// const a=[2, 4, 3, 5, 2, 6]
// const [d, e,...rest]=a;

// console.log(a);
// console.log(d);
// console.log(e);
// console.log(rest);

// const obj ={
//     name:"sanjay",
//     age:25,
//     address: "blur",
//     pin:560048
// }
// const {name, age,...rest} = obj;

// console.log(obj);
// console.log(name);
// console.log(rest);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [3, 6, 8];

// const combined = [...arr1, ...arr2, ...arr3];
// console.log(combined); 

// const obj ={
//     name:"sanjay",
//     age:25,
//     address: "blur",
//     pin:560048
// }
// const obj1 ={
//     name:"shivam",
//     age:25,
//     address: "blur",
//     pin:560048
// }

// const r = {...obj, other:{ ...obj1}};
// console.log(r);



// const fruits = [5, 100];
// fruits.sort((a,b)=>a-b);
// console.log(fruits);


// const fruits1 = [5, 100];
// fruits1.sort();
// console.log(fruits1);

// function outer() {
//     let a = 10;

//     function inner() {
//         let b = 5;
//         console.log(a + b); 
//     }

//     inner();
// }

// outer();

// new Promise(resolve =>{
//     console.log('A');
//     resolve();
//     console.log('B');    
// }).then(async()=>{
//     console.log('C');    
// }).then(async()=>{
//     console.log('D');
// })

// console.log('E');



innerHTML
textContent
innerText