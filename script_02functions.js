//Functions
// 28 june 2021

//1)Function declartion
//2)Function expression
//3)Arrow function

//Function declartion

function calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
calculator(50, 20);

console.log("-----------------")


//Function without parameter and without return type

// function add(){
// console.log(8+9)
//}
// add()

//function with parameter and with return type  

function add(x, y) {
    return x + y
}
let sum = add(12, 18);
console.log(sum)
console.log(sum * 0.001)

//function without parameter and with return type
function pievalue() {
    return 3.14
}
let n = pievalue();
console.log(n)

console.log("----------------")

//function declartion

function addy(u, t) {
    return u * t
}
let daddo = addy(70, 86);
console.log(daddo)

//function expression
let subbu = function addy(u, t) {
    return u * t
}
let y = addy(44, 98);
console.log(y)

//Arrow function

let subti = (u, t) => {
    return u * t
}
let tri = subbu(55, 88);

console.log("-----------------------")

function add(x, y) {
    console.log(x + y)
    return x + y
}
let r = add(12, 13);
console.log(r)


function add(x, y) {
    console.log(x + y)
}
let g = add(12, 13);
console.log(g)

// arrow function 
let aadd = (x, y) => x + y;
let cc = aadd(12, 13);
console.log(cc)

console.log("----------------------------------")

// function as a parameter to another function
let fn = function (x, y) {
    return x + y
}
function cal(fn) {
    adda = fn(12, 13)
    return adda
}

let p = cal(fn)
console.log(p)

// console.log("-----------------------------------")

let students = ["karan", "prasad", "abhi", "ashu", "yogesh"];
console.log(students[3])

let u = students.length;
console.log(u)
console.log(students[u - 3])

//-------------------------------->

let sub = function (a, b) {
    console.log(a - b)
}
sub(12, 6)

let fnN = function (a, b) {
    console.log(a - b)
}
function subResult(fnN) {
    let result = fnN(12, 13)
    return result
}
let d = subResult(sub)
console.log(d)


console.log("-------------------------------")

function add(x, y) {
    return x + y
}
let du = add(12, 13)
console.log(du)

// 1 july 20121

let names = ["paras", "maya", "jay", "rani"];
console.log(names[0])
console.log(names[3])

// loop--repetative action 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log(names[3])

console.log("-------------------")

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log('---------------------------')

// arry function 
let names2 = ["sam", "ashok", "jaggu", "duke"];
console.log(names2[3])

console.log(names2.length)

for (let i = 0; i < names2.length; i++) {
    console.log(i)
    console.log(names2[i])
}
console.log("--------------------------------")

// reversing the Array

for (i = names2.length - 1; i >= 0; i--) {
    console.log(names2[i])
}
console.log(names2[3])




















