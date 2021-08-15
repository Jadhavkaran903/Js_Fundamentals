//11 aug 2021

class person{
    age=null
    roll=null
    fullName=null

    setAge(a){
        this.age=a
    }

    setRoll(roll){
        this.roll=roll
    }
    setfullname(name){
        this.fullName=name
    }
}
//setting properties using this function
let vaibhav= new person()
vaibhav.setAge(22)
console.log(vaibhav.age)

vaibhav.setRoll(45)
console.log(vaibhav.roll)

console.log("-----------------------------------------------")

//setting properties outside the class

let sakshi = new person()
sakshi.age=21
sakshi.roll=65
sakshi.fullName = "sakshi jadhav"

console.log(sakshi)

console.log("-------------------------------------------------------")

//setting properties with the constructor

class personT{
    constructor(fullName,age,rollNo){
        this.fn=fullName,
        this.ag = age,
        this.rn = rollNo
    }
}
let sakshiJ = new personT("Sakshi jadhav",21,65)
console.log(sakshiJ)




