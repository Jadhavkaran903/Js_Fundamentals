//20 aug 2021

//Problem 1---->Reversing the string elements

let string1 = "i am new to javascript";
let splittedString1 = string1.split(" ");
let newString1 = [];

function revString(namei) {
  revStr = "";
  for (let i = 0; i < namei.length; i++) {
    revStr = namei[i] + revStr;
  }
  return revStr;
}
for (let i = 0; i < splittedString1.length; i++) {
  newString1.push(revString(splittedString1[i]));
}
console.log(newString1.join(" "));

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 2---->Fetching highest and lowest number in array

let numArray = [21, -65, 43, 98, -23, 98, 56, -37];
let highest = 0;
let lowest = numArray[0];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > highest) {
    highest = numArray[i];
  } else if (numArray[i] < lowest) {
    lowest = numArray[i];
  }
}
console.log(highest);
console.log(lowest);

console.log(
  "----------------------------------------------------------------------------------------------"
);
//Problem 3---->Reversing the string

let strA = "Karan,prasad,yogesh,Prataprao";
let strB = "";

for (let i = strA.length - 1; i >= 0; i--) {
  strB += strA[i];
}

console.log(strB);

let revStrC = strA.split(",").reverse();
console.log(revStrC);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 4

let pm = "MmodiI";
let namo = "";
for (let i = 0; i < pm.length; i++) {
  if (i != 0 && i != pm.length - 1) {
    namo = namo + pm[i];
  }
}
console.log(namo);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 5---->python.py extract py

let lang = "python.py";
let sep = lang.split(".");
console.log(sep[sep.length - 1]);

//or

let pton = "python.py";
let pyyp = "";
for (let i = 0; i < pton.length; i++) {
  if (i == pton.length - 1 || i == pton.length - 2) {
    pyyp = pyyp + pton[i];
  }
}
console.log(pyyp);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 6---->

let prack = [
  [1, 2, 5],
  [4, 6, -9],
  [100, -200, -300],
];
let blankArry = [];
for (let i = 0; i < prack.length; i++) {
  for (let j = 0; j < prack[i].length; j++) {
    blankArry.push(prack[i][j]);
  }
}
console.log(blankArry);

let highValue = 0;
let lowValue = blankArry[0];
for (let k = 0; k < blankArry.length; k++) {
  if (blankArry[k] > highValue) {
    highValue = blankArry[k];
  } else if (blankArry[k] < lowValue) {
    lowValue = blankArry[k];
  }
}
console.log(highValue);
console.log(lowValue);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 7---->find out count of word in given string

let fruits = "apple chiku apple mango apple grapes apple";
let spr = fruits.split(" ");

let count = 0;
for (let a = 0; a < spr.length; a++) {
  if (spr[a].includes("apple")) {
    count++;
  }
}
console.log(count);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//problem 8---->Count the vowels from given string

let song =
  "i tried so hard and got so far But in the end it doesn't even matter";
let count1 = 0;
for (let s = 0; s < song.length; s++) {
  if (
    song[s] == "a" ||
    song[s] == "e" ||
    song[s] == "i" ||
    song[s] == "o" ||
    song[s] == "u"
  ) {
    count1++;
  }
}
console.log(count1);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 9---->Sorting the array have differant type of elements

let multiArray = [
  67,
  "karan",
  "rajshree",
  -22,
  "pratiksha",
  4,
  "abhijeet",
  "laukik",
  -365,
];
let digits = [];
let alphabets = [];
for (let m = 0; m < multiArray.length; m++) {
  if (typeof multiArray[m] == "number") {
    digits.push(multiArray[m]);
  } else {
    alphabets.push(multiArray[m]);
  }
}
digits.sort(function (a, b) {
  return a - b;
});

alphabets.sort();

let newArray = digits.concat(alphabets);
console.log(newArray);

console.log(
  "----------------------------------------------------------------------------------------------"
);
