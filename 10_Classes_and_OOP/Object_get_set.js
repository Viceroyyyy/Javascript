const User = { //Very less used 
    _email: 'devesh@gmail.com',
    _password: '123abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
} 
//Getter and Setter are methods which overwrite the actual property.
