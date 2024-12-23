## Promise in javascript

it is object representing the eventual completion or failure of an asynchronous operation

## Creating a Promise

Example:
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let Success = true;
    if (Success) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }, 3000);
});
```

## Using promises

you can use the .then(), .catch(), and .finally() methods:

- `then(onFulfilled, onRejected)`: Adds fulfillment and rejection handlers to the promise.

- `catch(onRejected)`: Adds a rejection handler to the promise.

- `finally(onFinally)`: Adds a finalization handler to the promise

Example:

```javascript
myPromise
  .then((value) => {
    // Handle fulfillment
      // return 'Sumit Sharma';
  })
  .then((value) => {
      console.log(value);
    //output:-   sumit Sharma 
  })
  .catch((error) => {
    // Handle rejection
  })
  .finally(() => {
    // Execute code regardless of outcome
  });
```


