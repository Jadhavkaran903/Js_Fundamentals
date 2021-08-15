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

let namesOfStudents = ["chinmay", "sarika", "karan", "prem", "preeti"]

let proff =namesOfStudents.forEach(function(el,index,arr){
    console.log(`professor ${el}`)
})
console.log(proff)

let fourletter = namesOfStudents.filter(function(el,index,arr) {
    return el.length==6
})
console.log(fourletter)


let friend = {
    name1: "prasad dhavle",
    age: 25,
    address: "Akluj",
    id: 67
}
console.table(friend)

console.log(`hey my friend name is ${friend.name1} and he is from ${friend.address}.`)











