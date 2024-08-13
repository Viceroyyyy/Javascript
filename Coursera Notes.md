## Var,Let and Const
- A variable declared with the var keyword can be accessed before initialization as long as the variable is eventually initialized somewhere in our code. 
- A key difference is that you cannot access a let variable before declaring it.

## OOPS Principles
- An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
- Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

- If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 
```javascript
"abc".concat("def"); // 'abcdef'
```
- I can also use the concat() method on two arrays. Here's the result: 
```javascript

["abc"].concat(["def"]); // ['abc', 'def']
```
- Consider using the + operator on two arrays with one member each:  

```javascript
["abc"] + ["def"]; // ["abcdef"]
```
- This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it.

## More about Classes

- Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.

```javascript

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4 = new Train('red', false);

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

```

## Difference between the for in and for of loops

- When we use for in loops and for of loops the difference is that for in loops iterate not only over the properties but also the properties of the prototype.
 - That is why for in loops are unreliable in this scenario because they iterate over not only the specified object, but also its prototype.
  