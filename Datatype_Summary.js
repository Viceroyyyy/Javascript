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


////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------How is memory allocated?---------------------------------

//Stack is used for Primitive Datatypes and a copy of variable is provided to use.
//Heap memory is allOocated for Non-Primitive Datatypes and a reference of original value is provided i.e original value will be changed in case of any changes

//Example:
 let name="Devesh";
 let anothername = name; //keeps a copr of name
 anothername = "Shweepy" ; //copy  is changed whereas original remains same
console.log(name);
console.log(anothername);

//Using Non primitive datatypes for heap memory
 let obj1={
    email: "foo@example.com",
 }

 let obj2=obj1;
 console.log(obj1.email);
 console.log(obj2.email);
  obj2.email = "deepak@example.com";

  console.log(obj1.email);
 console.log(obj2.email);