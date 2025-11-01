// data types

// primitives -> aisi saari values jinko copy karne pad hamea ek real copy mil jaye
// string, number, boolean, null, undefined, symbol. bigInt

// strings;
// '' - single quotes;
// "" - double quotes;
// `` - backticks;

// 12 - number;

// true, false - boolean;

// null : ka matlab hain aapne koi value nahi;
let selectedStudent = null;

// undefined :  ka matlab ki aapne ek variable banaya aur usey value nahi di jo value by default mili woo undefined hain.
let a; // undefined

// symbole -> unique immutable value create karta hain;
let u1 = Symbol("uid");
let u2 = Symbol("uid");

// BigInt -> to store larger number
let x = 9007199254740991n;

// reference -> inko copy karne par real copy nahi milega instead, refernce milega parent ka
// arrays, objects, funtions

// arrays
let arr = [1,2,3];


// object
let obj = {
    key : value,
    key : value,
};

// function
function fun(){ 
    let y = 10;
};

// DYNAMIC TYPING : change the value on the go.
let m = 12;
m = true;
m = [];
m = obj = {

};

// typeof : use to check datatype.
// typeof(null) = object
// typeof(NaN) = number


// type coercion : concept hain jismein aapka ek type automaticlly convert ho jayega.
"5" + 1; // 51
"5" - 1; // 4

// truthy bs falsy values
// 0, flase, "", null, undefined, NaN, documentall; -> false

