
// Object.create ---->this is when a sinleton is formed

//Declaration of Objects using Object Literals

const mysym = Symbol("key1");//Declaration of Symbol

const Obj ={
    name: "Devesh",
    age : 22,
    [mysym]:"mykey1", //Way to write Symbol 
    location : "Kanpur",
    email : "deveshagnihotri03@gmail.com",
    LastLogindays: ["Sun", "Mon", "Tue"] //Can put an array in Objects too
}

//Ways Of accessing Objects

//Method 1 ->Common method, this method is used by writing Object.elemnt
console.log(Obj.email);
console.log(Obj.LastLogindays);

//Method 2 this is used by writing Objectname[element]

console.log(Obj["email"])
//THE BIGGEST ADVANTTAGE OF ACCESSING IN THIS WAY IS:-
//IF YOU WANT TO ACCESS AN OBJECT LITERAL WHICH IS DECLARED LIKE A STRING i.e "OBJECT" : "HELLO"
//In above case we cannnot access this literal through method 1 
//Hence we have to use Method2

//Also WHEN WE DECLARE A SYMBOL the correct way to access it is using METHOD 2
console.log(Obj[mysym]);

//To update values

Obj.email = "hellowworld@gmail.com";
console.log(Obj);
//I we want to lock the value then we can freeze it
//Object.freeze(Obj); 
Obj.email = "sdvsvsv@gmail.com"; //The value won't change since the object is frozen--Uncommment above line and see changes


//Now to continue working on Object we have to unfreeze it first

//Declaring functions in Objects

Obj.greetings = function(){
    console.log(`Hello ${this.name}`);
}

console.log(Obj.greetings);
console.log(Obj.greetings());
console.log(Obj);