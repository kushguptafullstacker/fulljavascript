// console.log("kush");

////  how the scope works  
//which declare out of the scope is global scope 
// which declare inside the scope is global scope  

var c=40
{
    let a="kush"
    const b="12"
    //  c=223 
    
}
    // console.log(c); // only this wrok because of bloack scope and global scope
    // console.log(b);/// this not wotk because its not in the scope
    // console.log(a);// same its not work because of scope and global scope


//// scope and 

/// scope in function

function saymyname(){
  const Naam="kush"
  console.log(Naam);
//    console.log(full);/// it will not work because child take access of parents not parent take access of child 

  function fullname(){
    const full="kush gupta"
    console.log( full);
  }
//   console.log(full); // it is not working because of scope issues 
  fullname()

}
saymyname()

/// it all about the scope 


/// now start hoisting
hellojs()/// access this before initioalization and its work 
function hellojs(){
    console.log("hii js");
}

/// canoot access this before initailization 
const hiijs = function hii (){
    console.log("hello js");
}
hiijs()
