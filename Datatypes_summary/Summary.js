////////  datatypes summary
/*
datatypes defined in 2 categoery which store the values in memory
2 category is (primitive and non primitive)

primitve-that datatypes cannot be changes and create the new copy and its value stored in stack [strings , numbers, boolean , null , undefined , bigint , symbol]

Non primitive - that datatypes can be changes and share the same reference and its value store in heap memory [arrays , objects , function] 
*/

// how primitive datatypes work
 let a=10
 b=a
 b=20
 
 console.log(a,b );/// a will remain same and b get changed

/// how unprimitve datatypes work

let bio=["kush" , 20 , 30  ]
console.log(bio);/// array

bio1={
    naam:"kush",
    age:12,
}

let bio2=bio1
bio2.naam="yash"
console.log(bio1.naam); /// it can change but share the same reference

/// difference between stack and heap memory 

/*
stack and heap memory is which store the data in the programe execution 

stack -a fixed size memory store the loacal variable function calls and control flow 

*/
// for example

let x=10
console.log(x);// stored in stack and we cant change primitive data type

/*
heap memory -is which where store the data for long term and it stores the function , obj , arrays 
*/
// for example
let myobj={
    Naam:"kush",
     age:21,
}
console.log(myobj);// store in heap memory 