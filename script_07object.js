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
sum = 0
for (let i=0;i<studentsB.length;i++){
sum = sum + studentsB[i].age
}
console.log(sum/studentsB.length)

console.log("-------------------------------------------------")

//Name with skills

for (let i=0;i<studentsB.length;i++){
    if(studentsB[i].Skills.indexOf("python")>=0){
        console.log(studentsB[i].firstName)
    }
}

let firstNamee = "karan"
let lastNamee = "jadhav"
console.log(`My first name is ${firstNamee} and my last name is ${lastNamee}`)

let ghg = [23,56,43,78,]
for (let i=0;i<ghg.length;i++){
    console.log(i)
    console.log(ghg[i])
}

console.log("---------------------------------------------------------")

let person3 = {
    firstName : "abhi",
    LastName : "Dhaide",
    age : 25
}
for (keys in person3){
    console.log(keys)
    console.log(person3[keys])
}




















