
class User {
    constructor(username) {
        this.username = username;
    }
    logMe()
        {
            console.log(`USERNAME is ${this.username}`);
        }
    
}

class Teacher extends User {
        constructor(username,email,password) {
            super(username) //this is doing the same thing which .call(this,username) used to do , in the backend it is still doing the same thing
            this.email = email;
            this.password = password;
        }

        addCourse(){
            console.log(`This course is added by ${this.username}`);
        }
}

const chai =  new Teacher("Chai","Chai@gmail.com","123abc");

console.log(chai);
chai.addCourse();

const masalachai = new User("masalaChai");

masalachai.logMe();
chai.logMe();
//masalachai.addCourse(); //This will give error beacuse addCourse method  belongs to Child Class and Not the PArent Class 

console.log(chai===masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(Teacher instanceof User);
console.log(masalachai instanceof User);
console.log(masalachai instanceof Teacher);
