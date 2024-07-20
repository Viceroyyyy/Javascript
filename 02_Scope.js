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

/////////////////////////////////////////////////////////////////////////
//------------------------------NESTED SCOPE------------------------------------------------

function nestedscope() {
    const username = "Devesh";

    function nestedscope2() {
        const loggedIn="true";
        console.log(username);
    }
    //console.log(loggedIn); // Gives Error because loggenIn variable is locally declared under second function

    nestedscope2();
}
nestedscope();

//Closure means that in nested functions, child functions nd can use the variables of the Parent functions 
//There's more to Closure

///Two Ways of declaring a function

//Method 1 Traditional way
addOne(6); //This works fineee no error unlike variable based function declaration
function addOne(num){
    console.log(num+1);
}

addOne(5);


//Method 2 Declaring function in a Variable

variable(8);//Throws errpr because variable is cannot be used before initialization
//ReferenceError: Cannot access 'variable' before initialization


let variable = function add(num){
    console.log(num+1);
}

//For method two  we pass the value in variable ie:-
 variable(8);
 add(9); //Throws error because we cannot acces the function declared in a variable directly

 //console.log(variable = 8);





