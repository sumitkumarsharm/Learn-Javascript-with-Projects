## Protypal inheritance

it is inherit the properties and object from the another object
It is implemented using the prototype chain

Example :

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.sayHello(); // Logs: "Hello, my name is John"
```

## Overriding inherited Properties

```javascript
const parent = {
  greet: function () {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent);
child.greet = function () {
  console.log("Hello from child!");
};

child.greet(); // Logs: "Hello from child!"
```
