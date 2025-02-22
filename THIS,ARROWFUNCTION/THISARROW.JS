// const myname={
//     Naam:"KUSH",
//     age:21,
//     mybio:function hii(){
//         console.log(`hii my name is ${this.Naam} my age is ${this.age}`);//// this give the value of current context without this we cant acess the cureent value
//     }
// }
// myname.mybio()

// const one={
//     Naam:"abhishesk bhai",
//     age:'23',
//    mybio:()=>{
//      console.log(`my name is ${this.Naam}`);
//    }
// }
// one.mybio()//// we cant access this in fat arrow function 

const meranaam=(username)=>{
     if(username==="kush"){
        console.log("kush added");
     }
     else{
        console.log("plz sent username");
     }
}
meranaam("")