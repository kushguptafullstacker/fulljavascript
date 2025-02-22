// //////////////// all functional revising 

// function syamyname(){
//    const meranaam= "kush";
//     return meranaam ;
// }
// const Name=syamyname()
// console.log(Name);

// function hellojs(num1 , num2){
//      let result = (num1+num2)
//      return result

// } 
// const proper=(hellojs(1,2));
// console.log(proper);


// function one(username){
//      if(!username){
//         console.log("please enter a username");
//      }
//      else{
//           return `${username} just logged in`
//      }
// }
// console.log(one("ksuh"));


function cart(...val1){/// it is the rest operator give all vlaue pass in the argument it wil get access by 3 dots ... 
   return (val1)
}
console.log(cart(3 , 300 , 300 ,200 , 400));


let makeobj={
     Naam:"kush",
     age:12,

}
function obj(consumemakeobj){
     console.log(consumemakeobj.ummr);
};
obj({
     ummr:16,
     place:'soniapt'
})