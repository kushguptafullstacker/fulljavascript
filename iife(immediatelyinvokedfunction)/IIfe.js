////////// here we are leatn how we immediately function use for propert from global scope polute


(function saymyname(name){
    if(name==='kush') console.log("registered succedds");
     else{
        console.log("user not found");
     }
})("kush");   /// this is immediately invoked function ///if we not add semicolon and write two iife then not work 

((age)=>{
    console.log(age);
})(12)

/// synatxx of immediately incoked function

(()=>{

})();/// for fat arrow 

(function heelo(){

})()/// fro normal function