// # primitive

//7 types : String, Number, Boolean, null, undefiened, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

//Symbol declare

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId)

//bigInt

const bigNumber = 65646546556564656n
console.log(bigNumber)

// # reference or Non-primitive



//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
console.log(heros)

let myObj = {
    namme : "Suman",
    age : 22
}
console.log(myObj)

const myFunction = function(){
    console.log("Hello World")
}
console.log(myFunction)
 

console.log(typeof bigNumber)  // bignit
console.log(typeof myFunction) //function
console.log(null) // object

//Stack(primitive) Heap (Non primitive)
let youTubename = "suman mNNa"

let anothername = youTubename
anothername = "sumakdkd"

console.log(youTubename)
console.log(anothername)

let consider = {
    name: "Suman Mnan",
    upi: "suamn@okaxis"
}

let consider2 = consider

consider2.upi = "vjb@okaxis"

console.log(consider.upi)
console.log(consider2.upi);