//Starting with Object Literal
//In javascript Object is your base unit 

const user = {
    userName: "Devesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        console.log("Shweepy"); 
        console.log(`UserName:${this.userName}`);
        console.log(this);

    }

}
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this)

//Constructor Function - new KeyWord

function User(userName, loginCount, signedIn)
{
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`)
    }
    return this
}
//Note that in above function this.userName acts as a Variable

const userOne = new User("Devesh",12,true);
const userTwo = new User("Shweepy",11,true); //This will overwrite the value in userOne since new keyWord is not used
// console.log(userOne); 

const userThree = new User("Shweepy's love",13,true);

// console.log(userOne);
// console.log(userThree);
console.log(userOne.constructor)

//New object is created everytime When we use new KeyWord
//A constructor function is callled due to new 
//Arguements are Injected and packed and provided to user 
//Constructos is a reference about the user.