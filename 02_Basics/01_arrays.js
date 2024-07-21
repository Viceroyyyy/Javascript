//ARRAYS

const arr= [1,2,3,4,"arraylist"];
//Arrays in JS are Resiazable like array list in java

/*
Alsoo arrays in JavaScript is similar to arraylist in JAVA i.e  
any dataype can be added in Arrays in Java whereas in normal coding languages only one type of datatype can be used 
*/

//Ways to declare arrays

const array=[1,2,3,4];
const heroes=["Wolverine","Deadpool","Ironman"];

const num = new Array(1,2,3,4);

// Way to access arrays is only using index

console.log(heroes[0]);

//Array Methods

array.push(5); // Adds value at the end of array
console.log(array);
array.push(6);
array.push(7);

console.log(array);

array.pop(); //Removes the last element
console.log(array);

array.unshift(9);
console.log(array);

//Elements to insert at the start of the array.
//Unoptimized since all the values are shifted

console.log(array.shift());
//Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.

console.log(array.includes(9)) //Gives Boolean answer

console.log(array.indexOf(9)); //gives -1 if index is not present

const newarr=array.join();
//This copies all the elements of array to new arr and converts them into string sparated by comma
console.log(array)
console.log(newarr)
console.log(typeof(newarr));

//Slice Method and SPlice method of arrays
console.log(array);
const arrslice=array.slice(1,4);
console.log(arrslice);
console.log(array);

 const arraySplice = array.splice(1,4);
 
 console.log(arraySplice);
 console.log(array);

//Main characterstics of SLICE 
//---> SLICE(1,3) includes only index 1,2 not 3
//that is the last index is not included 
//---> SLICE does not alter the original array

//Main characterstics of SPLICE
//---> SPLICE (1,3) includes only index 1,2,3
//that is the last index is included
//---> SPLICE does alters the original array i.e spliced elements are removed
