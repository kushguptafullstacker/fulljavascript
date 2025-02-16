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
