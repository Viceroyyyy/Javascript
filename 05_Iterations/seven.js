const myarr = [1,2,3,4,5,6,7,8,9,10,11];

const Nums = myarr.map((num) => {
    return num+10;
})
console.log(Nums);

//Chaining in map and filters i.e using map and filters
/*
When we are chaining using map or filter 
the results after first map is transferred to 
the second map or filter function
*/

const newNums = myarr
                    .map((num) => num+10) //First this is computed then the results are moved to the next map or filter
                    .map((num) => num*10)
                    .filter((newnum) => newnum>150);

console.log(newNums);