
console.log(Math.PI);
Math.PI =  5;
console.log(Math.PI);

const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Descriptor);

const Chai ={
    name: "Chai",
    email: "chai@gmail.com",
    password: "123"
}

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

Object.defineProperty(Chai, "name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

for (const [key , value] of Object.entries(Chai)) {
    if(typeof value != "function")
    console.log(`${key} = ${ value}`)
}
//This gives only email and passsword property and does not provide the name property since enumerable property of name  is disabled

