//11 aug 2021

class person {
  age = null;
  roll = null;
  fullName = null;

  setAge(a) {
    this.age = a;
  }

  setRoll(roll) {
    this.roll = roll;
  }
  setfullname(name) {
    this.fullName = name;
  }
}
//setting properties using this function
let vaibhav = new person();
vaibhav.setAge(22);
console.log(vaibhav.age);

vaibhav.setRoll(45);
console.log(vaibhav.roll);

console.log("-----------------------------------------------");

//setting properties outside the class

let sakshi = new person();
sakshi.age = 21;
sakshi.roll = 65;
sakshi.fullName = "sakshi jadhav";

console.log(sakshi);

console.log("-------------------------------------------------------");

//setting properties with the constructor

class personT {
  constructor(fullName, age, rollNo) {
    (this.fn = fullName), (this.ag = age), (this.rn = rollNo);
  }
}
let sakshiJ = new personT("Sakshi jadhav", 21, 65);
console.log(sakshiJ);

console.log("-----------------------------------------");

//18 Aug 2021

class Bank {
  constructor(name, accountNo, bal) {
    (this.fullName = name),
      (this.accNo = accountNo),
      (this.transactions = []),
      (this.bal = bal);
  }
  deposit(amount) {
    this.transactions.push(amount);
    this.bal = this.bal + amount;
    console.log(`The amount of ${amount} added to your account`);
    console.log(`Your current bal is ${this.bal}`);
    return this.bal;
  }
  withdraw(amount) {
    if (amount < this.bal) {
      this.transactions.push(-amount);
      this.bal = this.bal - amount;
      console.log(`The amount of ${amount} deduced from your account`);
      console.log(`Your current bal is ${this.bal}`);
      return this.bal;
    } else {
      console.log(`insufficent bal to withdraw`);
    }
  }
  totalTransactions(arr) {
    let tt = arr.reduce(function (acc, el) {
      return acc + Math.abs(el);
    }, 0);
    return tt;
  }
  lastFiveTransactions(arr) {
    let lft = arr.slice(-5);
    console.log(lft);
  }
  totalDeposit(arr) {
    let td = arr
      .filter(function (el) {
        return el > 0;
      })
      .reduce(function (acc, el) {
        return acc + el;
      }, 0);
    return td;
  }
  totalWithdraw(arr) {
    let tw = arr
      .filter(function (el) {
        return el < 0;
      })
      .reduce(function (acc, el) {
        return acc + Math.abs(el);
      }, 0);
    return tw;
  }
}

let karan1 = new Bank("karan", 9970038766, 100);
karan1.deposit(1000);
karan1.withdraw(500);
karan1.deposit(4000);
karan1.withdraw(600);
karan1.deposit(9000);
karan1.withdraw(1000);
console.log(karan1.transactions);
//---------------------------------------------------------
karan1.lastFiveTransactions(karan1.transactions);
//---------------------------------------------------------
let tt2 = karan1.totalTransactions(karan1.transactions);
console.log(tt2);
//---------------------------------------------------------
let td2 = karan1.totalDeposit(karan1.transactions);
console.log(td2);
//---------------------------------------------------------
let tw2 = karan1.totalWithdraw(karan1.transactions);
console.log(tw2);
//---------------------------------------------------------

//Passing function as a parameter to another function

//
let birthyear = [2000, 2004, 1996, 1997, 2003, 2006];
let birthyear2 = [2001, 2005, 1998, 2000, 2007, 2009];

function printarray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2021 - arr[i]);
  }
  return newArr;
}

function printarray10(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 10);
  }
  return newArr;
}

let f = printarray(birthyear);
let g = printarray(birthyear2);
console.log(f);
console.log(g);
//-------------------------------------------------------
let ff = printarray10(birthyear);
let gg = printarray10(birthyear2);
console.log(ff);
console.log(gg);
//-------------------------------------------------------
let birthyear3 = [2001, 2005, 1998, 2000, 2007, 2009];
let namess = ["Karan", "Prasad", "Abhi", "sairaj", "laukik", "govind"];

function printaray(arr, fn) {
  let NewArray = [];
  for (let i = 0; i < arr.length; i++) {
    NewArray.push(fn(arr[i]));
  }
  return NewArray;
}

let greeting = function (el) {
  return `Welcome ${el}!`;
};
console.log(printaray(namess, greeting));
//--------------------------------------------------------

let age = function (el) {
  return 2021 - el;
};

let tenAge = function (el) {
  return el + 10;
};

let fiveMinus = function (el) {
  return el - 5;
};

let tenPercent = function (el) {
  return el * 0.1;
};

console.log(printaray(birthyear3, age));
console.log(printaray(birthyear3, tenAge));
console.log(printaray(birthyear3, fiveMinus));
console.log(printaray(birthyear2, tenPercent));

//----------------------------------------------------------

let joiningYear = [2011, 2015, 2014, 2016, 2020, 2009];
let namesA = [
  "Karan Jadhav",
  "Prasad Dhavle",
  "Abhieet Dhaide",
  "Pratiksha Palve",
  "Tushar Hande",
  "Ashutosh Chukekar",
];

function Service(arr) {
  let years = [];
  for (let i = 0; i < arr.length; i++) {
    years.push(2021 - arr[i]);
  }
  return years;
}

function ServiceA(arr) {
  let years = [];
  for (let i = 0; i < arr.length; i++) {
    years.push(58 - (2021 - arr[i]));
  }
  return years;
}
let ServiceDone = Service(joiningYear);
console.log(`Service provided [${ServiceDone}] years`);

let ServiceRemain = ServiceA(joiningYear);
console.log(`Service remaining until your age is[${ServiceRemain}] years`);

for (let k = 0; k < namess.length; k++) {
  console.log(
    "Thank you Mr/Miss",
    namesA[k],
    "for your",
    ServiceDone[k],
    "years of service"
  );
}
let sorted = ServiceDone.sort(function (a, b) {
  return b - a;
});
console.log(sorted);

//-----------------------------------------------------------------------------

//Lexial scope--->Child element can access the properties and methods of parent elmenet

function addA(x, y) {
  console.log(x + y);
  let h = 10;
  let v = 20;

  addB();
  function addB() {
    let j = 10;
    let d = 20;

    console.log(h + v);
    console.log(j + d);

    function addC() {
      console.log(h + v + j + d);
    }
    addC();
  }
}
addA(12, 13);

//19 Aug 2021

class Grandfather {
  constructor(gname, lastname, age) {
    (this.gname = gname), (this.lastname = lastname), (this.age = age);
  }
  displayName() {
    console.log(`My name is ${this.gname} and my lastname is ${this.lastname}`);
  }
}

class Father extends Grandfather {
  constructor(gname, lastname, age, fname, fage) {
    super(gname, lastname, age);
    (this.fname = fname), (this.fage = fage);
  }
  displayName() {
    console.log(`My name is ${this.fname} and my lastname is ${this.lastname}`);
  }
}
class son extends Father {
  constructor(gname, lastname, age, fname, fage, sname, sage) {
    super(gname, lastname, age, fname, fage);
    (this.sname = sname), (this.sage = sage);
  }
  displayName() {
    console.log(`My name is ${this.sname} and my lastname is ${this.lastname}`);
  }
}

let Karan11 = new son("Govindrao", "Jadhav", 72, "Rajendra", 50, "Karan", 25);
Karan11.displayName();
let Rajendra1 = new Father("Govindrao", "Jadhav", 72, "Rajendra", 50);
Rajendra1.displayName();
let Govindrao1 = new Grandfather("Govindrao", "Jadhav", 72);
Govindrao1.displayName();
