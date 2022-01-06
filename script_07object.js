//11 Aug 2021

let candidate = ["karan", "jadhav", 25, 31];
console.log(candidate[0]);
console.log(candidate.length);

let candidate2 = {
  firstName: "Karan",
  lastname: "jadhav",
  age: 25,
  rollNo: 42,
};
delete candidate2.rollNo;
console.log(candidate2);

let studentsB = [
  {
    firstName: "prasad",
    LastName: "dhavle",
    age: 25,
    Skills: ["javascript", "cypress", "css", "python"],
  },
  {
    firstName: "sairaj",
    LastName: "sawant",
    age: 24,
    Skills: ["python", "java", "html"],
  },
  {
    firstName: "yogesh",
    LastName: "salunke",
    age: 27,
    Skills: ["c++", "python", "javascript"],
  },
];
console.log(studentsB[0]["Skills"].length);
console.log(studentsB[0]["firstName"]);

for (let i = 0; i < studentsB.length; i++) {
  if (studentsB[i].age > 25) {
    console.log(studentsB[i].firstName);
  }
}

//Average
sum = 0;
for (let i = 0; i < studentsB.length; i++) {
  sum = sum + studentsB[i].age;
}
console.log(sum / studentsB.length);

console.log("-------------------------------------------------");

//Name with skills

for (let i = 0; i < studentsB.length; i++) {
  if (studentsB[i].Skills.indexOf("python") >= 0) {
    console.log(studentsB[i].firstName);
  }
}

let firstNamee = "karan";
let lastNamee = "jadhav";
console.log(`My first name is ${firstNamee} and my last name is ${lastNamee}`);

let ghg = [23, 56, 43, 78];
for (let i = 0; i < ghg.length; i++) {
  console.log(i);
  console.log(ghg[i]);
}

console.log("---------------------------------------------------------");

let person3 = {
  firstName: "abhi",
  LastName: "Dhaide",
  age: 25,
};
for (keys in person3) {
  console.log(keys);
  console.log(person3[keys]);
}

console.log("---------------------------------------------------------");

//Destructuring

//Array

let firstname = ["govind", "karan", "laukik", "kiran"];

let [student01, student02, student03, student04] = firstname;
console.log(student01);
console.log(student02);
console.log(student03);
console.log(student04);

let body = {
  students: [
    {
      firstname: "govind",
      age: 25,
    },
    {
      firstname: "karan",
      age: 26,
    },
    {
      firstname: "laukik",
      age: 27,
    },
    {
      firstname: "kiran",
      age: 25,
    },
  ],
};

let [candidate01, candidate02, candidate03, candidate04] = body.students;

console.log(candidate01);
console.log(candidate02);
console.log(candidate03);
console.log(candidate04);

//Object

let person = {
  firstnamew: "karan",
  age: 25,
  language: ["hindi", "english"],
};
let { firstnamew, age, language } = person;

console.log(firstnamew);
console.log(age);
console.log(language);

//Spread operator

//When there is known numbers of elements

let numbD = [25, 2, 26, 59, 85, 65, 14];

function add(a, b, c, d) {
  console.log(a + b + c + d);
}
add(...numbD);

//Rest operator

//When there is n number of elements

function add(...a) {
  return a.reduce(function (acc, el) {
    return acc + el;
  });
}

let mrf = add(12, 34, 64, 97, 24, 76, 24, 776, 345, 764);
console.log(mrf);

console.log("-------------------------------------------------------");

let counter = {
  count: 0,
  next: function () {
    console.log(this);
    let rc = (this.count = this.count + 1);
    return rc;
  },
};
let rc = counter.next();
console.log(rc);

console.log(this);

//------------------------------------------>
var fc = 10;
console.log(window.fc);

function movie() {
  console.log(this === window);
}
movie();
window.movie();

//------------------------------------------>

//Bind method---->creates a new function that, when called, has its this keyword set to the provided value.

let bike = {
  brand: "honda",
  getBrand: function () {
    return this.brand;
  },
};
let bike2 = {
  brand: "Royal Enfield",
};

let r = bike.getBrand();
console.log(r);                           //honda

let b = bike.getBrand.bind(bike2);
console.log(b());                      //Royal Enfield

//------------------------------------------------>

//Call method---->allows for a function/method belonging to one object to be assigned and called for a different object.

function getCompany(prefix) {
  console.log(prefix + this.brand);
}

let Highness = {
  brand: "Honda",
};

let Bullet = {
  brand: "Royal Enfield",
};

getCompany.call(Highness, "One of the best brand is ");
getCompany.call(Bullet, "One of best seller brand is ");

//Apply method---->We have to pass second parameter in array

getCompany.apply(Highness, ["One of the best brand is "]);
getCompany.apply(Bullet, ["One of best seller brand is "]);

//-------------------------------------------------------->

let personX = {
  age: 12,
  fullname: "karan",
  display: function () {
    return [12, 34];
  },
};

let [a, bb] = personX.display();
console.log(a);
console.log(bb);

//--------------------------------------------------->

let adda = function () {
  return 10 + 12;
};

function addition(a) {
  return a;
}

let f = addition(adda);
let addb = f();
console.log(addb);

// -------------------------------------------------->

let persony = {
  age: 25,
  fullname: "karan",
  display: function () {
    return this.age;
  },
};

let persony2 = {
  age: 23,
  fullname: "Karan Jadhav",
};

console.log(persony["age"]); //1st way to print output

let aada = persony.display(); //2nd way to print outout
console.log(aada);

//---------------------------------------------------->

let pson = {
  age: 12,
  fullname: "Karan Jadhav",
};

let rd = function (bc) {
  return bc + this.fullname;
};

console.log(rd.call(pson, "You are welcome ")); //Call method
console.log(rd.call(pson, "Automation Tester "));

console.log(rd.apply(pson, ["You are welcome "])); //Apply method
console.log(rd.apply(pson, ["Automation Tester "]));

//----------------------------------------------------->

let gt = {
  nam: "Karan Jadhav",
  age: 25,
  display: function () {
    console.log("Welcome " + this.nam);
    greet = () => {
      console.log("Welcome " + this.nam);
    };
    greet();
  },
};

gt.display()

// let disp=g.display()
// console.log(disp)
