// 03 Aug 2021
// Logical examples of strings

let newName = "indrajeet"
// we have to print this string in reverse
let reversedString = ""
for(let i=newName.length-1;i>=0;i--){
   reversedString =  reversedString + newName[i]
   
}
console.log(reversedString)

//Count of vowel in string
let count = 0
for (let i=0;i<newName.length;i++){
    if(newName[i]=="a" || newName[i]=="e" || newName[i]=="i" || newName[i]=="o" || newName[i]=="u"){
        count=count+1
    }}
    console.log(count)

console.log("-------------------------------------------")

let stt = "aaaabbc"   
function stringc (stt){
    if(stt.length==0){
        console.log('a4b2c2');
return;
    }
    let output='';
    let countA = 0;
    for (let i=0;i<stt.length;i++){
        countA++;
        if(stt[i] = stt[i+1]){
            output =stt[i] + countA;
        }
    }
    console.log(output);
}
stringc('')