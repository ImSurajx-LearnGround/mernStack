// declaration & initialization

// : var
// when variable declare with the help of var it was added into window
// function scoped hota hain
// aap firse declare kar sakte ho same name se or error nahi aayega
var a = 12; // declaration
console.log(a);
var a = 13; // declare & initialize
console.log(a);


// : let
// better version of var, app firse declare nahi kar sakte same name se.
// never will be added in window
let b = 13;

// : const
// value of const never change in whole script & updation isn't allowed.
const name = "Suraj Kumar";


// : scope (global, block, functional)
// global : used anywhere in code, outside of curlly braces.
var a = 12;

// block : used only inside that particular block 
{
    // but var doesn't respect the block & used outside of block
    var a = 15;
    // let respect the block & used only inside block
    let x = 30;
}

// function : only acessable inside function
function name() {
    var y = 10;
    let x = 50;
}


// reassignment(updation), redeclaration
// redeclaration possible with var not with let.
var a = 12;
a = 32; // updation
var a = 112;

// temporal dead zone : you know the variable exist but can't acess that value, the area before the variable declaration
// only exist for let or const, not in var
// : js knows the future.
console.log(x);
let x = 12;

// hoisting impact per type
// when we create a variable in js, uske declare part upad chala jata hain initilize part nichea chala jata hain;
// var -> hoist -> unefined
// const -> hoist -> reference error
// let -> hoist -> reference error
console.log(a);
var a = 12;
var a = undefined;
a = 12;