//How do you find the length of a string?
let mernaam ="kush gupta"
console.log(mernaam.length)

//How do you convert a string to uppercase and lowercase
console.log(mernaam.toUpperCase());
console.log(mernaam.toLowerCase());

//How do you extract the first 5 characters from a string?
console.log(mernaam.slice(0,6));

//How do you check if a string contains a specific word?
console.log(mernaam.includes('gupta'));

//How do you replace "Hello" with "Hi" in a string?
console.log(mernaam.replace("gupta", "yash"));

/// How do you split a string into an array of words?

let email='kush8ar17 19a @gmma il.com         '
console.log(email.split(" "));

///How do you remove extra spaces from a string?

console.log(email.trim());
//How do you reverse a string?
let ummr ="ninetteen"
let ultimmir=ummr.split("").reverse().join("");
console.log(ultimmir);

//How do you extract numbers from a mixed string (e.g., "abc123xyz" → 123)?
let koisabhino="123456677854"
console.log(koisabhino.indexOf(5));

// how to use the charat method
ummr='twenty'
console.log(ummr.charAt('2'));