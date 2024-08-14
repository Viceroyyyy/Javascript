# Working with arrays in JavaScript

## forEach 
- To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
```javascript
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//Output 
0. kiwi
1. mango
2. apple
3. pear

```

# filter
- Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

```javascript
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

//output
[30,40,50]
```

# map
- This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

```javascript
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

// Output
[0,1,2,3,4,5]

```
# Maps In Javascript

- A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

```javascript


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//Output
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
//To get a specific Value

bestBoxers.get(1); // 'The Champion'

```

# Sets in JavaScript
- Stores only unique values

```javascript

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//Output
{'apple', 'pear', 'plum'}
```
# JSON - JavaScript Object Notation.
- To convert JSON into Javascript Object
![alt text](<Screenshot 2024-08-14 at 9.33.16 AM.png>)

- To convert Javascript Object to String we use JSON.stringify() 
![alt text](<Screenshot 2024-08-14 at 9.34.59 AM.png>)

# Javascript Important Facts

- In 2009, a developer named Ryan Dao decided to use Google's JavaScript V8 engine and make it work on the server(Back-end).

- This is how Node.js was born and how JavaScript became a language for both front-end and back-end

- ## Node.js is a separate standalone environment. This means that Node.js can run in multiple settings. For example, on the command line, in a desktop application, or on the back end of a web app.
- Node.js comes with a package manager called npm, which stands for Node Package Manager. The package manager allows you to use a large number of libraries and frameworks as Node.js modules.


- The package.json file that gets created after you run the npm command.

- The package.json file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules. There are about 11 million modules in the npm repository.

# What is Testing??

![alt text](<Screenshot 2024-08-14 at 9.22.23 AM.png>)

## Types Of Testing...

- ## e2e Testing
- e2e Testing - Slow and time Consuming since it includes testing as a user.
- This means that in e2e testing you need to open your web application in a browser and then test it by interacting with the page the same way a user might interact with it.

- ## Integration Testing

 -  Integration testing is testing how parts of your system interact with other parts of your system. In other words, it's testing how separate parts of your apps work together.

 - ## Unit Testing

  - Unit testing is the process of testing the smallest units of your source code in isolation. A good example of this is functions.
  - A unit is the smallest piece of code that you can test separately from the rest of the app.


  # Introduction to JEST

- Features of JEST Framework: 
    - Code Coverage
    - Mocking
    - Snapshot Testing. 

- It's often used for testing code like React,Babel, TypeScript, Node, Angular, Vue, and various other frameworks.

- ## Mocking :
    - Mocking allows you to separate the code that you are testing from it's related dependencies.
    - For example A software need to be developed and multiple teams are working on the project then if the fontend can be developed only when the backend of the site is ready but due to some problem the backend engineers are late therefore the front end engineers are waiting for the data from the backend.Hence to avoid this problem Mocking is used.

    - Mocks, allow you to pretend that the users are already there. The needed data comes from the mock rather than from the backend. This allows the front-end developers to finish their site of the new feature independently
