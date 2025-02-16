const age=21;
console.log( typeof age);

const myage= new Number(19)
console.log(myage);

console.log(myage.toString().length);//// give the string object and give length also
console.log(myage.toFixed(2));/// give the 2 decima point 

const anothernumber=123.433
console.log(anothernumber.toPrecision(6));/// rounds of the no. to the specified no. of digits

// may return the exponential es necessary 

const math=(1000000)
console.log(math.toLocaleString("en-IN"));

console.log(Math.abs(-4));/// convert the negative in postive not convert positive to negative 
console.log(Math.round(42.3));/// round of the number if number is ain decimal
console.log(Math.ceil(42.3));// ceil give the no. of the top value 
console.log(Math.floor(44.3));/// floor give the below 
console.log(Math.min(2,5,3));/// give the minimum bvalue 
console.log(Math.max(5,10,17,18));/// give the max value 

console.log(Math.random());/// give the decimsal number between 0 and 1 
console.log(Math.random()*10+1)// shift the no. by multiply 10 so its not give 0
console.log(Math.floor(Math.random()*10+1));//// its give the floor value 
