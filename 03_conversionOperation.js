let score = "33"

console.log(typeof score)

score = Number(score) // data type must be started with Capitsl Letter

console.log(typeof score)
console.log(score)

// Now if score consists of a value that is not actually number

let score1 = "33abc"

console.log(typeof score)

let valueInnumber1= Number(score1) // data type must be started with Capitsl Letter

console.log(typeof valueInnumber1)
console.log(valueInnumber1)

/*
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1
false => 0
*/

// To convert 1 or 0 into Booolean value

let isLoggedIn=1

isLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn)

//isLoggedIn = "" => false     i.e for Empty string conversion gives false
// isLoggedIn = "Defishhh" => true 


// CONVERSION INTO STRING VALUES

let num=33
let stringnum=String(num)

console.log(stringnum)
console.log(typeof stringnum)