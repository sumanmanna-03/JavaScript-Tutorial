// console.log("h")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")

function sayName(){
    console.log("h")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}

// sayName()

// function addTwoNumber(number1, number2){
//       console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    //   let result = number1 + number2
    //   return result
    
      //   console.log("Hitesh");// return ka bad koi bhi code kaam nahi karta

      return number1 + number2
}

// addTwoNumber(3, "4")
// addTwoNumber(3, "a")
const result = addTwoNumber(3, 5)

// console.log("Ressult: ", result);


// function loginuserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a user name");
//         return
//     }
//      return `${username} just logged in`
// }
function loginuserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
     return `${username} just logged in`
}


console.log(loginuserMessage("Hitesh"))
// console.log(loginuserMessage())