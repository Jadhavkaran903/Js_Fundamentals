   // 10 july 2021

// Array
// Number Array

let numbers = [33, 44, 55, 66, 77, 88]

// String

let name = ["karan", "john", "abhi", "laukik"]

// Boolean

let isPassed = [true, false, true, false]

// Mixed

let person = ["karan", "abhi", 29, "hindi", "marathi"]

// Array stores the value by index 

console.log(person[0])
console.log(person[3])

console.log("----------------------------------")

// for loop in Array

for (let i = 0; i < person.length; i++) {
    console.log(i)
    console.log(person[i])
}

// reverse the Array

for (let i = person.length - 1; i >= 0; i--) {
    console.log(i)
    console.log(person[i])
}

console.log("---------------------------------")


// 12 july 2021

// slicing in the Array
// 2 Dimensional array

let person1 = ["karan", "laukik", 29, ["python", "java", "ruby"], ["hindi", "marathi"]]
console.log(person1[4][1]);
console.log(person1[2]);
console.log(person1[3].length);

console.log("---------------------------------")
// slicing

let launguges = ["Marathi", "Hindi", "Urdu", "Telgu", "English"]

console.log(launguges.slice(0, 3));
console.log(launguges.slice(1, 3));
console.log(launguges.slice(3, 5));
console.log(launguges.slice(1))

// push-Add element to the end of the array
let v = launguges.push("spanish")
console.log(launguges)
console.log(v)

// pop-remove last element from the array

let u = launguges.pop()
console.log(launguges)
console.log(u)

// Unshift-Add element to the start of the array
let added = launguges.unshift("French")
console.log(launguges)
console.log(added)

// Shift-Remove element from the end of the array
let removed = launguges.shift()
console.log(launguges)
console.log(removed)

// Map-return new array and perform actin on each element.
let yearOfBirth = [2002, 1996, 1998, 2004, 2006, 2008]

let age = yearOfBirth.map(function (el, index, arr) {
    return 2021 - el
})
console.log(age)

// filter 
let ages = [22, 35, 66, 77, 87, 45, 55, 66]
let ageGrFifty = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 50) {
        ageGrFifty.push(ages[i])
    }
}
console.log(ageGrFifty)

console.log("--------------------------------------")

let h = ages.filter((el, index, arr) => el > 50)      //Alternative method
console.log(h)

console.log("--------------------------------------")

// Sum 
let marks = [100, 200, 300, 400, 500, 600, 700,]
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

console.log("--------------------------------------")

// Reduce 
let t = marks.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)
console.log(t)

// forEach- Return nothing

let namesOfStudents = ["chinmay", "sarika", "karan", "prem", "preeti"]

let tt = namesOfStudents.forEach(function (el, index, arr) {
    console.log(`welcome ${el}`)
})
console.log(tt)

// Array 14 july 2021
let names = ["chinmay", "amol", "poorva", "ramesh", "amit"]
let fourcharletter = []
for (let i = 0; i < names.length; i++) {
    if (names[i].length == 4) {
        fourcharletter.push(names[i])

    }
}
console.log(fourcharletter)

console.log("---------------------------------------")

//  Filter 

let fourchar = names.filter(function (cv, index, arr) {
    return cv.length == 4
})
console.log(fourchar)

console.log('----------------------------------------')

let smarks = [[77, 78, 80], [72, 63, 55], [66, 77, 88]]
let y = smarks.map(function (cv, index, arr) {
    return cv.reduce(function (acc, cv, index, arr) {
        return acc + cv
    })
}).filter(function (el) {
    return el > 200
})
console.log(y)

console.log("------------------------------------")

// Bank transection 

let transections = [200, -100, 900, -500, 770, 778]
let withdraw = transections.filter(function (el) {
    return el < 0
}).reduce(function (acc, el) {
    return acc + el
})
console.log(withdraw)

let deposite = transections.filter(function (el) {
    return el > 0
}).reduce(function (acc, el) {
    return acc + el
})
console.log(deposite)

let totaltransections = transections.reduce(function (acc, el) {
    return acc + Math.abs(el)
})
console.log(totaltransections)

console.log("-------------------------------------------")

// 16 july 2021


// Flat -to add two or more array
let cal = [[1, 33, 44], [44, 55, 66]]
let cal2 = cal.flat()
console.log(cal2)

let dArray = [[1, 2, 3], [4, 5, 6]]
let single = dArray.flat()
console.log(single)

