let count = document.getElementById("count");
let incbtn = document.getElementById("inc");
let decbtn = document.getElementById("dec");
let value = 0;

incbtn.addEventListener("click", ()=>{
    value++;
    count.textContent = `${value}`;
});
decbtn.addEventListener("click", ()=>{
    value--;
    count.textContent = `${value}`;
});