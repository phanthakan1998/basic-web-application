// ========================================
// QUIZ: เรียก API แล้วแปลงข้อมูล
// ========================================
//
// ลิงค์ API: https://jsonplaceholder.typicode.com/users
//
// โจทย์:
//   สร้าง function ที่ call API ข้างบน (return เป็น array ของ user)
//   แล้วแปลงข้อมูลของ "ทุกคน" ให้เป็น object ที่มีแค่ 2 key:
//     - name    : ชื่อ (user.name)
//     - address : user.address.street + suite + city + zipcode (รวมเป็น string เดียว)
//
//   ผลลัพธ์ที่ต้องการ เช่น:
//     [
//       { name: "Leanne Graham", address: "Kulas Light Apt. 556 Gwenborough 92998-3874" },
//       ...
//     ]
//
// หมายเหตุ: Node.js 18+ มี fetch ให้ใช้ได้เลย

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // TODO: เขียนโค้ดตรงนี้
}

getUsers().then((result) => console.log(result));
