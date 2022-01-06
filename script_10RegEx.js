//There are two ways on write reguler expression
let regex1 = new RegExp("hello");
let regex2 = /worlds/;

let lang = /python/gi;
let statement = "hi i am new to PYTHON and i am learning python";
// ------------------------------->
let h = statement.search(lang); //This method give us the starting index of searched element
console.log(h);
// ------------------------------->
let i = statement.match(lang); //This method give us matching elements
console.log(i);
// ------------------------------->
let r = statement.replace(lang, "javascript"); //This method replace the existing element with newone
console.log(r);
// ------------------------------->

//Program 1---->test method return whether the pattern exist in searched string or not(Output-boolean)
const j = /pune/;
let a = ["goving-nashik", "karan-pune", "laukik-karad", "abhi-parbhani"];
console.log(j.test(a[1]));
console.log(j.test(a[0]));
//or
let puneS = a.filter(function (el) {
  return j.test(el);
});
console.log(puneS);
//-------------------------------->

//Program 2---->Return the element which start with(a)
const k = /^a/;
let b = ["goving-nashik", "karan-pune", "laukik-karad", "abhi-parbhani"];
console.log(k.test(a[3]));
//or
let puneT = b.filter(function (el) {
  return k.test(el);
});
console.log(puneT);
//-------------------------------->

//Prog 3---->
let c = [
  "karan",
  "abhi",
  "kiran",
  "prati",
  "pashya",
  "sairaj",
  "ashutosh",
  "laukik",
];
const l = /^.....$/;

let cc = c.filter(function (el) {
  return l.test(el);
});

console.log(cc);
//--------------------------------------------->

//prog 4---->
let d = [
  "karan",
  "abhi",
  "kiran",
  "prati",
  "pashya",
  "sairaj",
  "ashutosh",
  "laukik",
];
const m = /^[a][bs]/;

let dd = d.filter(function (el) {
  return m.test(el);
});
console.log(dd);
//------------------------------------------>

//Prog 5---->
let e = [
  8775526541, 8775998741, 8955233662, 8725145795, 85421875, 8772456987125,
];
const n = /^[8][7].{8}$/;

let ee = e.filter(function (el) {
  return n.test(el);
});
console.log(ee);
//------------------------------------------>

//Prog 6----> [\d]=[0-9]
let f = [
    8775526541, 8775998741, 8955233662, 8725145795, 85421875, 8772456987125,
  ]
const o =/^[\d][\d].{8}$/    //[\d]--->1st and 2nd character should be a digit

let ff=f.filter(function(el){
    return o.test(el)
})
console.log(ff)
//----------------------------------->

//Prog 7---->
let g = [
    8775526541, 8775998741, 8955233662, 8725145795, 85421875, 8772456987125,
  ]
const p=/^[\D][\D].{8}/    //[\D]--->1st and 2nd character shouldn't be a digit

let gg =g.filter(function(el){
    return p.test(el)
})
console.log(gg)
//------------------------------------->

//Prog8---->
let hh= ["raman","rakesh","ram","rohan","rajneesh","rehan"]
const q =/^[\w][ae]/      //[\w]--->Element should starts with [A-Za-z0-9_]

let hhh = hh.filter(function(el){
    return q.test(el)
})
console.log(hhh)
//------------------------------------->

let ii= ["raman","rakesh","ram","rohan","rajneesh","rehan"]
const rr =/^[\W][ae]/    //[\W]--->Element shouldn't starts with [^A-Za-z0-9_]

let iii=ii.filter(function(el){
    return rr.test(el)
})
console.log(iii)


















