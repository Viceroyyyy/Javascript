
const myHero = ["Thor","SuperMan"];
const heroPower = {
    Thor : "Hammer",
    SuperMan : "Laser Eyes",

    getSuperManPower : function (){
        console.log(`This is superman's power${this.SuperMan}`);
    }

}

Object.prototype.PrintMe = function(){ 
    //This function is given directly to a higher authority i.e the Object now everyone can access it due to prototypal behaviour of Javascript
    //Now if it would have been given to Array then the object would not be able to access it since Object is higher in hierarchy
    console.log(`PrintMe method is present in all objects`);
}

heroPower.PrintMe();
myHero.PrintMe();

// Prototypal Inheritance

//Old Syntax

const User = {
    name: "Chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport ={
    isAvaialable : false
}
const TASupport={
    makeAssignment: "JS assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

