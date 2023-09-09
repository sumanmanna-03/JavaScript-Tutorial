// function calculateCartPrice(num1){
//        return num1
// }

// console.log(calculateCartPrice(2));

function calculateCartPrice(val1, val2, ...num1){ // gives only first two value
       return num1
}

console.log(calculateCartPrice(200, 400, 500, 600)); // gives an array function


// const user ={
//        username: "hitesh",
//        prices: 199
// }

function handleObject(anyobject){
       console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
       username: "Sam",
       price: 399
})  //Object pass

// Array pass

// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
       return getArray[0]
}

console.log(returnSecondValue([200, 400, 100, 600]));


