class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    //IF you're writing a getter method then there must always be a setter method 
    //Setter method never returns anything it is used to only set the values

    get email() {  //name of the getter method must be same as the parameter 
        //Gets the value i.e when the user tries to get(access) the value from outside 
        return `${this._email}`
    }

    set email(email) { //Sets the value i.e when the user tries to set the value from outside works exactly same as constrcutor 
        this._email = email.toUpperCase(); 
    }

    get password(){
        return `${this._password}devesh`
    }
    set password(value){
        this._password = value.toUpperCase() 
    }
}

const Devesh = new User("deveshagnihotri03@gmail.com","123abc")
console.log(Devesh.password)

//Getter Setter kinda create a new private property i.e _email and _password 