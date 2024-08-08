# Fetch History

- Feb 1 2022 Fetch API was added to Node.js
- In beginning XMLHttpRequest was used for fetching XML data via HTTP 
- But with time it became difficult to work with JavaScript Frameworks such as Jquery 
- [Important!!] A promise only generates error when the browser is unable to make any request i.e there is network error or some permission issue. It doesn't reject Errors such as 404

## Working of this diagram

![alt text](<Screenshot 2024-08-08 at 10.49.07 PM.png>)

- Some Special Functions in Call Stack send a special request(Call) such setTimeout.
- Now what setTimeout does is it registers callbacks and puts them into the Task Queue
- Event Loop in task Queue continuously checks if the task queue is full or empty and Call Stack is full or Empty if Call Stack has space and there are call backs whose time out times are over then they are pushed into the Stack.
- Fetch now has a special queue also known as MicroTasskQueue or Priority Queue due to which it is preferred almost everytime and gives result earlier than Normal Task Queue.

## Fetch Working

![alt text](<Screenshot 2024-08-09 at 12.04.12 AM.png>)

- Fetch basically does two works : - It consists of Data :- and two arrays namely onFulfilled[](Resolve of Promise) and onRejection[](Reject of Promise).
- These are private fields we cannot push data directly into these arrays.
- Second it accesses web Browser API and Node API and sends a network Request.
- There are two possible outcomes i.e either a successful network and there's a response or there's a rejection.
- When there's response it is pushed to onFulfilled[] array and when there's an error....then it is pushed to onRejection[] array.
- After that the functions inside the onFulfilled and onRejection arrays is responsible to fill the data which further will fill teh response value in Global Memory