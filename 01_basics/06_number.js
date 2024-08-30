const num= 400; //Automatically takes datatype as const
console.log(num);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString());//Number can be converted into String
//Since it is a string we can use methods of string

console.log(balance.toString().length);
console.log(balance.toFixed(4));//Used to round up upto the number of decimal places

const newnnum = 123.8366;
console.log(newnnum.toPrecision(3)); //Gives preference to values before decimal
 //What it does is it rounds of the value based on the number of digits for which precision is asked for. Therefore for above example only 123 is considered since it starts from leftmost digit and it is rounded of to 124 since 0.8366 is more than 0.5. 
const newnnum1 = 1234.8366;
console.log(newnnum1.toPrecision(3));
//Takes first three values only and rest all is hown in exponential format

const hundreds = 100000;
console.log(hundreds.toLocaleString()); //Puts commas in american Standard
//Output:- 100,000
console.log(hundreds.toLocaleString('en-IN')); // Puts commas in Indian Standard
//output:- 1,00,000

//Check Console for such commands

//////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------Math----------------------------------------------------------------
//Math is an Object
//Check Console for more understanding of the different methods presentin Math library

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(234.458));
console.log(Math.ceil(234.458));
console.log(Math.floor(234.458));

console.log(Math.random());//Always gives random value between  0 & 1
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const max=30;
const min=15;
//Formula so that we can get any random number between a given range:-
console.log(Math.floor(Math.random()*(max-min+1))+min);
