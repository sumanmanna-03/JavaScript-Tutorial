const userEmail = []

if(userEmail){
    console.log("got user Email");
}
else{
    console.log("Do not have user email");
}

// falsy value

//  >> false, o , -0, BigInt, "", null, undefined, NaN

// truty Value

// >> "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }




// Nullish Coalescing Operator

//  const foo = null ?? 'default string';
//  console.log(foo);

// const baz = 0 ?? 42;
// console.log(baz);

// let val1;

// val1 = 5 ?? 40  >> 5
// val1 = null ?? 10  >> 10
// val1 = undefined ?? 5  >>  5
// val1 = null ?? 5 ?? 10    >>  5

// console.log(val1);



// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("leass than 80") : console.log("more than 80");