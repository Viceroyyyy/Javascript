const user = {
    username:"Devesh",
    age: 22,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to javascript website`);
        console.log(this);
    }
}

user.welcomeMessage();

user.username = "Shweepy";

user.welcomeMessage();

// "this" keyword is used to give the current context i.e the values which are changed

console.log(this); //Gives Empty paranthesis in node because we dont have anything global here

//Whereas on console the above line gives Window object as Output because Window object is the biggest global object

function thiskeyword(){
    console.log(this);
}
thiskeyword(); //Here in function it will give a lot of values 

/////ALSOOO THIS DOES NOT WORK IN FUNCTION IT ONLY WORKS IN OBJECT 

function chai(){
    let username="Devesh";
    console.log(this.username);//Gives undefined
}
chai();
////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------ARROW FUNCTION-----------------------------------------------------

//Simple Arrow Function
const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(5,6));

// Arrow function with Implicit return type
const addThree = (num1,num2,num3) => num1+num2+num3;
console.log(addThree(5,6,4));

//Can also be used by using providing a round bracket
const addThree1 = (num1,num2,num3) => (
    num1+num2+num3
);
//Round Bracket is also used when we have to use objects in arrow functions
const printuserName1 = () => {username:"Swamy"};
console.log(printuserName1()); //Returns Undefined
const printuserName = () =>(
    {username:"Swamy"}
);
console.log(printuserName());


//Can also be used by providing a Curly bracket ut when curly bracket is used return keword must be written
const addThree2 = (num1,num2,num3) => {return num1+num2+num3};

console.log(addThree1(1,2,3));
console.log(addThree2(1,2,4));





