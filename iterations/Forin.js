const arr=[1,2,3,4,5,6,7]


for(const num in arr){
    console.log(num);
}

const myobj={
    Naam:"kush",
    Age:12,
}
for (const num in myobj){
    console.log(num , myobj[num]  );///// we take the myobj and extract the keys from variable num
}

// const map=new Map()
// map.set("js" , "javascript")
// map.set("react","reactjs")

// for(const nuim in map){
//     console.log(nuim);
// }
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } for in loop not work with map