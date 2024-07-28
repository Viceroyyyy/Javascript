// for loop iteration
 
let arr= [1,2,3,4,];
for(let index = 0;index<arr.length;index++) {
    console.log(arr[index]);
     if(arr[index] == 5)
        console.log("Five");
    // we can use nested loops too
    /*
    for (let j=0;j<arr.length;j++){
    Statement1;
    Statement2;
    }
    
*/
}

//break and conitnue in loops
for(let i=0;i<10;i++)
{
    if(i==5){
        // console.log(`Detected 5`);
        // break; //Comes out of the loop
        continue; //Moves to next iteration
    }
    console.log(`Value of i is ${i}`);

}