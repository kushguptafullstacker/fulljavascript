/// here we study control flow if and else synatx

const name="kush"

if(name==="chirag")console.log("kush registerd successfully");
else{
    console.log("kush not found");
}

// //< greater than, > lower than, <= grater than or equal, >=slower than or equalt to , == is equal to , != not isequal to , === strict check equal to , !==not is equal to not a strict check

// const age=20

// if(age>20){
//     console.log("kush age found");
// }
// else{
//     console.log("grater then 20")
// }

// const balance=1400

// if(balance<1900){
//     console.log("balance is gretaer then 1900");
// }
// else if(balance<=1400){
//     console.log("balance found");
// }
// else{
//     console.log("balance is out of datwe ");
// }
const userlogin=true;
const email=true
const googlelogin = true

if(userlogin && email && googlelogin){
    console.log("googlelogin error not found");
}
else{
    console.log("googlelogin not found");
 }

 if(  email || googlelogin){
    console.log("login scuceesffully");
 }
 else{
    console.log("google logimn");
 }