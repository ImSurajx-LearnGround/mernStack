// 1. Basic Operators 

// a. Create two number a = 10, b = 3 & perform and log : a + b, a - b, a / b, a % b.
const a = 10, b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// b. write : let x = 5; x = x+3;
let x = 5;
x += 3;
x -= 3;
x *= 3;
x /= 3;
x %= 3;

// c. let count = 5, use count++, and log value before and after. repeat for count.
let count = 5;
console.log(count++);
console.log(++count);
console.log(count--);
console.log(--count);


// d. compare two values: 5 == "5" and 5 === "5"
console.log(5=="5"); // true
console.log(5==="5"); // false

// e. check if 10 is greater than 5, less than 20 and equal to 10.
console.log(10>5 && 10 < 20 && 10 === 10); // true

// f. try logical AND and OR
console.log(true && false); // false
console.log(true || false); // true
console.log(!(true)); // false

// g. predict the result of:
console.log(5>3 && 10>8); // true
console.log(5>3 || 10<8); // true

// h. bitwise(light intro), evaluate 5 & 1 and 5 | 1, write result and your observation (no deep explaination needed now)
console.log(5 & 1); // Bitwise AND (&): Returns 1 if both corresponding bits are 1; otherwise, it returns 0.
console.log(5 | 1); // Bitwise OR (|): Returns 1 if at least one of the corresponding bits is 1; otherwise, it returns 0.

// 2. Variable Hoisting in JavaScript

// a. Predict output of:
    console.log(a); // undefined
    var a = 10;

// b. Predict output of
console.log(b); // reference error becuase of TDZ
let b = 10;

// c. Predict output of
test();
function test(){
    console.log("Hello"); // Hello
}

// d. try waf expression before initialization and call it:
hello();
var hello = function(){console.log("Hi");} // error

// e. write one sentence, what get hoisted? what does not get hoisted fully?
// function declaration get fully hoisted but function expersion is partily hoisted ust the variable name is moved, and its assigned value/definition stays in place until the line runs.

Conditional Opeerators (if, else, else-if, ternary, switch);

// a. take input using prompt for age, if age > 18 -> Adult else log Minor
let age = prompt("enter age : ");
if(+age >= 18) console.log("Adult");
if(+age < 18) console.log("Minor");


// b. wap, if marks >= 90 -> A grade, marks >= 75 B, marks >= 50 C, else fail
let marks = prompt("enter your marks : ");
marks = +marks;
if(marks >= 90) console.log("A");
else if(marks >= 75 ) console.log("B");
else if(marks >= 50) console.log("C");
else console.log("fail");

// c. Create a variable city = "Bhopal", if city is "Bhopal" -> log MP, else if city is "Delhi" -> log "Capital" else -> log "Unknown City";
let city = prompt("enter city : ");
if(city === "Bhopal") console.log("MP");
else if(city === "Delhi") console.log("Capital");
else console.log("Unknown City");

// d. Use ternary operator let score = 40; if score > 35 "Pass" else "Fail" using ternary
score = 40;
score > 35? console.log("Pass") : console.log("Fail");
;

// e. conver this if-else into a ternary
let temperature = 25;
temperature > 30 ? console.log("HOT"): console.log("Pleasant");


// f. write a switch case: take day number 1 to 7, print the day name, default case is invalid day
let day = prompt("enter day no : ");
day = +day;
switch (day) {
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("Tue");
        break;
    case 3:
        console.log("Wed");
        break;
    case 4:
        console.log("Thus");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
        break;

    default:
        console.log("Invalid Day");
        break;
}

// // g. using logical operator in condition if age > 18 and country == "India" "eligible for vote" else "not eligible"
let age = 18, country = "India";
if(age >= 18 && country === "India") console.log("eligible for vote");
else console.log("not eligible");




