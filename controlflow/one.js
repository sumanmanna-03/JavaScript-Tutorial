// if statement

const temperature = 41;

// if(temperature < 50){
//     console.log("executed");
// }
// else{     // else is A conditional code
//     console.log("Not Executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power:${power}`)
// }

// console.log(`User power: ${power}`)



// SHORTHAND NOTATION

const balance = 1000

// if(balance >500) console.log("test"), console.log("test2") // don't write code like this--- this is unreadable code

// if(balance > 500){
//     console.log("less than 500");
// }
//  if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 1100){
//     console.log("less than 1200");
// }
// else{
//     console.log("less than 750");
// }


const userLoggedIn = true
const debitCard = true
const loggedInEmail = true
const loggedInFromEmail = true


if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}
