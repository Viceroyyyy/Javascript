

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptMessgae(){
//         return `${this.password}@#123`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`;
//     }

// }

// const chai = new User("chai", "chai@gamil.com","abc");

// console.log(chai);
// console.log(chai.encryptMessgae());
// console.log(chai.changeUsername()); 


////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------Behind the scenes-----------------------------------------------

// function User(username,email,password){
    
//         this.username = username;
//         this.email = email;
//         this.password = password;
// }

// User.prototype.encryptMessage =() => {
//     return `${this.password}@#123`
// }
// User.prototype.changeUsername = () => {

//     return`${this.username.toUpperCase()}`;
// }

// const tea = new User("tea","tea@gnmail.com","abc");

// console.log(tea);
// console.log(tea.encryptMessage());
// console.log(tea.changeUsername());

//the bove code gave error because:-

/*
Arrow Functions do not have their own this context. 
They inherit the this value from their surrounding lexical context. 
In your case, this can cause issues when trying to access instance properties like this.username or this.password.
*/

function User(username,email,password){
    
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptMessage =function(){
return `${this.password}@#123`
}
User.prototype.changeUsername = function(){

return`${this.username.toUpperCase()}`;
}

const tea = new User("tea","tea@gnmail.com","abc");

console.log(tea);
console.log(tea.encryptMessage());
console.log(tea.changeUsername());