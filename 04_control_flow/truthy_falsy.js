//falsy values

/*
false,0 , -0, BigInt => 0n,"",null,undefined, NaN
*/

//Apart from above given values all values are true

//truthy values
//"0",'false', " ",[],{},function(){} =>Also known as Empty Function
/////////////////////////////////////////////////////////////////////////////////////
//Nullish Coalescing Operator(??):t to handle null undefined values

let val1;
val1 = 5 ?? 10; 
 console.log(val1);
 val1 = null ?? 29;
 console.log(val1);
 val1 = undefined ?? 60;
 console.log(val1);
 val1 = null ?? 29 ?? 60; // Whichever value comes first after null it is assigned to the variable
 console.log(val1);

 //Ternary Operator
 
 //Syntax => Condition ? True : False
