
// const myarr = ["a", "b", "c", "d", "e"]

// const val = myarr.forEach((item) => {
//     console.log(item);
// })

// console.log(val); //Prints all the values and returns undefined

const mynums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const result = mynums.filter((nums) => nums>4)
console.log(result);
 
//Since forEach does not return any values and always return undefined value,
//Hence we use filter as it returns the value which follows the given condition

//To convert the above code in forEach loop 

const newNums=[];
mynums.forEach((nums) => {
    if(nums>4)
        newNums.push(nums);
})

console.log(newNums);

const books = [
    {title: "Book Four", genre :"Non-Fiction", publish: 1989, edition: 2010},
    {title: "Book Five", genre :"Science", publish: 2009, edition: 2014},
    {title: "Book Six", genre :"History", publish: 1987, edition: 2022},
    {title: "Book Seven", genre :"Fiction", publish: 2004, edition: 2018},
    {title: "Book Eight", genre :"Science", publish: 1978, edition: 2013},
    {title: "Book Nine", genre :"History", publish: 2070, edition: 2010},
    {title: "Book Ten", genre :"Fiction", publish: 1989, edition: 2010},
]

const userBooks = books.filter((bk)=>{return bk.genre === "Science"});
console.log(userBooks);

const userBooks1 = books.filter((bk)=>bk.publish > 2000);

console.log(userBooks1);

