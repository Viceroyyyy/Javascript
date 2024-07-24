//---------Strings--------------------------------

const name="Devesh";
const gender = "Male";
console.log("Using normal Method:-");
console.log("Hi! My name is "+name+" and i am a "+gender); //Old/Ancient method to print Strings

//New Method involves using String Interpolation i.e using Backticks(`)
console.log(`Using String Interpolation`);
console.log(`Hi! My name is ${name} and i am a ${gender}`);

//Another way to declare a String 

const newstr =  new String("Devesh"); 
//If we will make it in actual Console on web browser then it will look like
/*
0: "D"
1: "e"
2: "v"
3: "e"
4: "s"
5: "h"
length: 6
[[Prototype]]: String
[[PrimitiveValue]]: "Devesh"

*/

console.log(newstr.charAt(2));
console.log(newstr.indexOf("v"));
console.log(newstr.toUpperCase()); 
console.log(newstr.length); 
 const usingsubstr = newstr.substring(0,4);//Negatuve values are ignored
console.log(usingsubstr);
 const usingslice = newstr.slice(-7,4); //It can start from another end if we give negative value
 console.log(usingslice);

 let str= "  Debesh   "
 console.log(str.trim()); //Works on whitespaces and line terminators\n
 console.log(str.trimStart());
 console.log(str.trimEnd());


 //Using replace 

const rplc = "https://eee245$%"

console.log(rplc.replace("5$","h5"));
console.log(rplc.split("/"));