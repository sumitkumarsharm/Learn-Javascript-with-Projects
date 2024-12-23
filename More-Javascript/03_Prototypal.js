function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello I am ${this.name}`);
};

// let Name = new Person("Sumit Sharma");
// Name.greet();

// overridding the inherited properties
function Names(Allow) {
  this.name = Allow;
}

Names.prototype.eat = function () {
  console.log(`I am Eating ${this.name}`);
};

let Result2 = new Names("Biriyani");
Result2.eat = function () {
  console.log(`I am Eating Mango`);
};

Result2.eat();