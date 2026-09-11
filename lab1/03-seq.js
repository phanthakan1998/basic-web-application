function run() {
  var one = "One";
  let two = "Two";
  {
    var three = "Three";
    let four = "Four";
  }
  console.log(one);
  console.log(two);
  console.log(three);
  // console.log(four);
}
run();
