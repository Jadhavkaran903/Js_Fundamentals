// let Namei = 'karan jadhav'
// NameR =""
// for(let i=Namei.length-1;i>=0;i--){
//   NameR+=Namei[i]
// }
// console.log(NameR)


// let even =[]
// let odd=[]

// for(let i=0;i<ct.length;i++){
//   if(ct[i]%2==0){
//     even.push(ct[i])
//   }
//   else{
//     odd.push(ct[i])
//   }
// }

// console.log(even)
// console.log(odd)

// let dup=[]

// for(let i=0;i<ct.length;i++){
//   if(!dup.includes(ct[i])){
//     dup.push(ct[i])
//   }
// }
// console.log(dup)

// let ct =[33, 44, 55, 66, 77, 88,33,44,66,55,77,22,88]

// let highest=0
// let lowest=0

// for(let i=0;i<ct.length;i++){
//   if(ct[i]>highest){
//     highest=ct[i]
//   }
//   else if(ct[i]<lowest){
//     lowest=ct[i]
//   }
// }
// console.log(highest)
// console.log(lowest)

let ct =[33, 44, 55, 66, 77, 88,33,44,66,55,77,22,88]

ct.sort((a,b)=>a-b)
console.log(`Min value is ${ct[0]}`)
console.log(`Max value is ${ct[ct.length-1]}`)

let split =
  "I am new to javascript and i wish to learn every concept of javascript javascript is great"

  
  let count=0
  for (let i=0;i<split.length;i++){
    if (split[i]== "a" || split[i]== "e" || split[i]== "o" || split[i]== "u" || split[i]== "i"){
      count++
    }
  }
  console.log(count)










































