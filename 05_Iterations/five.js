
const coding = ["js", "css", "Ruby", "JavaScript"]

coding.forEach(function (key){
    console.log(key);
})

coding.forEach((arrkey,item,index) => {
    console.log(arrkey,item, index);//Using arrow func
})                                             

const myobj = [
    {langName: "JS",
        usedBy: "Devesh"
    },
    {
        langName: "C++",
        usedBy: "Shweepy"
    }

]

myobj.forEach((key) => {
    console.log(key.langName);
})