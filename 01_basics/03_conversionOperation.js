let score = "33"

console.log(typeof score)

score = Number(score) // data type must be started with Capitsl Letter

console.log(typeof score)
console.log(score)

// Now if score consists of a value that is not actually number

let score1 = "33abc"

console.log(typeof score1)

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

//*****************************OPERATORS********************  */

//Arithmetic Operations

console.table([2+2,2-2,2*2,2/2,2%2,2**2]);

//Assignment Operations
let a=8;
console.table([a+=2,
a-=2,
a*=2,
a/=2]);

//Comparison Operators
let b=2;
if(a===b)
    console.log("Same Datatype as well as value");
else
console.log("ille");

b*=4;
if(a===b)
    console.log("Same Datatype as well as value");

b=String(b);
if(a===b)
    console.log("Same Datatype as well as value");
else
    console.log("Different Datatype");

// Some other comparison Operators are >,<,<=,>=,==

let str1="Hello ";
let str2="Defishhh";
let strconcat=str1+str2;

console.log(strconcat);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);//In all the above three cases it will concat as string 

console.log(1+2+"2");// Because here starting is with number 
//therefore first it will add and then concat as string
