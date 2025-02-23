

const arr=[1,2,3,4,5,6]

for (const num of arr) {
     console.log(num);
}

// const myobj={
//     name:"ksuh",
//     age:19,
// }

// for(const num of myobj){
//     console.log(num);
// }////////////for of loop not work with my obj

// const mystring="hello world"
// for(const num of mystring){
//     const mynum=num.split(" ")
//     console.log(mynum);
// }
const mape= new    Map()
mape.set("js","javascript")
mape.set("html","hyper text markup lang")

for(const [key , values] of mape){
    console.log(key , values);
}
for(const[ keys,values] of mape){
    console.log(values);
}