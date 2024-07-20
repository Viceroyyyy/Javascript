let a =10;
const b=20;
var c =100;

if(true){
    let a=1000;
    const b=50;
    var c=30;
}

console.log(a); //10 since it takes value declared globally
console.log(b); //20 since it takes value declared globally
console.log(c); // 30 because it changes value irrespective of the scope 

//var is declared locally can also be used globally for example:-
//Cooment above code for below example
if(true){
    let a=1000;
    const b=50;
    var c=30;
}
console.log(c); //Gives output 30
console.log(b); //Throws error 
console.log(a); //Throws Error
