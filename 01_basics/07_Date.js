//Dates it is an Object

let myDate = new Date();
console.log(myDate);
//Totally not understandable

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString()); 

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 6,26);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date(2024, 6,26,7,21);
console.log(myCreatedDate1.toLocaleString());

//Indexing of Months start from 0 when we write in single digit
//If we Use MM DD YY format then indexing start from 1

let myCreatedDate2 = new Date("00-21-2024"); //MM DD YY format but invalid since index starts from 1
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-21-2024"); //Valid date in DD MM YY format
console.log(myCreatedDate3.toLocaleString());

//TimeStamp
//Used when Creating Polls and quizzes

let myTimeStamp = Date.now();

console.log(myTimeStamp); //Gives time in miliseconds

console.log(myCreatedDate.getTime()); //Same as above
 

//Now to covert it into Seconds
//Divide by 1000 and Floor the value or else it will be present in decimal

console.log(Math.floor(myCreatedDate.getTime()/1000));

//Some more methods

console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getTime());

myDate.toLocaleString('default',{
    weekday:"long"     //Basically we customize dates according to ourselves
    
})