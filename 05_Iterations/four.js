//For Iterating Objects we use "For in"  loop

//-----------------For in loop---------------------------

const myobj = {
    js  : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myobj) {
console.log(key,":",myobj[key]);
console.log(`The value of ${key} in myobj is ${myobj[key]}`) //Gives all the keys as value
}

//Using for in loop to iterate arrays
const myarr = ["js", "cpp", "rb", "swift"];
for(const key in myarr) 
{
    console.log(key);//outputs Index
}

for(const key in myarr) 
    {
        console.log(myarr[key]);
    }
    
////////////////////////////////////////////////////////////////
//------------------For each Loop-------------------------------------


