////////// boject practice 

/// how to access symbol element in js 

 const mysm=Symbol("")

const kushbio={
    name:"kush",
   [ mysm]:"mysm",
    age:19,
    e_amil:"kush8ar1719a@gmail.com"
}
console.log(kushbio.e_amil);
console.log(kushbio["age"]);
console.log(kushbio[mysm]);

kushbio.greetings=   function (){
  console.log("hello js user");  
}

kushbio.greetings2=function(){
    console.log(`hello ${this.name}`);
}
console.log(kushbio.greetings2());


const jsusert= new Object()
console.log(jsusert);

const jsuser={}
jsuser.email=('wavedesign@gmail.com')
jsuser.companyowner=("kuhs")

console.log(jsuser);

const jsuser1={
  name:"kush",
  age:20,
  mail:"kush3le",
  fulladress:{
    address:"711/22 ",
    city:"haryana",
    anotheraddresszzz:{
      state:"sonipat"
    }
  }
}
// console.log(jsuser1.fulladress.anotheraddresszzz.state);


// const jsuser2=Object.assign(jsuser,jsuser1)
// console.log(jsuser2);
  
const jsuser3={...jsuser , ...jsuser1}
console.log(jsuser3);

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id:2,
      email: "h@gmail.com"
  },
]
console.log(users[2]);