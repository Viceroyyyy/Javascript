//Dates it is an Object

let myDate = new Date();
console.log(myDate); 
//Totally not understandable //2024-07-26T02:11:08.422Z

console.log(myDate.toString()); //Fri Jul 26 2024 07:41:08 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2024-07-26T02:11:08.422Z
console.log(myDate.toJSON()); //2024-07-26T02:11:08.422Z
console.log(myDate.toDateString()); //Fri Jul 26 2024
console.log(myDate.toLocaleDateString()); //7/26/2024
console.log(myDate.toLocaleString()); //7/26/2024, 7:41:08 AM

console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 6,26);
console.log(myCreatedDate.toLocaleString()); //7/26/2024, 12:00:00 AM

let myCreatedDate1 = new Date(2024, 6,26,7,21);
console.log(myCreatedDate1.toLocaleString()); //7/26/2024, 7:21:00 AM

//Indexing of Months start from 0 when we write in single digit
//If we Use MM DD YY format then indexing start from 1

let myCreatedDate2 = new Date("00-21-2024"); //MM DD YY format but invalid since index starts from 1
console.log(myCreatedDate2.toLocaleString()); //Invalid Date

let myCreatedDate3 = new Date("01-21-2024"); //Valid date in DD MM YY format
console.log(myCreatedDate3.toLocaleString()); //1/21/2024, 12:00:00 AM

//TimeStamp
//Used when Creating Polls and quizzes

let myTimeStamp = Date.now(); 

console.log(myTimeStamp); //Gives time in miliseconds
//1721959868476
console.log(myCreatedDate.getTime()); //Same as above
 //1721932200000

//Now to covert it into Seconds
//Divide by 1000 and Floor the value or else it will be present in decimal

console.log(Math.floor(myCreatedDate.getTime()/1000));
//1721932200
//Some more methods

console.log(myDate.getDate()); //26
console.log(myDate.getMonth()); //6
console.log(myDate.getFullYear());//2024
console.log(myDate.getHours()); //7
console.log(myDate.getTime());

myDate.toLocaleString('default',{
    weekday:"long"     //Basically we customize dates according to ourselves

})