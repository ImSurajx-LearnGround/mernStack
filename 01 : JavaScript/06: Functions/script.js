// function:
function name() {
    console.log("Happy New Year.");
}

// function expression: when we save a function into variable
let func = function name(){
    console.log("Good to know");
}

// fat arrow function
let fnc  = () => {
    console.log("Hi");
}
fnc();

// function with parameters & arguments
function print(activity){
    console.log(`${activity}`);
}
print("dance");
print("run");
print("workout");

// default, rest, and spread parameters
function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);
}
add();

function abcd(...val){ // jab arguments kai saare ho to humein untne hi parameter bananea padege, isea  bachne ke liye hum rest ka usee karte hain ager ... function ke parameter space mein lage to wo rest operator hain
    console.log(val);
}
abcd(1,2,3,4,5,6,7,8,9,10);

// return :
function xyz(){
    return 12;
}
let x = xyz();
console.log(x);

// firstClass Function :  aise functions jinko values ki trah treat kar sakte hain.
let x = function xyz(val){
    val();
}

x(function(){
    console.log("Hey");

});

// higherOrderFunction woo function hota hain jo ki return kare function ya fir accept kare ek fnc apne parameter mein
function abcd(val){
    return function(){
        console.log(val());

    }
}

abcd(function(){
    return "Hey";
})();

// pure vs impure functions: aisa function jo ki baahar ki value ko na badle is pure & it's reverse is impure.
let a = 12;
function abcd(){console.log(a);}
function abci(){
    a++;
    console.log(a);
}
abcd();
abci();

// closures -> ek function jo return kare ek aur funtion aurr hone wala function hamesha use karega parnet function ka koi variable
function ancd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}
ancd();

// lexical scopping: nested function.

// IIFE : instantly invoked function.
(function (){
})();

// hoisitng in function
abcd();
function abcd(){
    console.log("Hi, I'm Suraj.");

}

func();
let func = function(){
    console.log("Hi");
}   

// Q1: what's the difference between function declaration and expression in terms of hoisitng
function statement -  hoist hoti hain
function expression - hoist nahi hote

// Q2:
greet();
function greet(){
    console.log("Hello!");
}

// Q3: Convert function into arrow function.
let multiply = (a,b) => {
    return a * b;
};
console.log(multiply(3,4));

// Q4: identify parameters & arguments
function welcome(name){ // here name is a parameter.
    console.log(name);
}
welcome("Harsh"); // here harsh is an arguments which is passing into function.

// Q5. how many parametere does the following function have & how many arguments pass.
function demo(a,b,c){} // 3 parameter pass
demo(1,2); // 2 arguments pass

// Q6. Predict the output
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi(); // output: Hi, Guest

// Q7. what does the ... operator mean in parameters
function abcd(...val){ // rest operator
    console.log(val);
}
abcd(1,2,3,4,5,6);


// Q8. use rest parameter to accept any number of scores return the total
function totalScore(...array){
    let sum = 0;
    for(let i = 0; i < array.length; i++) sum += array[i];
    return sum;
}
console.log(totalScore(1,2,3,4,5,6,7,8,9,10));


// Q9. fix the function with early return.
function checkAge(age) {
    if (age < 18) return "too young";
    return "allowed";
}

// Q10. what the following function return.
function f(){
    return;
}
console.log(f()); // undefined

// Q11. what does it mean when we say, "function are first-class citizens"?
// when we treat a function like values.

// Q12. can you assign a function to a variable and then call it? show how.
let a = function (){

}
a();

// Q13. pass a function into another function execute if inside.
function abnc(val){
    return val();
}
abnc(
    function(){
        console.log("Hello Argument Function.");
        
    }
);

// Q14. What is a higher-order function?
// a function which accept parameters as function & also take arguments as function.
function abcd(){
    return function(){
        val();
    }
}

function xyz(val){

}

xyz(function(){});

//  Q15. identify higher order function.
[1,2,3].map(function(x){ // map is a hof
    return x * 2;
});

//  Q16. pure vs impure.
let total = 0; 
function addToTotal(num){
    total += num; // impure because outside value is changing, if outside value doesn't change that mean it's a pure function.
}

Q17. convert the above function into a pure function
let total = 0;
function addToTotal(num){
    let temp = total;
    temp += num; // it's a pure function
}

// Q18. what is closure? when is it created? : a function which return antoher funtion & use values of parent function.
function abcd(){
    let val = 0;
    return function(){
        console.log(val);
    }
}

// Q19. Predict the output : ek function jo apne outer variables ko “yaad” rakhta hai,chahe outer function khatam hi kyu na ho gaya ho.
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

// Q20. Convert this normal funtion into an IIFE : 
(function init(){
    console.log("Initialized");  
})();

Q21. use of IIFE
use for called a function instantly
also help to create private scope

// Q22. what will be the output here and why?
greet();
var greet = function(){ // error becuase of hositing the first value of greet is undefined
    console.log("Hi");
};

// Q23. what will be the output here and why?
greet();
function greet(){
    console.log("Hi"); // give greet because here this function is a global scope.
}


// PRACTICE

// Q1. BMI function
function bmi(weight, height){
    return weight /(height*height)
}
console.log((bmi(69,1.7)).toFixed());

// Q2. Create a reusable discount calculator (HOF)
function discountCal(discount){
    return function(price){
        return price - (price * (discount/100));
    }
}
let discounter = discountCal(10);
console.log(discounter(200));


// Q3. build a couter using closure
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

// Q4. Create a pure function to transform a value
function double(val){
    return 2 * val ;
}
console.log(double(5));

// Q5. use IIFES to isolate variables
(function(){
    const password = 'seceret password';
    console.log(password);
})();
console.log(password);


