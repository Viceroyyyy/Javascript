//Comparison Operators
//===  => Known as "Strict Equality"
//Checks equality for both  Datatype as well as Values
console.log("2"===2);

// Some other comparison Operators are >,<,<=,>=,==
console.log(null>0); //Gives False
console.log(null==0); //Gives False
console.log(null>=0); //Gives True

/*
The reason is that an equality check == and comparisons >,＜,>=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/
