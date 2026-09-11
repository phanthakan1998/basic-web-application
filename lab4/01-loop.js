function run() {
  let fruits = ["apple", "banana", "orange"];

  // for loop
  for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
  }
  // Output: 0 apple
  // Output: 1 banana
  // Output: 2 orange

  // for ... of (วนค่าใน array)
  for (let fruit of fruits) {
    console.log(fruit);
  }
  // Output: apple
  // Output: banana
  // Output: orange

  // forEach
  fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
  });
  // Output: 0: apple
  // Output: 1: banana
  // Output: 2: orange

  // map (สร้าง array ใหม่จากของเดิม)
  let numbers = [1, 2, 3, 4];
  let doubled = numbers.map((n) => n * 2);
  console.log(doubled); // Output: [ 2, 4, 6, 8 ]

  let upper = fruits.map((fruit) => fruit.toUpperCase());
  console.log(upper); // Output: [ 'APPLE', 'BANANA', 'ORANGE' ]
}
run();
