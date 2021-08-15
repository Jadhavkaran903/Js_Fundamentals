// 19 july 2021

let friend = {
  name1: "prasad dhavle",
  age: 25,
  address: "Akluj",
  id: 67,
};
console.log(friend.address); //Dot notation
console.log(friend["name1"]); //Bracket notation

console.log("------------------------------------------");

let cafe = {
  cafename: "YD Cafe",
  address: "Karvenagar",
  Time: "10 am to 7 pm",
  quote: function () {
    console.log("Welcome to YD Cafe");
  },
};
console.log(cafe);
cafe.quote();

console.log("------------------------------------------");

let candidate = {
  Firstnaam: "karan",
  Surname: "Jadhav",
  Age: 25,
  Address: "Karvenagar",
  Skills: ["css", "SQL", "python", "GIT"],
  is18plus: true,
  Family: {
    Father: "Rajendra",
    Mother: "Sharda",
    Sister: "Sakshi",
  },
};

console.log(candidate.Family);
console.log(candidate["Address"]);
console.log(candidate.Skills[3]);

console.log("-------------------------------------------");

let bike = {
  colour: "maroon",
  model: "sport",
  price: "1.85-1.95 lakhs",
};
console.log(bike.colour);
console.log(bike["price"]);

console.log("-------------------------------------------");

//Updating a value in object
bike.colour = "black";
console.log(bike);
bike.model = "Retro";
console.log(bike);

console.log("-------------------------------------------");

//Inserting a value in object

bike.company = "honda";
console.log(bike);
bike.bikename = "Highness CB350";
console.log(bike);

console.log("-------------------------------------------");

//Loops in objects
//NOTE--->Dot notation does not work in loops in objests

let employee = {
  NameA: "Vishwas",
  surnameA: "jejurkar",
  companyA: "Force motors",
  Salary: 25000,
};
let keys = Object.keys(employee);
console.log("keys", keys);

console.log("--------------------------------------------");

let personC = {
  fullName: "sairaj sawant",
  age: 24,
  launguge: "hindi",
};
let keyss = Object.keys(personC);
console.log("keys", keyss);
