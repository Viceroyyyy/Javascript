function multiply(num){
    return num*5;
}
multiply.power=2;
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype)

//Everything in JS refernces to Object whil further references to Null

function createUser(userName, score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function(){
    return this.score+=1;
}
createUser.prototype.printMe = function(){
    console.log(`This is ${this.score}`) 
    //If we had'nt used this keyword this function would be confused about whose score should we print i.e Code1 or Code2 called below 
}

const Code1 = new createUser("Chai",25); // if we don't write the new keyword all this is in vain
const Code2 = new createUser("Code",251);

//Now the printMe and increment method both are already there in the memory but they cannot be used since new keyword is not used
//Notice the change when you add new keyword to the Code1 variable
Code1.printMe();
console.log(Code2.increment());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned.

*/