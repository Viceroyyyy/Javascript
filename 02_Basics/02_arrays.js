let arr = [1,2,3,4,5];
let newarr = [6,7,8,9];

arr.push(newarr); //This will insert newarr array as an elemnt of arr
// O/P->[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]
console.log(arr);

let strarr = ["Devesh","Swamy"]
let strnewarr = ["Defishhh","Shweepy"]
//Concat solves the problem of push i.e 
//if we try to concat another array to the present array then all the elements of new array is added to older array
console.log(strarr.concat(strnewarr));
//output-->[ 'Devesh', 'Swamy', 'Defishhh', 'Shweepy' ]

//Another solution is to use SPREAD OPERATOR
//Just like when a glass is dropped it shatters and spreads similarly SPREAD OPERATOR spreads the elemnts of the array

let spreadop = [...strarr,...strnewarr,...newarr];
console.log(spreadop);

//We can also use flat method
let flatarr=[1,2,[3,4,5,6],4,6,7,[8,9,10,[2,3]]]
console.log(flatarr.flat(2));
//Syntax --> flatarr.flat(depth); here depth means upto which dimension we have to flatten the array 
console.log(flatarr.flat(Infinity));

console.log(Array.isArray("Devesh"));//Checks wheter arguement is Array or not
console.log(Array.from("Devesh")); //output->[ 'D', 'e', 'v', 'e', 's', 'h' ] //Converts into Array

console.log(Array.from({name:"Devesh"}));
//output--> []
//when it is confused and can't make an array just like in above case it returns an empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
//Output--> [ 100, 200, 300 ]
 