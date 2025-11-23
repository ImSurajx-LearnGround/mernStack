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

// event listener : action -> <- reaction

// event mean there are some action
let h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
    console.log('hello');
});
element.addEventListener("eventname", function(){});
element.removeEventLister("eventname", function(){}); // pass same function when you add eventlistner to remove event.

input event
let inputBox = document.querySelector('input');
inputBox.addEventListener("input", function(evt){ // here evt get details
    if(evt.data !== null) console.log(evt.data);
});

change event tab chalta hain jab aapka koi input select ya textarea mea koi change hojaye
let select = document.querySelector('select');
let h3 = document.querySelector('h3');
select.addEventListener("change", (evt) => {
    console.log(evt.target.value);
    h3.textContent = `${evt.target.value} device is selected.`;
})

whatever we will type it must be on the screen;
document.addEventListener("keypress", (evt)=>{
    if(evt.key === ' ') document.querySelector('h1').textContent = "space";
    else document.querySelector('h1').textContent = evt.key;
});

let btn = document.querySelector("#btn");
let fileInput = document.querySelector('input');
btn.addEventListener("click",()=>{
    fileInput.click();
});
fileInput.addEventListener("change", (evt)=>{
    const file = evt.target.files[0];
    if(file) btn.textContent = file.name;
})

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let main = document.querySelector("#main");
form.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);
    
    inputs.forEach((val)=>{
        if(inputs.type !== "submit") inputs.value = "";
    });
    
});

let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", ()=>{
    abcd.style.background = "red";
})
abcd.addEventListener("mouseout", ()=>{
    abcd.style.background = "yellow";
})

let abcd = document.querySelector('#abcd');

window.addEventListener("mousemove", (evt)=>{
    abcd.style.top = (evt.clientX - 100 )+ "px" ;
    abcd.style.left = (evt.clientY - 100) + "px";
    console.log(evt.clientX, evt.clientY);
})

let abcd = document.querySelector("#abcd");
abcd.addEventListener("click", (evt)=>{
    console.log(evt); // evt is a object here
})

event bubbling : jispe event aayega ager uspar linstener nahi  hua to humara event uske parent par listner dhundhega aur aisa karte karte upar ki traf move karega.
let ul = document.querySelector('ul');
ul.addEventListener('click', (evt)=>{
    evt.target.classList.toggle("lt");
});

// jab bhi aap click karte ho ya koi bhi event raise karte ho to aapka jo event flow do phases mein chalta hain.
// phase 1: event top level element se neechea ki taraf aayega (capture phase) , ture -> to enable capta phase
// phase 2: event raised element se parent ki taraf jaayega (bubbling phase)
// aur pehle phase i hote hain

let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", (evt)=>{
    let left = 20 - input.value.length;
    if(left < 0) {
        span.textContent = left;
        span.style.color = "red";
    } else{
        span.textContent = left;
        span.style.color = "black";
    }
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


