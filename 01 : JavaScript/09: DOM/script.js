// DOM Pillars
// section, manipulation, styling manipulation, event listeners

// selecting elements
document.getElementById();
document.getElementsByClassName(); 
document.querySelector();
document.querySelectorAll();

dom manipulation

// text manipulation
let h1 = document.querySelector('h1');
console.log(h1);
h1.innerText = "change text";
h1.textContent = "Hello, Suraj Kese Ho."; // change text
h1.innerHTML = "<i>Hey<i>"; // change inner html.

// attribute manipulation.
let a = document.querySelector('a');
console.log(a);
a.href = "https://github.com/imsurajx";
a.setAttribute("href", "https://www.google.com");
console.log(a.getAttribute("href"));
let image = document.querySelector('img');
console.dir(image);
image.src = "https://images.unsplash.com/photo-1763044937746-489a96193362?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.setAttribute("src", "https://images.unsplash.com/photo-1763044937746-489a96193362?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
image.removeAttribute("src");


// create element using dom
// create element -> then use append/prepend karo jaha bhi element chaiye waha
// prepend -> first element, append -> last element
let h1 = document.createElement("h1");
h1.textContent = "Hello Suraj";
document.body.prepend(h1);
h1.remove();
let div = document.querySelector("div");
div.appendChild(h1);
console.log(div);

// style manipulation
h1 = document.querySelector('h1');
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.fontFamily = "Gilroy";
h1.classList.add("hulu"); // using class
h1.classList.remove("hulu"); // remove class
h1.classList.toggle("hulu"); // ager class laga hain to hata dega, ager hata hain to laga dega

// event listener
let h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
    console.log('hello');
});

// T1: select the heading of a page by ID and change its text to "Welcome to Sheryians";
let heading = document.getElementById("heading");
heading.innerText = "Welcome to Sheryians!";


// T2 : select all <li> elements and print their text using a loop
let list = document.querySelectorAll("li");
console.dir(list);
list.forEach((val)=> console.log(val.innerText));

// T3 : select a paragraph and replace its content with
// <b> Updated <b> by JavaScript
let para = document.querySelector("p");
para.innerHTML = "<b> Updated <b> by JavaScript";
console.log(para);

// T4 : select a link and update its href to point to https://sheryians.com.
let a = document.querySelector('a');
a.setAttribute("href", "https://sheryians.com");

// T5: add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title", "some info");
console.log(div.getAttribute("title"));

// T6 : remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// T7 : create a new list item <li>New Task<li> and add it to the end of a ol
let ul = document.querySelector("ol");
let li = document.createElement('li');
li.textContent = "New Task";
ul.appendChild(li);
console.log(ul);

// T8 : create a new image element with a placeholder source and add it at the top of div
let image = document.createElement('img');
image.setAttribute("src", "https://images.unsplash.com/photo-1763044937746-489a96193362?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
document.querySelector("div").prepend(image);

// T9 : select the first item in a list and delete it from the DOM.
let list = document.querySelector('ol');
let li = document.querySelector('li');
list.removeChild(li);
console.log(list);

// T10 : add highlight color at even item of the list.
let list = document.querySelectorAll('ol li:nth-child(2n)');
console.log(list);
list.forEach((val)=> val.classList.add('hulu'));    

T11: set the font size of all <p> elements to 18px using style.
let para = document.querySelectorAll('p');
para.forEach((val)=> val.style.fontSize = "18px");


