# Asynchronous Javscript

**Asynchronous programming allows operations to run in the background, enabling the program to continue executing other tasks without waiting for the operation to complete**

-`Non-blocking Execution` : Asynchonous Code dose not block the main thread while an Asynchonous operation is being executed

- `Concourrency` : Multiple tasks can be executed at the same time without blocking Each others

- `Callback` : A callback is a function that is passed as an argument to another function and is executed when the operation is completed

Example:

```javascript
console.log("Start");

function add(a, b, callback) {
  setTimeout(() => {
    console.log("this happend Asybnchronously after 2 seconds");
  }, 2000);
}
console.log("End");

// output:-  Start End this happend Asybnchronously after 2 seconds
```

```javascript
const Promises = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved");
  }, 1000);
});

Promises.then((data) => console.log(data)).catch((err) => console.log("error"));
```

### use case for Asynchronous programming

- **Fetching Data from an API**

- **Readin/Writting Files**

- **Processing events like user interactions.**

- **Performing tasks that involve timers.**

