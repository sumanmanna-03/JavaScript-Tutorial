// scope start with let . var, const
let a = 30
const b = 20
var c = 30

if(true){
    let a = 20
    const b = 20
    var c = 30
}

// if ka under jo bhi ha wo ha block scope
// if ka bahar jo bhi ha wo hai Global scope

// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE     

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

one()

// Here under ka variable baar ka score ko access kar sakta hai but bahar ka variable scope under ka variable ko access nahi kar sakta

// Child function can access parent variable - nested scope(closer)


if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username  + website);
    }
    // console.log(website) //it will throw error
}

// console.log(username) // it will throw error


// +++++++++++++++++++++ INTERESTING +++++++++++++++++++++


// foor this case addone can access before initialization

addone(5)

function addone(num){
    return num + 1
}


// for this case addtwo cannot access before initialiation

addTwo(5)

const addTwo = function(num){
    return num + 2
}










