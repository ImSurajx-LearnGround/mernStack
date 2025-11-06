// // array is a data type which use to similar type of data in different language.
// let arr = [81,92,73,94]; // only in js diff type of values
// let marks = new Array(); // creating array
// console.log(arr[0]); // accessing
// arr[0] = 30; // updation
// console.log(arr[0]);

// // methods of array
// let arr = [1, 2, 3, 4, 5];
// arr.push(7000); // push value at the end
// for (let i = 0; i < arr.length; i++) console.log(arr[i]); 
// arr.pop() // remove value from end of array
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// arr.shift(); // remove value from start of array
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// arr.unshift(10); // add value at start of array
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// arr.splice(2, 1); // remove value between from array, splice(index, kitni value hatani hain) - changes in actual array;
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// let newarr = arr.slice(0, 3); // extract value from array & create new array with those values, no changes in main array
// for (let i = 0; i < newarr.length; i++) console.log(newarr[i]);
// arr.reverse(); // reverse the main array
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// arr.sort(function (a, b) {
//     return a - b; // accending order, b - a  : decending order
// }); // sort always accept a function with two para meteres
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// let array = [11,62, 3, 4, 25]; 
// // array.forEach(function(val){ // for each element it will run the function
// //     console.log(val+5);
// // })

// // map : sirf tab use karna hain. jab aapko ek naya array banana hain pichle array ke data ke basis par
// // map dikhte hi sath man mea ek balank array banao, ab iske under ka function jo jo return karega woo value array me aa jayega
// // basicly copy the length/size of original array
// // jab bhi aapko aisa koi case dikh jaaye jaha pad ek array se naya array banega or wo naya array kuch values ko rakhega tab map lagega
// let newarr = array.map(function(val){
//     if(val > 10) return 12;
//     else return 5;
// })
// for (let i = 0; i < newarr.length; i++) console.log(newarr[i]);

// // filter, only return value when return is set to true.
// let array = [11,62, 3, 4, 25]; 
// let newarr = array.filter(function(val){
//     if(val > 4) return true;
// });
// for (let i = 0; i < newarr.length; i++) console.log(newarr[i]);

// let arr = [1,2,3,4,5,6,7,8,9];
// let ans = arr.reduce(function(accumulator, val){ // array ko reduce karke single value me leke aao
//     return accumulator + val; // val is comming from the arr
// }, 0); // 0 : is the initial value of accumulator, & each time accumulator remember it's value.
// console.log(ans);

// arr.find(function(val){ // first person in the array which match condtion it's return that
//     return val === 1;
// });

// let any = arr.some(function(val){ // return true & false even for single value
//     return val > 4;
// });
// console.log(any);

// let every = arr.every(function(val){ // check if all element of array match the condition or not, return true/false according to that
//     return val > 5;
// });
// console.log(every);


// // destructring
// let [a,b,,d,,f] = arr; // copies value from array
// console.log(a,b,d,f);

// // spread operator
// let arr2 = arr; // array will not copy, it sends reference.
// let arr3 = [...arr]; // spread operator for arrays & objects
// console.log(arr3);


// // Questions

// // ques : create an array with 3 fruits and prit the second fruit.
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[1]);

// // ques : add mango at the end & pineapple at the beginning of this array
// fruits.unshift("pinapple");
// fruits.push("guava");
// console.log(fruits);


// // ques : replace banana with kiwi
// fruits[2] = "kiwi"
// console.log(fruits);


// // ques : difference b/w push & unsift.
// // push : add element in the end, unshift : add element at start

// // ques : remove the last item from this array using a method
// fruits.pop();
// console.log(fruits)

// // ques : insert "red" & "blue" at index 1 in this array
// fruits.splice(1,0, "red", "blue"); // kis index pe kya hatana hain, ager kuch nahi hatana to zero liko, or us wale index pad kuch add karna hain to put after that, like red & blue
// console.log(fruits);

// // ques : extract only the middle 3 elements from this array
// let arr = fruits.slice(2,5);
// console.log(arr);

// // ques : sort this array in alphabetical order, & then reverse it;
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// // ques : use .map() to square each number.
// let sqr = [1,2,3,4,5];

// let sqrmap = sqr.map(function(val){
//     return val * val;
// });
// console.log(sqrmap);

// // ques : use .filtter to keep number greater then 10
// let arrNum = [5,12,8,20,3];
// numGTen =  arrNum.filter(function(val){
//     if(val > 10) return true;
// })
// console.log(numGTen);

// // ques : use reduce() to find the sum of this array.
// let sum = arrNum.reduce( (accumulator, val) => {
//     return accumulator + val;
// }, 0);
// console.log(sum);

// // ques : use find() to get the first number which is less than 10;
// arrLTen = arrNum.find((val)=>{
//     return val < 10;
// });
// console.log(arrLTen);

// // ques : use some() to check if any student has scored below 35
// let score = [45,60,28,90];
// let bool = score.some((val) => {
//     return val < 35;
// })
// console.log(bool);

// // ques : use every() to check if all numbers are even;
// let isEven = score.every((val) => {
//     return val % 2 == 0;
// })
// console.log(isEven);

// // ques : destructure this array to get firstName and lastName;
// let fullName = ["Suraj", "Kumar"];
// let [firstName, lastName] = fullName;
// console.log(firstName);
// console.log(lastName);


