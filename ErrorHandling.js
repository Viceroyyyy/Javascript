try{
    console.log(a+b);
}
catch(e){
    console.log(e);// If you comment this the error will not be shown and only next line will be printed if it is written
    console.log("There was an error");
}
console.log("My program does not stop execution even after Errors")


try{
    // throw new Error("Type Error");
    // throw new TypeError();
    throw new ReferenceError();
}
catch(e){
    console.log(e);
    console.log("There was an error");
}
console.log("My program does not stop execution even after Errors")

/*
Here are some of the most common errors in JavaScript: 

    ReferenceError  -> console.log(username); //Uncaught ReferenceError:Username not defined
    SyntaxError    -> var a "there's no assignment operator here"; //Uncaught SyntaxError: Unexpected String   
    TypeError   -> "hello".pop() // Uncaught TypeError: "hello".pop is not a function
    RangeError  ->
    (10).toString(2); // '1010' Runs fine and converts to binary
    (10).toString(8); // 12 Runs fine and convert to Octal number
    (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36

There are some other errors in JavaScript. These other errors include: 

    AggregateError 
    Error 
    InternalError 
    URIError   


*/

function  addTwoNums(a,b){
    try{
        if(typeof(a)!="number")
        throw new ReferenceError("the first argument is not a number");
        else if(typeof(b)!="number")
        throw new ReferenceError("the second argument is not a number");
        else
        console.log(a+b);
    }
    catch(err){
        console.log("Error!",err);
    }

}
console.log("It still works")

addTwoNums(5,"5");

// function  addTwoNums(a,b){
//     try{
//         if(isNaN(a))
//         throw new ReferenceError("the first argument is not a number");
//         else if(isNaN(b))
//         throw new ReferenceError("the second argument is not a number");
//         else
//         console.log(a+b);
//     }
//     catch(err){
//         console.log("Error!",err);
//     }

// }
// console.log("It still works")

// addTwoNums(5,"5");

//The aboove function will return value 55 beacuse:-

// The isNaN function returns true if the value is NaN (Not-a-Number) or cannot be converted to a number. 

