//Logical programs for interview

//Converting string into array

let str = "Karan,prasad,yogesh"
let arr = []
arr.push(str)
console.log(arr)

//Reversing the string and string elements

let str1 = "Karan,prasad,yogesh,Prataprao"
let str2 = ""
for(let i=str1.length-1;i>=0;i--){
    str2+=str1[i]
}
console.log(str2)

//Again reversing the reversed string

let revStr = str1.split(',').reverse()
console.log(revStr)
//----------------------------------------
let strr = 'Karan'
let newstr = ""
for (let i=strr.length-1;i>=0;i--){
    newstr+=strr[i]
}
console.log(newstr)
//================================================

//Palindrome number

str3 = 'nitin'
strr3 =""
for (let i = str3.length-1;i>=0;i--){
    strr3+=str3[i]
}
if(str3==strr3){
    console.log('string is palindrome')
}
else{
    console.log('string is not palindrome')
}

//=====================================================

let sssttr = 'madam'
let revvstr = sssttr.split("").reverse().join("")
if(revvstr==sssttr){
    console.log('string is palindrome')
}
else{
    console.log('string is not palindrome')
}

function reverseString (sssttr){
    return sssttr
}
let revvsstr = reverseString("hello")
console.log(revvsstr)

//-----------------------------------------------------------

//Factorial number

var dig = 5
var fact = 1
for (let i = 0; i<dig+1;i++){
    fact*=i
} 
console.log(fact)

//luckey seven


function lucky_Sevens(arr){
    return /777/g.test(arr.join(""))
}

let b = lucky_Sevens ([2,1,5,1,0,7,7,0,7])
console.log(b)

function luckySevens(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr.slice(i,i+2).reduce((a,c)=>a+c)===7)return true
        
    }
    return false
}
let aadd = luckySevens([2,1,5,1,0])
console.log(aadd)






















