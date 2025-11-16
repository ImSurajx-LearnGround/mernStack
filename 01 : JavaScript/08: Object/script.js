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
obj['name']; // accessing - if key name have space for example 'name is'
delete obj.name;

// nested object
let role = "admin";
const user = {
    name : "Surja Kumar",
    address : {
        city : "Delhi",
        pin : 462001,
        location : {
            lat : 23.2,
            lng : 77.4,
        }
    },
    email : "surajxcode@gmail.com",
    [role] : "harsh"
};

console.log(user.address.location.lng);
// destructruing obj
let {lat, lng} = user.address.location;
console.log(lat, lng);


for(let key in user){
    console.log(key, user[key]);   
}
Object.keys(user); // objects ke key ka array ban jaata hain
Object.entries(user); // put object inside array of array


// copying object
let user2 = {...user}; // if you copy object, through spread operator, & there are some nested object, then the nested object will pass by reference so , don't use it, instead use JSON - stringfy, or parse.
console.log(user2);
user3 = Object.assign({price : Infinity, }, user); // second way of copying object
console.log(user3);

// deep clone
user2 = JSON.parse(JSON.stringify(user)); // stringfy karne se object string ban jaata hain & uske baad fir parse karte hain to woo firse object ban jaat hain
user2.address.city = "Indore";
console.log(user.address.city);
console.log(user2.address.city);


// optional chaining
console.log(user?.address?.city); // if avaibles then access else not.

// computed properties : put variable inside object & define it outside of object.


// ques: create an object for a student with name, age, and, isEnrroled.
let student = {
    name : "Suraj Kumar",
    age : 21,
    isEnrolled : true,
}

// ques : can an object key be a number or boolean? try this -> yes
const obj = {
    true: "yes",
    42: "answer",
};
console.log(obj[true]);

// ques : access the value of "first-name" from this object
const xuser = {
    "first-name" : "Suraj"
}
console.log(xuser["first-name"]);

// ques : given a dynamic key, let key = "age", how will you access user[key]
let key = "age";
const yuser = {
    age : 20,
};
console.log(yuser[key]);

// ques: from the object below print the latitue
const locations = {
    city : "Delhi",
    coordinates : {
        lat: 23.2,
        lng: 77.4,
    },
}
console.log(locations.coordinates.lat);
console.log(locations?.coordinates?.lat); // access with confirmation

// ques : destructure the city and lat from the location object above.
let {city} = locations;
let {lat} = locations.coordinates;

// ques : destructure the key "first-name" as a variable called varible called firstName
let {"first-name": firstName} = user;

// ques : use for-in to log all keys in this object
const course = {
    title: "JavaScript",
    duration: "4 weeks",
}
for(let key in course){
    console.log(key);
    
}

// ques : Use Object.entries() to print all key value pair as it it.
Object.entries(course).forEach(()=>{
    console.log(val[0]+ ": "+ val[1]);    
});

// copy object using spread
const original = {
    a : 1,
    b : 2,
}
const copy = {...original};
console.log(copy);

// copy object using parse & sringfy, deep clone
const obj1 = {
    info : {
        score : 80,
    }
}
let newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 1; // chainging score won't affect orginal object

// ques : rewrite this safely using optional chainnig
const person = {
};
console.log(person?.profile?.name);

// ques : use a varibale to dynamically assign a property
const key = 'role';
let obj = {
    name : "harsh",
    [key] : "admin",
};

// ques : create an object person with keys name. age, and city, and print each key's value
let person = {
    name : "Suraj Kumar",
    age : 21,
    city : "New Delhi"
}
for(let key in person){
    console.log(key , person[key]);
    
}

// ques : use setTimeout() to log "Time's up!" after 2 seconds.
setTimeout(()=>{
    console.log("Time's up!");
    
},2000)

// create an object user and test the behavior of object. freeze() and object.seal() by adding/changing keys.
// freeze(): “Bilkul lock — na add, na delete, na change.”
let user1 = { name: "Suraj", age: 27 };

Object.freeze(user1);

user1.name = "Changed";
user1.city = "Delhi";

console.log(user1); // no changes

// seal(): “Half lock — change allowed, add/delete not allowed.”
let user1 = { name: "Suraj", age: 27 };

Object.freeze(user1);

user1.name = "Changed";
user1.city = "Delhi";

console.log(user1); // no changes

// create a nested object (user->address->city) and access the city name inside it.
let obj = {
    user : 
    {
    name: "Suraj",
    age : 27,
    address :
    {
        city : `new delhi`,
        pincode : 110091,
    }
}
}
let {city} = obj.user.address;
console.log(city);

