// closures are function
function Outer(){
  let counter = 3;
  return function Inner(){
    counter++;
    return counter;
  }
}

let increment = Outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// it is hold the value of counter variable and it does not forgeting the updated value of it.
