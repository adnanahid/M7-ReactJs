// myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };
// console.log(myObj.myCars.car2)
// console.log(myObj['myCars']['car2'])

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Stringify Object
let myString = JSON.stringify(person);
console.log(myString);

// Build a Text
//   let text = "";
//   for (let x in person) {
// text += person[x] + " ";
// console.log(person[x]);
//   };
//   console.log(text);
