class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

const Devesh = new User("Devesh");
console.log(Devesh.logMe());
//console.log(Devesh.createID()); //This will show an error because the static keyword makes the method in accessible

class Teacher extends User {
constructor (username, email) {
    super (username)
    this.email = email
}
}
const iphone = new Teacher ("iphone", "i@phone.com")
console. log (iphone.createId());