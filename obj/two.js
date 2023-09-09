// const tinderUser = new Object() // This is singleton object
const tinderUser = {} // non-singeton object 

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "suman",
            lastname: "manna"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email1: "s@gmail.com"
    },
    {
        id: 1,
        email1: "s@gmail.com"
    },
    {
        id: 1,
        email1: "s@gmail.com"
    },
    {
        id: 1,
        email1: "s@gmail.com"
    },
    {
        id: 1,
        email1: "s@gmail.com"
    }
]

user[1].email1
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));














