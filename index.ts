type Person = {
  name: string;
  age: number;
  address: string;
};

function greet(a: Person) {
  return console.log(`Hello my name is ${a.name}`);
}

greet({
  name: "Ubaidillah",
  age: 26,
  address: "Sidoarjo",
});
