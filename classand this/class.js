function User(username , age){
    this.username=username
    this.age=age;
    console.log("called");
}
function Myintro(username , islogeedin){
    User.call(this,username)
    this.islogeedin=islogeedin///////////here how we transfer form one function data to another function
}
const my= new Myintro("kush" ,true)
console.log(my);

