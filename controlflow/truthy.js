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

 const foo = null ?? 'default string';
 console.log(foo);

const baz = 0 ?? 42;
console.log(baz);