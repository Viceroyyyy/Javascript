// For of Loop
//Used to iterate easily over arrays objects etc

let arr= [1,2,3,4,5,6,7];
for (const value of arr) {
    console.log(`the value is ${value}`);
}

//above loop runs exactly same as ForEach Loop of Java

const str = "Devesh Agnihotri";
for (const st of str) {
    console.log(`the character is ${st}`);

}

//Maps => It is an object
// it consists of key and value pairs

const mp = new Map(); //Consists of unique values

mp.set("USA","United States Of America");
mp.set("IN", "India");
mp.set("JP","Japan");

console.log(mp);

// For of loop on maps
for(const [key, value] of mp) {
    console.log(key,":-",value);
}

// For of doesn't iterate objects
//For eg:-
let myobj = {
    "game1" : "IGI",
    "game2" : "NFS"
}
//Note the code written below will give error
for(const [key, value] of myobj) {
    console.log(key,":",value);
}

// TypeError: myobj is not iterable

 