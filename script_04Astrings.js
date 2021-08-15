// 9 july 2021

// strings

let firstNum = "karan";
console.log(typeof firstNum);
console.log(firstNum.length);

let cap = firstNum.toUpperCase();
console.log(typeof cap);
console.log(cap);

console.log("-----------------------------");

let lower = firstNum.toLowerCase();
console.log(typeof lower);
console.log(lower);

let count = firstNum.toUpperCase().toLowerCase().length;
console.log(count);

let firstName2 = "amol";
let e = firstName2.indexOf("o");
console.log(typeof e);
console.log(e);

console.log("----------------------------------------------------------------");

// 03 Aug 2021

// Concatination

let firstName = "karan";
console.log("my first name is" + " " + firstName);

// String interpolation

console.log(`my first name is ${firstName}`);
console.log(`my firstname is ${8 + 9}`);

// Conversion

let myName = "karan";
let age = 20;
let rollNumber = 42;
console.log(rollNumber + myName + age);
console.log(myName + age + rollNumber);

// Include---->Return boolean value
let sister = "sakshi";
console.log(sister.includes("ksh"));

let flowers = "rose lotus daisy lily jasmine sunflower";
let userInput = "lily";
if (flowers.includes(userInput)) {
  console.log("flower is available");
} else {
  console.log("flower is not available");
}

console.log("--------------------------------------------------------");

// Slice------>return string

let bornName = "Indrajeet";
let gg = bornName.slice(2, 6);
console.log(gg);
console.log(typeof gg);
console.log(gg.toUpperCase());

console.log(bornName.slice(-5, -1));
console.log(bornName.slice(-1, -6)); //Strarting postion should be before than ending position

console.log(bornName.slice(-3));

console.log("------------------------------------------------------------");

// Substing

let homeAddress = "Anand vihar";
let substing = homeAddress.substring(3, 5);
console.log(substing);

console.log("---------------------------------------------------------");

// 5 aug 2021
let ba = ["karan", "prasad", "sairaj", "kiran"]; //printing names have charecter less than 6

let gag = ba.filter(function (el) {
  return el.length < 6;
});
console.log(gag);

let numbs = ["karan:9545465437", "raji:9970038766", "abhi:9921203484"];
// extracing the cell number in array

// using loop

let mob = [];
for (i = 0; i < numbs.length; i++) {
  mob.push(numbs[i].substr(-10));
}
console.log(mob);

// using map method

let yay = numbs.map((el) => {
  return el.substr(-10);
});
console.log(yay);

// Trim method
let newfirstname = "karan jadhav";
let trimmed = newfirstname.trim();
console.log(trimmed);

// replace
let city = [
  "i live in nagpur city i live in bombay", //replace nagpur & nashik with mumbai & nanded
  "i live in nashik city i live in parbhani",
];

let updatedCity = [];
for (i = 0; i < city.length; i++) {
  if (city[i].includes("nagpur")) {
    updatedCity.push(city[i].replace("nagpur", "mumbai"));
  } else if (city[i].includes("nashik")) {
    updatedCity.push(city[i].replace("nashik", "nanded"));
  }
}
console.log(updatedCity);

//CharAt
let ha = "karan"
let j = ha.charAt(2)
console.log(j)

//CharCodeAt----------->print alies value of charecter
 let had = "javascript"
 let k = had.charCodeAt(4)
 console.log(k)


// Split method---------->This method convert string into array of substring

let yaa = "karan abhi prasad sairaj"
let kjk = yaa.split(" ")
console.log(kjk)

let bart = "karan : 9545465437"
let fullnaam = bart.split(":")
console.log(fullnaam)

let fullNmaeSplite = "karan jadhav"
console.log(`welcome Mr.${fullNmaeSplite.split()[0]} !`)

//Padstart method----->Pad the string from start to another string until it reaches to the given length
console.log("9545465437".padStart(14,"+91-"))

//Padend method----->Pad the string at end to another string until it reaches to the given length
console.log("9545465437".padEnd(16,"[Home]"))















