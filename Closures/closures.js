

/////////////////  here we are learn closures

function closureses(){
    let name="kush"
    function fullname(){
      console.log(name); 
    }
    fullname()
}
 const pranaam=closureses()
/////  closures help defien the variable in the function

////////////////


function surname(){
    let surname="gupta"

    function dos (){
        let secret="123"
        console.log(surname);
         
    }
    return dos;    
}
const my=surname()
my()


//// when the function execute lexiacal scoping 