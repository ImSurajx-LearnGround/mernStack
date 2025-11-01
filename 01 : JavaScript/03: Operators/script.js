//  Arithmetic, comparision, logical, assignment, unary, ternary

// arithmetic: + - / * % **
console.log(12 + "12");
console.log("12" - 11);
console.log(12 / 11);
console.log(12 * 11);
console.log(12 % 11);
console.log(12 ** 11);

// comparision: ==, ===, !=, !== >=, <=, >, <
console.log(12 == "12");
console.log("12" === 11);
console.log(12 != "12");
console.log("12" !== 11);
console.log(12 >= 11);
console.log(12 <= 11);
console.log(12 > 11);
console.log(12 < 11);

// assignment:  =, +=, -=, *=, /=, %=
var a = 12;
console.log(a);
a += 2;
console.log(a);
a -= 3;
console.log(a);
a *= 4;
console.log(a);
a %= 5;
console.log(a);
a /= 5;
console.log(a);
a **= 5;
console.log(a);


// logical: && || !
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || flase);
console.log(true || !(true));
console.log(true && !(true));


// unary operator: + - ! typeof ++
+"10" // convert string into number.

var a = 12;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// ternary operator: condition? : if true : if false;
12 > 13 ? console.log(true) : console.log(false);

// instanceof : only work with reference values & we use typeof only with primitative values
console.log(typeof (null));
a = [];
console.log(a instanceof Array); // check the identity of the element


