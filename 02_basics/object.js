//Singleton

//Object literals
// object.create 
const jsuser = {
    name: "Suman",
    "full name": "Suman Manna",
    age: 18,
    location: "jaipur",
    email:"sumanmannna@gmail.com",
    isLoggedIn: false,
    lastlloggedIn: ["Monday", "Saturday"]
}

console.log(jsuser.email); //accessing a object

// console.log(jsuser["email"]);
// console.log(jsuser.name);
// console.log(jsuser["full name"])


// jsuser.email = "babaukumarmanna.com"
// Object.freeze(jsuser) // freeze the value
// jsuser.email = "sahebkumarmanna@@gmail.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsuser.greeting())