console.log("-------------------------------------------")

// indexof 

let lang = ["marathi", "Hindi", "German"]
let r = lang.indexOf("Hindi")
console.log(r)
//if the element is not present the output is -1 

// let fruits = ["Apple", "Banana", "Grapes", "Chiku", "Papaya", "Dragonfruit"]
// let userinput = prompt('Which fruit you wish to buy')
// if (fruits.indexOf(userinput) >= 0) {
//     console.log('fruit is available')
// }
// else {
//     console.log('fruit not available')
// }

console.log("----------------------------------------------")

// Condition statements-
// Single input--->Multipal output

// Truthy or false 
// 0==false
// -1,2==True
// null,undifined==false
// Special symbols as strings==true

// let age1 = Number(prompt('please enter age?'))
// if (age1 > 10) {
//     console.log('You can learn driving')
// }
// else if (age1 > 5 && age1 <= 10) {
//     console.log('swimming')
// }
// else {
//     console.log('Stay at home')
// }

// 17 july 2021

// Concat-->joins two or more arrays or strings

let arrOne = [1, 2, 4, 5]
let arrTwo = [3, 4, 5, 6]

let ys = arrOne.concat(arrTwo)
console.log(ys)
console.log(arrTwo.concat(arrOne))    //printing elements of 2nd array before 1st array

console.log("--------------------------------------------")

// sort strings 

let namesOfStudent1 = ["prasad", "pranita", "kimaya", "rajkiran", "akash"]
namesOfStudent1.sort()
console.log(namesOfStudent1)

console.log("---------------------------------------------")

// Reverse 

let namesOfStudent2 = ["prem", "karan", "vishnu", "raj", "akshaya"]
namesOfStudent2.reverse()
console.log(namesOfStudent2)

console.log("----------------------------------------------")

//fill-->Fills a specified element in array with a static value

let arr = [1, 2, 3, 4, 5, 6, 77, 88, 77, 77, 77, 77, 99]
arr.fill(88, 1, 6) //End value not included
console.log(arr)

console.log("-----------------------------------------------")

// Splice-->Methode changes the content of array by removing and replacing new elements of array

let d = ["karan", "Prasad", "Abhijeet", "Sairaj", "laukik"]
d.splice(1, 3, "Kiran", "Ashutosh", "Govind") //End value included
console.log(d)

console.log("------------------------------------------------")


//Objects
// Object does not stores the value by index 

let persons = ["karan", "Jadhav", 25, 42]
console.log(persons[1])

console.log("-----------------------------------------------")

//There are 2 methods of accessing object properties
// 1]Dot notation
// 2]Bracket notation

let personA = {
    firstName1:"karan",
    SurName:"jadhav",
    aGe:25,
    id:42
}
//Dot notation
console.log(personA.firstName1)

//Bracket notation
console.log(personA['SurName'])

console.log("----------------------------------------------")

let studentsA = [{
    firstName:"Abhijeet",
    lastName:"Dhaide",
    age:26,
    id:01
},
{
    firstName:"Sairaj",
    lastName:"sawant",
    age:25,
    id:14
},
{
    firstName:"prasad",
    lastName:"Dhavle",
    age:23,
    id:55
}]

//Findindex
let g = studentsA.findIndex(function(el,index,arr){
    return el.firstName=="prasad"
})
console.log(g)

let ha = studentsA.findIndex(function(el,index,arr){
    return el.age==23
})
console.log(ha)

console.log("-----------------------------------------------")

//Includes-->This methode return true if a string contain specified string,otherwise false

console.log("karan".includes('r'))
console.log("karan".includes('ran'))

console.log("-----------------------------------------------")

//Some,every-->True and false

let agess = [4,5,6,22,55,77,24]
let sta = agess.some(function(el,index,arr){
    return el>12
})
console.log(sta)

let eta = agess.every(function(el,index,arr){
    return el>22 //all values should be less than 22 then it print true otherwise false
})
console.log(eta)

console.log("-----------------------------------------------")

//Join 
let fullName = ["karan","jadhav"]
let named = fullName.join(" ")
console.log(named)

console.log("-----------------------------------------------")

//Flatmap

let namesD = [["chinmay","deshpande"],["Karan","Jadhav"],["prasad","dhavle"]]
let gaw = namesD.flatMap(function(el){
    return el.join(" ")
})
console.log(gaw)













