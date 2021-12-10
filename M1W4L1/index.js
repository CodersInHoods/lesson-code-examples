const users = ["Alex", "Tom", "Sam", "Vasile"];

const user = {
  name: "Alex",
  age: 25,
  city: "London",
};


function greet(name) {
  return `Hello ${name}`;
}

function map(callback) {
  const values = [];
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const processedUser = callback(user);
    values.push(processedUser);
  }

  return values;
}

console.log(map(greet));
