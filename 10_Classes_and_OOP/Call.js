function SetUsername(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username,email,password){

    SetUsername(username); 
    //Here the method SetUsername is called but the reference is not held when it is sent back......
    //It comes out of execution context and then the function is deleted therefore the refernce doesn't stay.

    this.email = email;
    this.password = password;
}
const chai = new createUser("Chai","dbf@hotmail.com","123");
console.log(chai);

function createUser1(username,email,password){

    SetUsername.call(this,username);
     //Here we used the .call property and then passed this as parameter telling that I will use setUsername method ka this for intializing my username

    this.email = email;
    this.password = password;
}

const usingCall = new createUser1("Devesh","dev@gmail.com","123");
console.log(usingCall);