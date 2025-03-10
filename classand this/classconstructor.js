// console.log("kush");

class User{
    constructor(name , age){
       this.name=name;
       this.age=age;

    }
    increment(){
        return (this.name ,this.age)
    }
}
const my= new  User("kush" , 20000)
console.log( my.increment());  


class chai{
    constructor(flavour, price){
        this.flavour=flavour
        this.price=price
    }
    flav(){
        console.log(`chain flavour is ${this.flavour}`);
    }
    prices(){
        console.log(`price of the chai is ${this.price}`);
    }
}
const mynew = new chai("icetea" , 100)
mynew.flav()
mynew.prices()

/// how to extend the value


class Userone{
    constructor(name){
       this.name=name
    }
    logme(){
        console.log(this.name);
    }
}
class usertwo extends Userone{
    constructor(name ,email , password){
        super(name)
       this.email=email
       this.password=password
    }
    logout(){
        console.log(this.name);
    }
}
const use= new usertwo("kush" , "123@.com" , "123")
use.logout()
use.logme()
//// how to extract he value uses contructor 