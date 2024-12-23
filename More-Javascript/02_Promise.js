// Promise in javascript :- it is also Asynchronouse in nature in javscript
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

console.log(myPromise);
myPromise
  .then((data) => {
    console.log(data);
    // return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Code is Rerturn sumtjhing");
  });
