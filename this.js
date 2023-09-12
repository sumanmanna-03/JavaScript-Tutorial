const user = {
    username: "hitesh",
    price:  999,

    welcome: function(){
        console.log(`${this.username} , welcome to website`)
    }
}
// user.welcome()
// user.username = "Suman"
// user.welcome()

// console.log(this)  // {} => value of this

function chai(){
    console.log(this)
}

chai()