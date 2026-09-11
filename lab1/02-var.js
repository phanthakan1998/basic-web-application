function run() {
  var a = "ใช้ var ได้";
  let b = "ใช้ let ได้";
  const c = "ใช้ const ได้";

  console.log(a);
  console.log(b);
  console.log(c);

  let score = 1;
  console.log(score); // Output: 1      (let เปลี่ยนค่าได้)
  score = 2;
  console.log(score); // Output: 2      (let เปลี่ยนค่าได้)

  const PI = 3.14;
  console.log(PI);
}
run();
