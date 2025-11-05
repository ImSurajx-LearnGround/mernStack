// loops : repeating anything using conditions is knows as loop
// for, while, do-while, forin, forof, foreach

// for loop : from, to, how.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// while loop : from, stop, how
let i = 1;
while(i<=100){
    console.log(i);
    i++;
}

// do while : atleast run one time.
let i = 1;
do{
    console.log(i);
    i++;
}
while(i <= 100);

// break: used to break the loop
for(let i = 1; i <= 10; i++){
    if(i%2===0){
        console.log(i);
        break;
    }
}
// continue: if condition match it will skip that ittration.
for(let i = 1; i <= 10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}

// Q1. Print number from 1 to 10 using a for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Q2. Print number from 10 to 1 using a while lopp
let i = 10;
while( i >= 1){
    console.log(i);
    i--;
}

// Q3. Print even numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++){
    if(i%2==0) console.log(i);
}

// Q4. Print odd number from 1 to 15 using while loop
let i = 1;
while( i <= 15){
    if(i%2!=0) console.log(i);
    i--;
}

// Q5. Print the multiplication table of 5 (i.e, 5 x 1 = 5);
for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${i*5}`);
}

// Q6. Find the sum of numbers from 1 to 100 using a loop.
let a = 0;
for(let i = 1; i <= 100; i++){
    a += i;
}
console.log(a);

// Q7. Print all numbers between 1 to 50 that are divisible by 3
for(let i = 1; i <= 50; i++){
    if (i%3===0) console.log(i);
}


// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
const userNumber = prompt("enter a number : ");
for(let i = 1; i <= +userNumber; i++){
    if (i%2===0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
}


// Q9. Count how many number between 1 to 100 are divisible by both 3 and 5
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%3===0 && i%5===0) count++;
}
console.log(count);


// Q10. Stop at First Multiple of 7
for(let i = 1; i <= 100; i++){
    console.log(i);
    if(i%7===0) break;
}

// Q11. Skip the Multiple of 3.
for(let i = 1; i <= 20; i++){
    if(i%3===0) continue;
    console.log(i);
}

//  Q12. Print first 5 Odd Numbers Only
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%2===0) continue;
    console.log(i);
    count++;
    if(count === 5) break;
}

// Ques: Print Yes 5 times
for (let i = 1; i <= 5; i++){
    console.log("yes");
}


let age = prompt("age batao: ");
if (age === null) {
    console.error("you cancelled it");
} else {
    if (age.trim() === "") {
        console.error("bhai dhang se likh...");
    } else {
        age = +(age.trim());
        if (isNaN(age)) {
            console.error("bhai please number dede.");
        } else {
            console.log("confirm ye number hain");

        }
    }
}

// ques: count how many numbers between 1 and 15 are greater than 8, loop and count conditionaly
let count = 0;
for(let i = 1; i <= 15; i++){
    if(i>8) count++;
}
console.log(count);

// ask user for password and print access status, hardcoded correct password, compare with user input.
const password = "Sk@123";
const userEnter = prompt("enter password : ");
if (userEnter === null) {
    console.log("no input");
} else if (userEnter === password) {
    console.log("Access Granted.");
} else {
    console.log("Access Declined");
}

allow user for words until they type "stop", count how many times they typed "yes" loop until "stop" is typed. Count yes.
let breaker = null;
let count = 0;
while(breaker !== "stop"){
    breaker = prompt("enter string : ");
    if(breaker === "yes") count++;
}
console.log(`the yes was typed : ${count} times.`);

// keep asking number until user enters an even number, use while loop, stop only if input is even
let num = 1;
while(num%2!==0){
    num = +prompt("enter num : ");
    if (num%2==0) console.log("the number is even");   
}


// ATM simulator- allow 3 withdrawals, start with 1000 balance. ask withdrawal amount 3 times if enough balance -> deducted else -> "insufficient balance" 
let startBalance = 1000;
let totalWithdrawl = 3;
while (totalWithdrawl > 0) {
    let amount = prompt("enter withdrawl amount: ");
    if (amount === null) {
        console.log("no amount enter, retry")
    }
    else if (+amount <= startBalance) {
        startBalance -= +amount;
        console.log("withdrwal sucessfull");
        totalWithdrawl--;
    } else {
        console.log(`Insufficient balance, enter amount which is less than or equal to ${startBalance}`);
        totalWithdrawl--;
    }

}

take age, as a input from user & output it's age
let age = prompt("enter age : ");
age = +age;

if (isNaN(age) || age <= 0) {
    console.log("enter a valid input");
} else {
    console.log(`your age is ${age}`);
    if (age > 18) console.log("you can vote.");
    else console.log("you can't vote.");

}


// Level 2 : Slightly tougher but logical

// Q: allow only 3 attempts to enter correct password, if user gets it early, stop, if not "Account locked"
let storePassword = "hellobhai";
let count = 0;
for (let i = 0; i < 3; i++) {
    let password = prompt("enter password : ");
    if (storePassword === password) {
        console.log("Access Granted");
        break;
    } else {
        console.warn("try again.");
        count++;
    }
}
if(count === 3) console.log("Account locked due to multiple failed attempts");

// Q: ask user for words until they type "stop". count how many times they typed "yes".
let count = 0, userInput = null;
while ("stop" != userInput) {
    userInput = prompt("enter word: ");
    if (userInput === "yes") count++;
}
if ("stop" === userInput) console.log(`yes was typed ${count} times.`);

// Q: print the number from 1 to 50 which is divisible by 7.
for(let i = 1; i <= 50; i++){
    if(i%7==0) console.log(i);
}

// Q: sum of all odd numbers from 1 to 30, add only odd numbers. print final sum.
let sum = 0;
for(let i = 1; i <= 30; i++) if(i%2!=0) sum+=i;
console.log(`sum is : ${sum}`);

// Q: keep asking number until user enters an even number use while loop, stop only if input is even.
let num = +prompt("enter a number: ");
while(num%2!==0){
    num = +prompt("enter a number");
}

// Q: print number between two user inputs, input start and end using prompt() -> print all between
let start = +prompt("enter start point: ");
let end = +prompt("enter end point: ");
for(let i = start+1; i <= end-1; i++){
    console.log(i); 
}

// Q: Print only first 3 odd numbers from 1 to 20 use loop. stop with break after 3 odd prints.
let count = 1;
for(let i = 1; i <= 20; i++){
    if(i%2!=0){
        if(count <= 3){
            console.log(i);
            count++;
        } else{
            break;
        }
    }
}

// Q: ask user 5 numbers, count how many are positive use loop + condition + counter.
let count = 0;
for(let i = 0; i < 5; i++ ){
    let num = +prompt("enter number");
    if(num>0){
        count++;
    }
}
console.log(count);


// Q: ATM Simulator - allow 3 withdrawals start with 1000 balance ask withdrawal amount 3 times. if enough balance deduct else print , "insufficient balance";
let withdrawalCount = 0;
let balance = 1000;
while(withdrawalCount < 3){
    let amount = +prompt("enter amount : ");
    if(amount > balance && amount === 0 ){
        console.log(`insufficient fund`);
        withdrawalCount++;
    } else{
        balance -= amount;
        console.log(`withdrawal amount : ${amount} & remaining balance is : ${balance}`);
        withdrawalCount++;
    }
}

// - Recursion in JavaScript : function calling itself.
function abcd(n){
    if(n===0) return;
    console.log(n);
    abcd(n-1);
}
abcd(5);


