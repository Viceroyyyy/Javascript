//Declaring Singleton object
const singletonObj = new Object(); //Creates an empty Singleton Object, used where we require a single entity for example WhatsappUser etc.

const newObj = {};//Does not create a Singleton Object

//Both Singleton and Non-Singleton Objects work exactly same there is no difference.
console.log(singletonObj);

//Nesting Objects i.e adding objects inside objects

const nestObj = {
    id: 210046,
    email:"deveadass@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Devesh",
            lastName: "Agnihotri"
        }
    }
}

console.log(nestObj.fullname);
console.log(nestObj.fullname.userfullname);
console.log(nestObj.fullname.userfullname.firstName);

//Combining objects

let obj1={
    1:"a",
    2:"b"
}
let obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {obj1,obj2};
console.log(obj3); //Output=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign({},obj1,obj2); //Syntax => Object.assign(Target,Value)---->all the values are put inside The target...Here the empy paranthesis acts as the target and all others objects are the values  whose properties are copied to the empty paranthesis.
//If we don't use the empty paranthesis then all the properties of the Objects will be copied inside the Obj1 

console.log(obj4);
const obj5 = {...obj1,...obj4}; //USing Spread Operator again to copy objects properties into another Object.
console.log(obj5);


//Now whenever we take values from a Database it is received in the form of array of Objects i.e:-
const dbData = [
    { id: 1,name: 'a'},
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
]

console.log(dbData[1].name);
console.log(Object.keys(obj5)); //return an array of keys
console.log(Object.values(dbData)); //return an array of values

console.log(dbData.hasOwnProperty("name"));

/////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------OBJECT DESTRUCUTRING---------------------------------
const course = {
    coursename: "Javascript in Hindi",
    coursefee: 999,
    courseInstr: "Hitesh"
};

/*
Destructuring means that we do not have to use obj.property every now and then
 we can store it in a variable by suing curly braces 
 */

 const {coursename} = course; //Object Destructured
 console.log(coursename);

 // Also we can provide a name to destructured property

 const {courseInstr: Instructor} = course;

 console.log(Instructor);
 
//API Format-it is present in form of objects where keys are also strings
//but it can also be present in form of Objects present inside an array
//Example:
/*

{
"name": "Devesh",
"rollno":2101641530060
"love": "Shweepy"
}

*/


// API IS PRESENT IN JSON Format