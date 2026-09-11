// เฉลย

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => {
    const a = user.address;
    return {
      name: user.name,
      address: `${a.street} ${a.suite} ${a.city} ${a.zipcode}`,
    };
  });
}

getUsers().then((result) => console.log(result));
