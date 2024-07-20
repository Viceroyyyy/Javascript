//IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//Syntax for IIFE 

//       ()()
// First paranthesis () is for Function Definition.
//Second Paranthesis () is for Execution Call


//WHAT IS THE USE OF IIFE ?

//ANSWER:-
// Due pollution present in Global scope we face many problems
// hence to remove that pollution we use IIFE

(function chai(){
    console.log("Testing IIFE");
})();

//In this example we have used Semicolon purposedly because 
//IIFE does not know when to end the execution of that functionn so we have to do it with semicolon

(()=>{
    console.log("Testing IIFE using Arrow Function");
})();

// Now how to pass Parameters in IIFE??

((name)=>{
    console.log(`Passing parameters in IIFE ${name}`);
})("true");