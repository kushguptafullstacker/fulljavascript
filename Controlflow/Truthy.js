// console.log("kush");

// const usermail=[]

// if(usermail){
//     console.log("usermail get successfully");
// }
// else{
//     console.log("not found");
// }
// //falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const usermail=0;

if(usermail==0){
    console.log("useremail not found");
}else{

    console.log("not found");
}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")