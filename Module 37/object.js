const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "gaming", "coding"],
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};
const values = Object.values(person);
console.log(values);