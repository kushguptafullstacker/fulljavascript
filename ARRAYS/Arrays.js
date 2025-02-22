
// const myage=[14 , "kush" , "hello world" , false]

// myage.push("khsuhi")/// push add the value in the last from the array
// myage.pop()/// remove the value from the last form the arrays 
// console.log(myage);

// const newarr=["kus gupta" , "fullstack developer" , `my age is${16}`]
// console.log(newarr.unshift(21));/// add the value in front of the araay
// console.log(newarr.shift());/// remove the value from the arrays
// console.log(newarr);

// ////
// console.log(newarr[2]);
// console.log(newarr.includes("kus gupta"));
// let new1=newarr.indexOf("kus gupta")///tell that which index in value present  where is your value 
// console.log(new1);

// let new2=newarr.join()
// console.log(new2.split(" ").reverse(""));

// /// main slica and splice

// let kushbio=["ksuh gupta" , 12 , true ]
// console.log(kushbio.slice(0,2));/// it give the value of 0 and 1 
// console.log(kushbio);/// not change in the original array

// console.log(kushbio.splice(0,3));/// it give the value from 0-2 indexing and manipulate the original array remove the value from the oprigina  array
// console.log(kushbio);


// ////

const supeheroes=["captain ameriaca", "thor" , "hilk"]
const indian=["shaktiman" , "krish"  , "batman"]

// supeheroes.push(indian);/// push pushall the elemants in sone arrays
// console.log(supeheroes);

// const newheroes=supeheroes.concat(indian)
// console.log(newheroes);
const mynew3=[...supeheroes,...indian]  
console.log(mynew3);

/// flat 
myarr=[10,18,19,10,"kush," , ["hrf", 18 , 10 ,1,[3907,28934,233248]]]
console.log(myarr.flat(Infinity));// express all the value in one array 

const Name=["kush , abhishek , 1 ,2 " , 1 ,2 , 3]
const secondname=[1,2345,"re"]

const fouth=[...Name ,  ...secondname]
console.log(fouth);
