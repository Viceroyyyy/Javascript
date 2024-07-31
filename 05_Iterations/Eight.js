//Using Reduce on arrays 
//Reduce on arrays generally consist of two things i.e the Accumulator and the Current Value 
//Accu,ulator is used for storing the Addded Value or operated value at any instance
//Whereas Current Value is used for current instance of the array


const myarr = [1, 2, 3, 4, 5]

const myTotal = myarr.reduce((acc,currval) => {
    console.log(`Value in Accumulator: ${acc}, Current Value is ${currval}`);
    return acc + currval;
},3); //Here 0 is the initial value for accumulator..
// We can initialize it externally and then instead of writing zero(0) directly we could write the variable instead

console.log(myTotal); 

const myCart = [
    {
        courseName: "Js Course",
        price : 2999
    },
    {
        courseName: "Py Course",
        price : 999
    },
    {
        courseName: "Data Science Course",
        price : 12999
    },
    {
        courseName: "Mobile Dev Course",
        price : 5999
    }
];

const addPrice = myCart.reduce((acc,coursePrice) => acc+coursePrice.price,0);
console.log(addPrice);

