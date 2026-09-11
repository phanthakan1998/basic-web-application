function run() {
  // if / else
  let score = 45;
  if (score >= 50) {
    console.log("สอบผ่าน");
  } else {
    console.log("สอบไม่ผ่าน"); // Output: สอบไม่ผ่าน
  }

  // if / else if / else
  let grade = 75;
  if (grade >= 80) {
    console.log("เกรด A");
  } else if (grade >= 70) {
    console.log("เกรด B"); // Output: เกรด B
  } else if (grade >= 60) {
    console.log("เกรด C");
  } else {
    console.log("เกรด F");
  }

  // เงื่อนไขซ้อน (nested if)
  let isMember = true;
  let total = 1200;
  if (isMember) {
    if (total >= 1000) {
      console.log("ลด 10%"); // Output: ลด 10%
    } else {
      console.log("ลด 5%");
    }
  } else {
    console.log("ไม่มีส่วนลด");
  }

  // เงื่อนไขหลายอย่างด้วย && และ ||
  let username = "admin";
  let password = "1234";
  if (username === "admin" && password === "1234") {
    console.log("เข้าสู่ระบบสำเร็จ"); // Output: เข้าสู่ระบบสำเร็จ
  } else {
    console.log("username หรือ password ไม่ถูกต้อง");
  }
}
run();
