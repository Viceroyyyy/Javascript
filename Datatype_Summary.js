 //Primitive Datatypes

 //7 types: Number,Boolean,String,null,undefined,Symbol,BigInt

 //Symbols
const id= Symbol('123');
const id2= Symbol('123');

console.log(id===id2);

//Bigint
const bigNum = 244353324335335424242224n;
console.log(typeof bigNum);

 //Reference (Non Primitive)

 //Array, Objects, Functions

 const heroes=["Stark","Thor","Hulk","Captain"];

 const persDetails ={
    name: "Devesh",
    Age: 22
 }

//Declaring a functions as in variable

const myfunc = function(){
    console.log("Hello world!");
};
console.log(myfunc());