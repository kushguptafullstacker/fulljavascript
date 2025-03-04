console.log("kush");

const myarr=["kush0" , "thor"]
const myobj={
    thor:"hammer",
    spider:"spude",
}
Object.prototype.kush=function(){
    console.log("i ma everywhere");
}
myobj.kush()//////////// in javascript everything is object function also a object array alsoa object and object is a object0 and string is alsoa object
// myarr.kush()
Array.prototype.small=function(){/////////only array will work on array 
    console.log("i am for array only");
}
myarr.small()
myobj.small()

let anotheruser="chaiy   "

const meristring=("kush           " )
String.prototype.kus=function(){
    console.log(this);
   console.log(this.trim().length); 
}
// meristring.kus()
// anotheruser.kus()

const teacher={
  camerallowed:"yes",
  teach:"btech"
}
const myteacher={
    name:"vikas chaudhary",
    experience :"pro"
}
const my=Object.setPrototypeOf(teacher , myteacher)
console.log(my);
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    name:"vikas",
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
   
}



Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideo);