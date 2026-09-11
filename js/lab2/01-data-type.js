function run() {
  // string
  let name = "สมชาย";
  let greeting = "สวัสดี";
  let message = `${greeting} ${name}`;
  console.log(message); // Output: สวัสดี สมชาย
  console.log(typeof name); // Output: string

  // number (int / float)
  let age = 25;
  let price1 = 99.5;
  let price2 = 99.5;
  console.log(age); // Output: 25
  console.log(price1); // Output: 99.5
  console.log(price2); // Output: 99.5
  console.log(price2 + price1); // Output: 199

  console.log(typeof age); // Output: number

  // boolean
  let isActive = true;
  let isAdmin = false;
  console.log(isActive); // Output: true
  console.log(typeof isAdmin); // Output: boolean

  // object
  let person = {
    name: "สมหญิง",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
  };
  console.log(person); // Output: { name: 'สมหญิง', age: 30, isStudent: false, hobbies: [ 'reading', 'coding' ] }
  console.log(person.name); // Output: สมหญิง
  console.log(person.hobbies[1]); // Output: coding
  console.log(typeof person); // Output: object

  // array
  let fruits = ["apple", "banana", "orange"];
  let numbers = [1, 2, 3, 4, 5];
  console.log(fruits); // Output: [ 'apple', 'banana', 'orange' ]
  console.log(fruits[0]); // Output: apple
  console.log(fruits.length); // Output: 3
  console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]
}
run();
