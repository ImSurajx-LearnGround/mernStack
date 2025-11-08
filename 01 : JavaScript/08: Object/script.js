// understandd what are objects in javascript ['key-value pair];
let obj = {
    key : value,
    name : "Suraj Kumar",
    age : 21,
    email : "surajxcode@gmail.com",
};
console.log(obj);

let obj2 = new Object(); 


// - creating objects, accessing properties, deleting peroperties and nested objects;
let objx = {
    name : "harsh",
    age : 27,
    email : "harsh@mail.com",
    social : { // nested object
        instagram : "harsh",
        facebook : "harsh",
    },
}
obj.name; // accessing
obj['name']; // accessing
delete obj.name;