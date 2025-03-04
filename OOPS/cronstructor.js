///////////// here we start the contructor why we use this 


function User( username , age , isloggedin){
   this. username =username /// this make the object
   this. age=age
   this. isloggedin=isloggedin

   console.log(this.username);
}
const one = new User("kush gupta" , 12 , true)
console.log(one);
const two= new User("khushi jain"  , 12 , false)
console.log(two);
/*

The 4 Pillars of OOP (Object-Oriented Programming)
Think of a car 🚗 as an example to understand these concepts.

1️⃣ Abstraction – Hiding Details
👉 You don’t need to know how the engine works, you just turn the key and drive!

In code: Hides unnecessary details and shows only what’s important.
Example: When you use a coffee machine ☕, you press a button to get coffee. You don’t need to know how it brews internally.
2️⃣ Encapsulation – Keeping Things Private
👉 The car’s engine and internal parts are protected under the hood. You can only use buttons and pedals to control it.

In code: Data is hidden inside a class and accessed through specific methods.
Example: Your phone 📱 has a battery (hidden inside) but you can only check battery percentage (controlled access).
3️⃣ Inheritance – Passing Features
👉 A truck and a car both have wheels, headlights, and an engine because they are both types of vehicles! 🚗 🚛

In code: A class can inherit properties and behaviors from another class.
Example: A cat 🐱 and a dog 🐶 are both animals, so they inherit "eat" and "sleep" behaviors from the Animal class.
4️⃣ Polymorphism – One Thing, Different Forms
👉 A car can start by using a key, push-button, or remote – but all do the same thing!

In code: A function or object behaves differently based on the situation.
Example: A person can be a father, a son, and a teacher at different times, but is still the same person.
🎯 Final Summary
Concept	Simple Example
Abstraction	Using a TV remote without knowing how it works internally.
Encapsulation	A bank account hides the balance; you can only deposit or withdraw.
Inheritance	A child inherits eye color from parents.
Polymorphism	A single word has different meanings based on context (e.g., "run" can mean running a marathon or running a program).

*/