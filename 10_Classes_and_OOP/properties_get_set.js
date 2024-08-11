function User(email,password){
    this._email = email;
    this._password = password;


    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value.toUpperCase();
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password
        },
        set: function(value){
            this._password = value.toUpperCase();
        }
    })
}

const chai =  new User("chai@gmail.com","123abc");

console.log(chai.email);