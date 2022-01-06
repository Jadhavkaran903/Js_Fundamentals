// // // let cart = [{
// // //     name1:'smartphone',
// // //     qty:2,
// // //     price:500,
// // //     freeofcharge:false
// // // },
// // // {
// // //     name2:'tablet',
// // //     qty:1,
// // //     price:800,
// // //     freeofcharge:false

// // // }];

// // // let newCart = cart.flatMap((item)=>{
// // //     if(item.name==='smartphone'){
// // //         return[item,{
// // //             name1:'screen protector',
// // //             qty:item.qty,
// // //             price:5,
// // //             freeofcharge:true
// // //         }]
// // //     }else {
// // //         return[item];
// // //     }
// // // })
// // // console.log(newCart)

// // let candidate = {
// //     Firstnaam: "karan",
// //     Surname: "Jadhav",
// //     Age: 25,
// //     Address: "Karvenagar",
// //     Skills: ["css", "SQL", "python", "GIT"],
// //     is18plus: true,
// //     Family: {
// //         Father: "Rajendra",
// //         Mother: "Sharda",
// //         Sister: "Sakshi",

// //     }
// // }
// // let dfg = ["karan","jadhav"]
// // console.log(candidate.Skills[2])

// console.log("------------------------------------------------------------------------------")

// // console.log(dfg[4])
// // console.log(candidate.Family)
// // console.log(candidate['Address'])
// // console.log(candidate.Skills[3])

// console.log("-------------------------------------------")

// let home =["hall","bedrooms","kitchen"]
// home.pop()
// console.log(home)

// home.push("kitchen")
// console.log(home)

// home.shift()
// console.log(home)

// home.unshift("hall")
// console.log(home)

// home.fill("bathroom",0,1)
// console.log(home)

// home.splice(1,2,"store room")
// console.log(home)

// for (let i=0;i < tfg.length;i++){
//     console.log(tfg)
// }

//
// for (let i=tfg.length-1;i>=0;i--){
//     // console.log(tfg[i])
//     console.log(tfg)
// }

// let launguges = ["Marathi", "Hindi", "Urdu", "Telgu", "English"]

// console.log(launguges.slice(1,3))
// console.log(launguges.slice(0,1))

// let agesr = [22, 35, 66, 77, 87, 45, 55, 66]
// agesgrFIfty=[]
// for (let i=0;i<agesr.length;i++){
//     if(agesr[i]>50){
//         agesgrFIfty.push(agesr[i])
//     }

// }
// console.log(agesgrFIfty)

// let ages = [22, 35, 66, 77, 87, 45, 55, 66]

// ageslessthansixty=[]
// for (i=0;i<ages.length;i++){
//     if(ages[i]<60){
//         ageslessthansixty.push(ages[i])
//     }
// }
// console.log(ageslessthansixty)

// let points = [22, 35, 66, 77, 87, 45, 55, 66]

// let cc=points.reduce(function(acc,el,index,arr){
//     return acc+el
// })

// console.log(cc)

// let reminder = points.map(function(el,index,arr){
//     return 120 -el
// })
// console.log(reminder)

// let namesOfStudents = ["chinmay", "sarika", "karan", "prem", "preeti"]

// let proff =namesOfStudents.forEach(function(el,index,arr){
//     console.log(`professor ${el}`)
// })
// console.log(proff)

// let fourletter = namesOfStudents.filter(function(el,index,arr) {
//     return el.length==6
// })
// console.log(fourletter)

// let friend = {
//     name1: "prasad dhavle",
//     age: 25,
//     address: "Akluj",
//     id: 67
// }
// console.table(friend)

// console.log(`hey my friend name is ${friend.name1} and he is from ${friend.address}.`)

class Bank {
  constructor(name, accno, balance) {
    this.name = name;
    this.accno = accno;
    this.balance = balance;
    this.transactions = [];
  }
  deposite(amo) {
    this.transactions.push(amo);
    this.bal = this.bal + amo;
    console.log(`the amount added is ${amo} in account`);
    console.log(`your current bal is ${this.balance}`);
    return this.balance;
  }
  withdraw(amo) {
    if (amo < this.balance) {
      this.transactions.push(-amo);
      this.balance = this.balance - amo;
      console.log(`the amount deducted is ${amo}from account`);
      console.log(`your current balance is ${this.balance}`);
      return this.balance;
    } else {
      console.log(`insufficent bal to withdraw`);
    }
  }
  totalTransaction(array) {
    let totalT = array.reduce(function (acc, el) {
      return acc + Math.abs(el);
    }, 0);
    return totalT;
  }

  totalDeposit(array) {
    let totalD = array
      .filter(function (el) {
        return el > 0;
      })
      .reduce(function (acc, el) {
        return acc + el;
      }, 0);
    return totalD;
  }
  totalWithdraw(array) {
    let totalW = array
      .filter(function (el) {
        return el < 0;
      })
      .reduce(function (acc, el) {
        return acc + Math.abs(el); ///abs=absolute value
      }, 0);
    return totalW;
  }
  LastFiveTransaction(array) {
    let LastFive = array.slice(-5);
    console.log(LastFive);
  }
}

let prati = new Bank("prati", 123, 1000);
console.log("deposited amount in account");
prati.deposite(1000); //1
console.log("withdraw amount from account");
prati.withdraw(500); //2
prati.deposite(1500); //3
prati.withdraw(200); //4
prati.deposite(2000); //5
prati.withdraw(100); //6
prati.deposite(3000); //7
prati.withdraw(150); //8

console.log(prati.transactions);

console.log("total transaction");
let totalTt = prati.totalTransaction(prati.transactions);
console.log(totalTt);

console.log("total deposit amount");
let totalDd = prati.totalDeposit(prati.transactions);
console.log(totalDd);

console.log("total withdraw amount");
let totalWw = prati.totalWithdraw(prati.transactions);
console.log(totalWw);

console.log("last five amount");
prati.LastFiveTransaction(prati.transactions);

//-------------------------------------------------------------

let joiningYear = [2011, 2015, 2014, 2016, 2020, 2009];
let namess = ["Karan Jadhav", "Prasad Dhavale", "Abhieet Dhaide", "Pratiksha Palve", "Tushar Hande", "Ashutosh Chukekar"];

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

for(let k=0;k<namess.length;k++){
  console.log("Thank you Mr/Miss",namess[k],"for your",ServiceDone[k],"years of service")
}

let sorted =ServiceDone.sort(function(a, b){return b-a})
console.log(sorted)

