//function declaration

function addTwoNumbers(number1, number2) {
    console.log(number1+number2);
}

//No datatype of number is provided in JS in parameters

// Function Calling

addTwoNumbers(3,4);  //8
addTwoNumbers(3,"4"); //34
addTwoNumbers(3,"a");  //3a
addTwoNumbers(3,null);  //3

// While calling the function the values passed are called Arguements

//WE can store functions in variable in Javascript

const result = addTwoNumbers(3,5);

console.log("result: " + result);
//Here since there is no return statement in the function therefor the value in variable is undefined

function multiplyTwoNumbers(number1,number2) {
    return number1 * number2;
}

const product = multiplyTwoNumbers(3,5);
console.log("product: " + product);

function loginUserMessage(username ="Sam"){ // Default Parameters
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in` ;
}

console.log(loginUserMessage("Devesh"));

console.log(loginUserMessage(""));

//REST OPERATOR denoted by ... i.e 3dots

function calculatePrice(...num1){
    return num1;
}

console.log(calculatePrice(200,300,400,500,600));

function calculatePrice1(val1,val2,...num1){
    return num1;
}

console.log(calculatePrice1(200,300,400,500,600));
// It will print an array with values[400,500,600] beacuse 200 and 300 will be taken by val1,val2


///How to handle Ojects in a Function

let obj ={
    username:"Devesh",
    age:"22"
};

function handleObject(obj){
    console.log(`Username is ${obj.username} and his age is ${obj.age} `);
}

handleObject(obj);
// We can pass the attributes of object directly also

handleObject({
    username: "Shweepy",
    age:19
});

let arr=[200,400,500];

function handleArray(array) {
    console.log(array);
}

handleArray(arr); //Passing values through putting array in a variable

handleArray([500,600,800]); //Directly passing Values 
