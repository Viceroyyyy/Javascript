//Promises
//A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
//When we didn't had Promises then libraries like Q and Bluebird were used for Asynchronous Programming
//Now these libraries are by default available in Javascript

const promiseOne = new Promise(function(resolve, reject) {
    // Uses of promise
    //     Do an Async Task
    //     DB Calls, Cryptography, network
    setTimeout(function() {
        console.log("Async task is complete")
        resolve();
    },1000);
})

// resolve in above function defined in the promise is used to connect with promise.then(call back function)
//The call back function receives an automatic argument which is returned by the promise itself
//
promiseOne.then(function(){
console.log("Promise Consumed");
});

//Now doing all of these operations together

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async 2 resolved")
        resolve();
    },1000);
}).then(function() {
    console.log("Promise 2 consumed")
}); 

const promiseThree = new Promise(function(resolve,reject) {
setTimeout(function() {
console.log("Promise 3:Passing object in resolve");
resolve({name: "Devesh", email:"deveshagnihotri03@example.com"});
},1000);
});
promiseThree.then(function(user){
    console.log(user);
    console.log(user.email); 
});

//Chaining i.e using multiple .then() calls

const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
const error = false;
if(!error)
    resolve({user: "Devesh", email: "deveshagnihotri03@example.com"})
else
    reject("ERROR: Something went wrong")
},1000);
})

promiseFour.then((user1) => {
    console.log(user1)
    return user1.user;
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => {console.log("The promise is either resolved or rejected")});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({userName:"Devesh",pw:"123"})
        }
        else
        reject(`Error: JS went wrong`);

    }, 1000);
})

//Here try and catch block cannot be used externally like we used after .then .....we have to use it try and catch block internally

async function consumePromiseFive(){
    try{
        const response =  await promiseFive;
        console.log(response);
    }
    catch(err){
        console.log(err);
    } 
}

consumePromiseFive();

//Now using Async Await trying to get fetch GitHUb API and printinh the data

async function getAllUsers(){
    try{
        const response = await fetch(`https://api.github.com/users/Viceroyyyy`);
       // console.log(typeof response); //This takes timee therefore we have to use await on this also
        const data =await response.json();
        console.log(data); //
    }catch(e){
        console.log("Error: ",e);
    }
}

getAllUsers();

fetch("https://api.github.com/users/Viceroyyyy")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error)=>{console.log("Error: ",error)});