const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gamename = new String('hitesh-hc')

console.log(gamename[0])

// console.log(gamename.length);
// console.log(gamename.toUpperCase())
// console.group(gamename.charAt(2))
// console.log(gamename.indexOf('t'))

const newGame = gamename.substring(1,3)
console.log(newGame);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newString = "    hitesh    "
console.log(newString)
console.log(newString.trim())


const url = "https://hitesh.com/hitesh%20choudhury"

// url.replace('%20', '-')
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))

console.log(gamename.split('-'));