// // ques : merge two array using spread operator
// let a  = [1,2];
// let b = [3,4];
// let c = [...a, ...b];
// console.log(c);

// // ques : add  "india to the start of this array using spread"
// let countries = ["USA", "UK"];
// countries = ["INDIA",...countries];
// console.log(countries);

// // ques : clone this array properly (not by reference);
// let arro = [1,2,3];
// let arrc = [...arr];
// console.log(arro);


// PRACTICE

// // ques: Create an array of 10 numbers.	Print only even numbers using a for loop. Then print only odd numbers using a while loop.
// let num = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i < num.length; i++){
//     if(num[i]%2!=0) console.log(num[i]);
// }
// let i = 0;
// while(i < num.length){
//     if(num[i]%2==0) console.log(num[i]);
//     i++;
// }

// // ques: 
// let marks = [90, 45, 78, 32, 56, 88, 29];
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] === 45) continue;
//     if (marks[i] >= 35) console.log("pass");
//     else if (marks[i] < 35) console.log("fail");
// }

// // ques:
// let num, sum = 0;
// let numbers = [];
// while(num !== "stop"){
//     num = prompt("enter number : ");
//     if(num === "stop") break;
//     else{
//         numbers.push(Number(num));
//         sum += Number(num);
//     }
// }
// console.log(numbers);
// console.log(sum);

// // Question 4: Counting Positive Numbers.
// let numbers = [-2, 0, 3, 5, -8, 9, 12];
// function countPositive(arr){
//     let count = 0;
//     arr.forEach((val) => {
//         if(val>0) count++;
//     });
//     return count;
// }
// console.log(`total positive numbers : ${countPositive(numbers)}`);


// // Question 5 — Check if a fruit is available
// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// let fruitName = prompt("enter name of fruit : ").toLowerCase();
// if(fruits.includes(fruitName)) console.log("Available");
// else console.log("Not Available");


// // Question 6 — Double every number in an array
// let nums = [2, 5, 7, 10];
// function doubleNumbers(arr){
//     return arr.map((val)=>{
//         return val * 2;
//     })
// }
// console.log(doubleNumbers(nums));

// // Question 7 — Sum of Even Numbers
// let nums = [2, 5, 8, 11, 14, 17, 20];
// function sumEvenNumbers(arr) {
//     return arr
//         .filter(val => val % 2 === 0)
//         .reduce((accum, val) => accum + val, 0);

// }
// console.log(sumEvenNumbers(nums));

// // Question 8 — Find Prime Numbers
// let nums = [2, 5, 8, 11, 14, 17, 20, 0];
// function findPrime(arr) {
//     let prime = [];
//     arr.forEach((val) => {
//         if (val > 1) {
//             let count = 0;
//             for (let i = 0; i <= val; i++) {
//                 if (val % i == 0) count++;
//             }
//             if (count === 2) prime.push(val);
//         }
//     })
//     return prime;
// }
// console.log(findPrime(nums));

// // Question 9 — Click Counter (Using Closures) 
// function clickCounter(){
//     let countClicks = 0;
//     return function(){
//         countClicks++;
//         console.log(`Clicked ${countClicks} times.`);
//     }
// }

// const counter = clickCounter();
// counter(); // Clicked 1 times
// counter(); // Clicked 2 times
// counter(); // Clicked 3 times

// // Question 10 — Limit Access (Using Closures) 🔒
// function limitAccess(limit) {
//     let count = 0;
//     return function () {
//         if (count < limit) {
//             console.log("Access Granted");
//             count++;
//         }
//         else {
//             console.log("Access Declined");
//         }
//     }
// }
// const limited = limitAccess(3);
// limited(); // Access granted
// limited(); // Access granted
// limited(); // Access granted
// limited(); // Access declined

// // Question 11 — Bank Account (Using Closures)
// function createBankAccount() {
//     let initialBalance = 1000;
//     return function (action, amount) {
//         if (action === "check") return console.log(`Current balance : ${initialBalance}.`);
//         else if (action === "deposit") {
//             initialBalance += amount;
//             return console.log(`Deposited ${amount}, New Balance ${initialBalance}.`);
//         } else if (initialBalance < amount && action === "withdraw") {
//             return console.log("Insufficient balance.");
//         }
//         else if (action === "withdraw") {
//             initialBalance -= amount;
//             return console.log(`Withdrawn ${amount}, New Balance ${initialBalance}.`);
//         }
//     }
// }
// const account = createBankAccount();
// account("check");      // Current balance: ₹1000
// account("deposit", 500);  // Deposited ₹500. New balance: ₹1500
// account("withdraw", 200); // Withdrawn ₹200. New balance: ₹1300
// account("withdraw", 1500); // Insufficient balance.
// account("check");      // Current balance: ₹1300

// //  Question 12 — Calculate Average Marks & Print Result
// let marks = [80, 70, 60, 90, 50];
// function calculateAverage(marks){
//     let avg = marks.reduce((accu, val)=> accu + val,0)/ marks.length;
//     // let avg = tmarks/marks.length;
//     if(avg >= 60)return console.log
//     (
//         `Marks: ${avg}\nFirst Division`
//     );

//     else if(avg >= 45 && avg < 60) return console.log(
//         `Marks: ${avg}\nSecond Division`
//     );

//     else if (avg < 45) return console.log(
//         `Marks: ${avg}\nFail`
//     );
// }
// console.log(calculateAverage(marks));

