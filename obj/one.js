// Singleton

// Object literals
// Object.create

// declare a symbol

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",  
    "full name": "Suman Manna",
    [mySym]: "mykey1",
    age : 18,
    location: "jaipur",
    email: "sumanmanna048@gmail.com",
    isloggedin: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(jsUser);

jsUser.email = "babukumarmanna1@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "saheb@gmail.com"
// console.log(jsUser);



console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo)

// value defiened with dot(.)